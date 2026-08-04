import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Download, ArrowLeft, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const DOWNLOAD_URL =
  "https://drive.google.com/drive/folders/1iIAP9PFTjdMd03Wyut7_w7Zwa-5P_BDm?usp=sharing";

export const Route = createFileRoute("/thank-you")({
  validateSearch: (search: Record<string, unknown>) => ({
    payment: typeof search["payment"] === "string" ? search["payment"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Thank You — AI App Builder Course Access" },
      {
        name: "description",
        content:
          "Your enrollment is confirmed. Download your AI App Builder Course material and bonus resources.",
      },
      { property: "og:title", content: "Thank You — AI App Builder Course" },
      { property: "og:description", content: "Enrollment confirmed. Download your course material and bonuses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  const { payment } = Route.useSearch();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_25%,transparent),transparent)]" />
      <Reveal className="w-full max-w-xl">
        <div className="surface-card glow-ring p-8 text-center sm:p-12">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[image:var(--gradient-primary)]">
            <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
          </span>
          <h1 className="mt-7 text-3xl font-bold sm:text-4xl">Payment Successful</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Welcome to the AI App Builder Course. Your access is confirmed — download your course
            material and bonus resources below.
          </p>

          {payment ? (
            <p className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
              <span className="shrink-0">Payment ID</span>
              <span className="truncate font-medium text-foreground">{payment}</span>
            </p>
          ) : null}

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-8 py-4 text-base font-semibold text-primary-foreground glow-ring transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            <Download className="h-5 w-5" />
            Download Course Material
          </a>

          <div className="mt-8 grid gap-3 text-left">
            {[
              "Full course modules and lifetime access",
              "Bonus courses, lead database and resources vault",
              "Live 1-to-1 mentorship onboarding details inside the folder",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 rounded-2xl p-4 glass">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <p className="min-w-0 text-sm leading-relaxed">{line}</p>
              </div>
            ))}
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </Reveal>
    </main>
  );
}
