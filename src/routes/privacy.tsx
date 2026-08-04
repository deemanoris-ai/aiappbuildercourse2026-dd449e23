import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AI App Builder Course" },
      { name: "description", content: "How the AI App Builder Course handles your personal data and payment information." },
      { property: "og:title", content: "Privacy Policy — AI App Builder Course" },
      { property: "og:description", content: "How we collect, use and protect your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>
        We collect only the information needed to deliver course access: your name, email address
        and payment reference details provided during checkout.
      </p>
      <p>
        Payments are processed by Razorpay. Card and banking details are handled directly by the
        payment provider and are never stored by us.
      </p>
      <p>
        Your information is used to grant course access, provide mentorship and send course-related
        updates. We do not sell your personal data.
      </p>
      <p>
        You can request removal of your personal data at any time by contacting us through the
        contact page.
      </p>
    </LegalPage>
  ),
});
