import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";





export const createRazorpayOrder = createServerFn({ method: "POST" }).handler(async () => {
  const keyId = process.env["RAZORPAY_KEY_ID"];
  const keySecret = process.env["RAZORPAY_KEY_SECRET"];
  if (!keyId || !keySecret) throw new Error("Payments are not configured yet.");

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${keyId}:${keySecret}`)}`,
    },
    body: JSON.stringify({
      amount: 199 * 100,
      currency: "INR",
      notes: { product: "AI App Builder Course" },
    }),
  });

  if (!res.ok) {
    console.error("Razorpay order failed", await res.text());
    throw new Error("Could not start the payment. Please try again.");
  }

  const order = (await res.json()) as { id: string; amount: number; currency: string };
  return { orderId: order.id, amount: order.amount, currency: order.currency, keyId };
});

export const verifyRazorpayPayment = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({
        razorpay_order_id: z.string().min(1),
        razorpay_payment_id: z.string().min(1),
        razorpay_signature: z.string().min(1),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const keySecret = process.env["RAZORPAY_KEY_SECRET"];
    if (!keySecret) throw new Error("Payments are not configured yet.");

    const { createHmac, timingSafeEqual } = await import("crypto");
    const expected = createHmac("sha256", keySecret)
      .update(`${data.razorpay_order_id}|${data.razorpay_payment_id}`)
      .digest("hex");

    const a = Buffer.from(expected);
    const b = Buffer.from(data.razorpay_signature);
    const valid = a.length === b.length && timingSafeEqual(a, b);
    if (!valid) throw new Error("Payment verification failed.");

    return { verified: true as const, paymentId: data.razorpay_payment_id };
  });
