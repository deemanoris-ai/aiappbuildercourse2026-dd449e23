import { createRazorpayOrder, verifyRazorpayPayment } from "./razorpay.functions";

export const COURSE_PRICE_INR = 1999;

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

function loadRazorpayScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return reject(new Error("Unavailable"));
    if (window.Razorpay) return resolve();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Could not load the payment window."));
    document.body.appendChild(script);
  });
}

export async function startCheckout(onSuccess: (paymentId: string) => void, onError: (message: string) => void) {
  try {
    await loadRazorpayScript();
    const order = await createRazorpayOrder();

    const rzp = new window.Razorpay!({
      key: order.keyId,
      amount: order.amount,
      currency: order.currency,
      name: "AI App Builder Course",
      description: "Lifetime access with live mentorship",
      order_id: order.orderId,
      theme: { color: "#2f6bff" },
      handler: async (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) => {
        try {
          const result = await verifyRazorpayPayment({ data: response });
          onSuccess(result.paymentId);
        } catch {
          onError("We could not verify your payment. Please contact support.");
        }
      },
      modal: { ondismiss: () => onError("Payment cancelled.") },
    });

    rzp.open();
  } catch (error) {
    onError(error instanceof Error ? error.message : "Something went wrong.");
  }
}
