import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Daily Ritual — Wellness, Habits & Productivity" },
      { name: "description", content: "Turn daily habits into meaningful rituals with My Daily Ritual, the all-in-one wellness and productivity app designed for real life." },
      { property: "og:title", content: "My Daily Ritual — Wellness, Habits & Productivity" },
      { property: "og:description", content: "Build meaningful daily rituals with wellness, habits and productivity in one calm app." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
