import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — AI App Builder Course" },
      { name: "description", content: "Refund terms for the AI App Builder Course digital enrollment." },
      { property: "og:title", content: "Refund Policy — AI App Builder Course" },
      { property: "og:description", content: "Refund terms for this digital course enrollment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage title="Refund Policy">
      <p>
        This is a digital course. Access to the course material and bonus resources is delivered
        immediately after a successful payment.
      </p>
      <p>
        Because the full material is accessible right away, payments are generally non-refundable
        once access has been delivered.
      </p>
      <p>
        If you were charged more than once, or a payment was completed but access was not delivered,
        contact us with your payment ID and we will review and resolve it.
      </p>
    </LegalPage>
  ),
});
