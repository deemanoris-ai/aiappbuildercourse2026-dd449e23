import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { startCheckout } from "@/lib/checkout";
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
    setLoading(true);
    await startCheckout(
      (paymentId) => {
        setLoading(false);
        navigate({ to: "/thank-you", search: { payment: paymentId } });
      },
      (message) => {
        setLoading(false);
        toast.error(message);
      },
    );
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold text-primary-foreground transition-all duration-300 disabled:opacity-70",
        "bg-[image:var(--gradient-primary)] glow-ring hover:-translate-y-0.5 active:translate-y-0",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        className,
      )}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
