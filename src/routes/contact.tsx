import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/contact/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — My Daily Ritual" },
      { name: "description", content: "We'd love to hear from you. Reach the My Daily Ritual team by email, phone or Instagram." },
      { property: "og:title", content: "Contact — My Daily Ritual" },
      { property: "og:description", content: "Questions or feedback? Contact the My Daily Ritual team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
