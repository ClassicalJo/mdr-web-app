import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mdr/logo.png";
import { navItems } from "./content";
import { ComingSoonMark } from "./ComingSoonMark";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" aria-label="My Daily Ritual home" className="shrink-0">
          <img src={logo} alt="My Daily Ritual" className="h-11 w-auto" />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-sm font-medium text-foreground/70 md:flex"
        >
          {navItems.map((item) =>
            item.href.startsWith("http") ? (
              <a key={item.label} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                activeProps={{ className: "text-foreground" }}
                className={`flex items-center gap-2 transition-colors hover:text-primary${item.href === "/marketplace" ? " mr-7" : ""}`}
              >
                {item.href === "/marketplace" ? (
                  <span className="relative">
                    {item.label}
                    <ComingSoonMark />
                  </span>
                ) : (
                  item.label
                )}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ritualDark" className="hidden sm:inline-flex" asChild>
            <Link to="/" hash="download" preload="intent">
              Download <ArrowRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-x-0 top-[69px] h-[calc(100dvh-69px)] bg-background px-5 py-8 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navItems.map((item) =>
              item.href.startsWith("http") ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="border-b border-border py-5 font-display text-3xl"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex flex-wrap items-center gap-3 border-b border-border py-5 font-display text-3xl"
                  onClick={() => setOpen(false)}
                >
                  {item.href === "/marketplace" ? (
                    <span className="relative">
                      {item.label}
                      <ComingSoonMark />
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              ),
            )}
            <Button variant="ritual" size="store" className="mt-8" asChild>
              <Link to="/" hash="download" preload="intent" onClick={() => setOpen(false)}>
                Download the app <ArrowRight />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
