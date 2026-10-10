import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "@/components/privacy/PrivacyPolicyPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — My Daily Ritual" },
      {
        name: "description",
        content:
          "Read how My Daily Ritual Co Pty Ltd collects, uses and protects your personal information, your privacy rights and our Privacy Collection Notice.",
      },
      { property: "og:title", content: "Privacy Policy — My Daily Ritual" },
      {
        property: "og:description",
        content:
          "My Daily Ritual’s privacy policy, personal information practices, privacy rights and Privacy Collection Notice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicyPage,
});
