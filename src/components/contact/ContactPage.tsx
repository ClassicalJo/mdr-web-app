import { Instagram, Mail, Phone } from "lucide-react";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { SectionHeading } from "@/components/home/SectionHeading";
import { ContactForm } from "./ContactForm";
import { DeleteAccountSection } from "./DeleteAccountSection";
import livAndEm from "@/assets/mdr/liv-and-em.jpg";

const contactChannels = [
  {
    icon: Mail,
    title: "Email",
    value: "admin@dailyritualapp.com",
    href: "mailto:admin@dailyritualapp.com",
    action: "Send an email",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+61 414 211 540",
    href: "tel:+61414211540",
    action: "Call us",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@mydailyritual.co",
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
            description="Questions, feedback or just want to say hello — send us a message below or reach out through any of these channels."
          />
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />

            <div className="grid gap-5">
              <div className="glass-panel overflow-hidden rounded-3xl">
                <img
                  src={livAndEm}
                  alt="Liv, founder of My Daily Ritual"
                  className="aspect-[5/4] w-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group glass-panel flex flex-col rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <channel.icon className="size-4" />
                    </span>

                    <span className="mt-4 font-kick text-xs font-semibold uppercase text-primary">
                      {channel.title}
                    </span>

                    <span className="mt-1.5 break-words text-sm font-medium text-foreground">
                      {channel.value}
                    </span>

                    <span className="mt-3 text-xs font-medium text-primary underline-offset-4 group-hover:underline">
                      {channel.action}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <DeleteAccountSection />
      </main>
      <Footer />
    </div>
  );
}
