import { getRequestHeader } from "@tanstack/react-start/server";

export const META_PIXEL_ID = "2057709288169530";

export type MetaConversionInput = {
  eventName: string;
  eventId: string;
  eventSourceUrl?: string | undefined;
  value?: number | undefined;
  currency?: string | undefined;
  contentName?: string | undefined;
  fbp?: string | undefined;
  fbc?: string | undefined;
};

/**
 * Server-side Conversions API dispatch. Shares event_id with the browser pixel
 * so Meta deduplicates the pair.
 */
export async function sendMetaConversion(input: MetaConversionInput) {
  const accessToken = process.env["META_CAPI_ACCESS_TOKEN"];
  if (!accessToken) return { sent: false as const, reason: "not_configured" };

  let clientIp: string | undefined;
  let userAgent: string | undefined;
  try {
    clientIp = (getRequestHeader("x-forwarded-for") ?? "").split(",")[0]?.trim() || undefined;
    userAgent = getRequestHeader("user-agent") ?? undefined;
  } catch {
    /* outside a request context */
  }

  const testCode = process.env["META_CAPI_TEST_EVENT_CODE"];

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: input.eventName,
        event_id: input.eventId,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        ...(input.eventSourceUrl ? { event_source_url: input.eventSourceUrl } : {}),
        user_data: {
          ...(clientIp ? { client_ip_address: clientIp } : {}),
          ...(userAgent ? { client_user_agent: userAgent } : {}),
          ...(input.fbp ? { fbp: input.fbp } : {}),
          ...(input.fbc ? { fbc: input.fbc } : {}),
        },
        custom_data: {
          ...(input.value !== undefined ? { value: input.value } : {}),
          ...(input.currency ? { currency: input.currency } : {}),
          ...(input.contentName ? { content_name: input.contentName } : {}),
        },
      },
    ],
    ...(testCode ? { test_event_code: testCode } : {}),
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(accessToken)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    if (!res.ok) {
      console.error("Meta CAPI error", res.status, await res.text());
      return { sent: false as const, reason: "request_failed" };
    }
    return { sent: true as const };
  } catch (error) {
    console.error("Meta CAPI exception", error);
    return { sent: false as const, reason: "exception" };
  }
}
