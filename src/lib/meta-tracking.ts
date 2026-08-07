import { getFbCookies, newEventId, trackPixel } from "./meta-pixel";
import { sendMetaEvent } from "./meta-capi.functions";

/**
 * Fires a Meta event on the browser pixel and, in parallel, through the
 * Conversions API with the same event_id so Meta deduplicates them.
 */
export async function trackMeta(
  eventName: string,
  opts: { value?: number; currency?: string; contentName?: string; eventId?: string } = {},
) {
  if (typeof window === "undefined") return;
  const eventId = opts.eventId ?? newEventId();
  const { fbp, fbc } = getFbCookies();

  trackPixel(
    eventName,
    {
      ...(opts.value !== undefined ? { value: opts.value } : {}),
      ...(opts.currency ? { currency: opts.currency } : {}),
      ...(opts.contentName ? { content_name: opts.contentName } : {}),
    },
    eventId,
  );

  try {
    await sendMetaEvent({
      data: {
        eventName,
        eventId,
        eventSourceUrl: window.location.href,
        ...(opts.value !== undefined ? { value: opts.value } : {}),
        ...(opts.currency ? { currency: opts.currency } : {}),
        ...(opts.contentName ? { contentName: opts.contentName } : {}),
        ...(fbp ? { fbp } : {}),
        ...(fbc ? { fbc } : {}),
      },
    });
  } catch {
    /* never block the UI on analytics */
  }
}
