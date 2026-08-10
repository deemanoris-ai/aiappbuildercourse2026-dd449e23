import { createRazorpayOrder, verifyRazorpayPayment } from "./razorpay.functions";
import { trackMeta } from "./meta-tracking";
import { CHECKOUT_ERROR_MESSAGE } from "./site-config";

export const COURSE_PRICE_INR = 999;


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

    // User is entering the payment flow — not a purchase yet.
    void trackMeta("InitiateCheckout", {
      value: COURSE_PRICE_INR,
      currency: "INR",
      contentName: "AI App Builder Course",
    });

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
          // Fired only after the backend verified the Razorpay signature.
          void trackMeta("Purchase", {
            value: COURSE_PRICE_INR,
            currency: "INR",
            contentName: "AI App Builder Course",
            eventId: `purchase_${result.paymentId}`,
          });
          onSuccess(result.paymentId);
        } catch {
          onError("We could not verify your payment. Please contact support.");
        }

      },
      modal: { ondismiss: () => onError("Payment cancelled.") },
    });

    rzp.open();
  } catch (error) {
    console.error("Checkout failed", error);
    onError(CHECKOUT_ERROR_MESSAGE);
  }
}
