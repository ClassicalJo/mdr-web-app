import { Instagram, Mail, Phone } from "lucide-react";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { SectionHeading } from "@/components/home/SectionHeading";

const contactChannels = [
  {
    icon: Mail,
    title: "Email",
    value: "admin@dailyritualapp.com",
    note: "Any concerns or questions — we read every message.",
    href: "mailto:admin@dailyritualapp.com",
    action: "Send an email",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+61 414 211 540",
    note: "Based in Australia — we'll get back to you as soon as we can.",
    href: "tel:+61414211540",
    action: "Call us",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@mydailyritual.co",
    note: "Daily rituals, behind the scenes and community moments.",
    href: "https://www.instagram.com/mydailyritual.co/",
    action: "Follow along",
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/20">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
          <SectionHeading
            eyebrow="Contact"
            title="We'd love to hear from you!"
            description="Questions, feedback or just want to say hello — reach out through any of these channels and we'll get back to you."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group glass-panel flex flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <channel.icon className="size-5" />
                </span>
                <span className="mt-5 font-kick text-xs font-semibold uppercase text-primary">{channel.title}</span>
                <span className="mt-2 font-display text-xl font-medium text-foreground">{channel.value}</span>
                <span className="mt-3 text-sm leading-relaxed text-muted-foreground">{channel.note}</span>
                <span className="mt-auto pt-6 text-sm font-medium text-primary underline-offset-4 group-hover:underline">
                  {channel.action}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
