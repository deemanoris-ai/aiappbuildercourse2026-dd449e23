import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "@/components/legal-icon";

export function LegalPage({
  title,
  updated = "Last updated: August 2026",
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
      <h1 className="mt-8 text-4xl font-bold">{title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{updated}</p>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </main>
  );
}

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — AI App Builder Course" },
      { name: "description", content: "Terms of service for enrolling in the AI App Builder Course." },
      { property: "og:title", content: "Terms of Service — AI App Builder Course" },
      { property: "og:description", content: "Terms that apply to your enrollment and course access." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage title="Terms of Service">
      <p>
        By enrolling in the AI App Builder Course you agree to use the course material for personal
        learning. Course content, bonus material and resources may not be resold, redistributed or
        shared publicly.
      </p>
      <p>
        The course teaches practical skills. No income, earnings or specific results are promised or
        guaranteed. Outcomes depend on individual effort, time and application.
      </p>
      <p>
        Access is granted to the person who completed the purchase. We may update course material
        over time; updates are available within your existing access.
      </p>
      <p>
        Any contact data included in bonus resources must be used responsibly and in accordance with
        applicable laws and platform policies.
      </p>
    </LegalPage>
  ),
});
