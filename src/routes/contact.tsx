import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AI App Builder Course Support" },
      { name: "description", content: "Get support for enrollment, access or mentorship for the AI App Builder Course." },
      { property: "og:title", content: "Contact — AI App Builder Course" },
      { property: "og:description", content: "Reach out for enrollment, access or mentorship support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage title="Contact" updated="We usually reply within 24 hours">
      <p>
        For questions about enrollment, course access, mentorship scheduling or payments, reach out
        by email and include your payment ID where relevant.
      </p>
      <p className="text-foreground">Email: support@aiappbuildercourse.com</p>
      <p>
        Support is available Monday to Saturday. Mentorship sessions are scheduled after enrollment
        using the details inside your course folder.
      </p>
    </LegalPage>
  ),
});
