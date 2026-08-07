export const META_PIXEL_ID = "2057709288169530";

type FbqFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

/** Base pixel snippet — injected in <head> via the root route's head().scripts. */
export const metaPixelBaseScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');`;

export function newEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

export function trackPixel(
  event: string,
  params: Record<string, unknown> = {},
  eventId?: string,
) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", event, params, eventId ? { eventID: eventId } : undefined);
}

/** Cookies Meta uses to match browser and server events. */
export function getFbCookies() {
  if (typeof document === "undefined") return {};
  const read = (name: string) =>
    document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${name}=`))
      ?.split("=")[1];
  return { fbp: read("_fbp"), fbc: read("_fbc") };
}
