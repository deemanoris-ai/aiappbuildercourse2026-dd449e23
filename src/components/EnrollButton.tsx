import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { startCheckout } from "@/lib/checkout";
import { CHECKOUT_ERROR_MESSAGE, WHATSAPP_URL } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function EnrollButton({
  className,
  label = "Enroll Now",
  size = "default",
}: {
  className?: string;
  label?: string;
  size?: "default" | "lg";
}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await startCheckout(
        (paymentId) => {
          setLoading(false);
          navigate({ to: "/thank-you", search: { payment: paymentId } });
        },
        (message) => {
          setLoading(false);
          toast.error(message || CHECKOUT_ERROR_MESSAGE, {
            action: {
              label: "WhatsApp",
              onClick: () => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer"),
            },
          });
        },
      );
    } catch {
      toast.error(CHECKOUT_ERROR_MESSAGE, {
        action: {
          label: "WhatsApp",
          onClick: () => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer"),
        },
      });
    } finally {
      // The checkout window is open (or failed) by now — never leave the CTA stuck.
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-busy={loading}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold text-primary-foreground transition-all duration-300",
        "bg-[image:var(--gradient-primary)] glow-ring hover:-translate-y-0.5 active:translate-y-0",
        loading && "opacity-80",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        className,
      )}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {loading ? "Opening checkout…" : label}
      {loading ? null : (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
