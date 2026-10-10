import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mdr/logo.png";
import { Header } from "@/components/home/Header";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — My Daily Ritual" },
      { name: "description", content: "The My Daily Ritual marketplace is coming soon." },
      { property: "og:title", content: "Marketplace — My Daily Ritual" },
      { property: "og:description", content: "The My Daily Ritual marketplace is coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MarketplacePage,
});

function MarketplacePage() {
  return (
    <div className="min-h-screen bg-tea-mist text-foreground selection:bg-primary/15">
      <Header />
      <main className="grid min-h-screen place-items-center bg-background px-5 text-center">
        <div className="max-w-xl">
          <Link to="/" aria-label="My Daily Ritual home">
            <img src={logo} alt="My Daily Ritual" className="mx-auto h-24 w-auto" />
          </Link>
          <span className="mt-10 inline-block font-kick text-xs font-semibold uppercase text-primary">
            Marketplace
          </span>
          <h1 className="mt-3 font-display text-5xl font-medium">
            Something meaningful is taking shape.
          </h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The My Daily Ritual marketplace is coming soon. Until then, keep building the rituals
            that make your days feel like yours.
          </p>
          <Button variant="ritualDark" size="store" className="mt-8" asChild>
            <Link to="/">
              <ArrowLeft /> Back home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
