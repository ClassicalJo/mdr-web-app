import { Instagram, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/mdr/logo.png";
import { AppDownloadButtons } from "./AppDownloadButtons";
import { navItems } from "./content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/45">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Link to="/" aria-label="My Daily Ritual home"><img src={logo} alt="My Daily Ritual" className="h-20 w-auto" /></Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Wellness, habits and productivity — in one calm daily flow.</p>
            <div className="mt-5"><AppDownloadButtons compact /></div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <span className="font-kick text-xs font-semibold uppercase text-primary">Explore</span>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {navItems.slice(0, 2).map((item) => <li key={item.label}><Link to={item.href} className="hover:text-primary">{item.label}</Link></li>)}
              </ul>
            </div>
            <div>
              <span className="font-kick text-xs font-semibold uppercase text-primary">Support</span>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {navItems.slice(2).map((item) => <li key={item.label}>{item.href.startsWith("http") ? <a href={item.href} className="hover:text-primary">{item.label}</a> : <Link to={item.href} className="hover:text-primary">{item.label}</Link>}</li>)}
              </ul>
            </div>
            <div>
              <span className="font-kick text-xs font-semibold uppercase text-primary">Connect</span>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><a href="https://www.instagram.com/mydailyritual.co/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary"><Instagram className="size-4" /> Instagram</a></li>
                <li><a href="mailto:admin@dailyritualapp.com" className="flex items-center gap-2 hover:text-primary"><Mail className="size-4" /> Email us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} My Daily Ritual. All rights reserved.</div>
      </div>
    </footer>
  );
}