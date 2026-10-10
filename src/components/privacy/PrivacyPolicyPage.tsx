import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { policySections } from "./content";
import { PolicySection } from "./PolicySection";

export function PrivacyPolicyPage() {
  const introduction = policySections[0];
  const sections = policySections.slice(1);

  return (
    <div className="min-h-screen bg-tea-mist text-foreground selection:bg-primary/15">
      <Header />
      <main className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="border-b border-primary/30 pb-10 sm:pb-14">
          <span className="font-kick text-xs font-semibold uppercase text-primary">
            My Daily Ritual
          </span>
          <h1 className="mt-4 font-display text-5xl font-medium leading-tight sm:text-6xl">
            Privacy Policy
          </h1>
          {introduction && (
            <div className="mt-6 max-w-3xl space-y-4">
              <p className="font-kick text-xs font-semibold text-primary">{introduction.title}</p>
              {introduction.blocks.map((block, index) =>
                block.type === "paragraph" ? (
                  <p key={index} className="text-base leading-relaxed text-foreground/80">
                    {block.text}
                  </p>
                ) : null,
              )}
            </div>
          )}
        </div>
        <div className="grid items-start gap-12 pt-10 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16 lg:pt-14">
          <aside className="lg:sticky lg:top-28">
            <nav aria-label="Privacy policy contents">
              <h2 className="font-kick text-xs font-semibold uppercase text-primary">Contents</h2>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex gap-3 text-sm leading-snug text-foreground/70 transition-colors hover:text-primary"
                    >
                      <span className="w-5 shrink-0 font-kick text-xs text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="group-hover:underline underline-offset-4">
                        {section.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <article className="min-w-0 max-w-3xl" aria-label="My Daily Ritual privacy policy">
            {sections.map((section) => (
              <PolicySection key={section.id} section={section} />
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
