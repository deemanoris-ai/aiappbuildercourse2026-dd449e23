import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

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
