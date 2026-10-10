import { Fragment } from "react";
import type { PolicySection as PolicySectionData } from "./content";

function PolicyText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={index}
          href={link[2]}
          className="break-words font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          {link[1]}
        </a>
      );
    }
    return <Fragment key={index}>{part.replace(/\*\*/g, "")}</Fragment>;
  });
}

export function PolicySection({ section }: { section: PolicySectionData }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-t border-primary/25 py-9 first:border-t-0 first:pt-0 sm:py-12"
    >
      <h2 className="font-display text-2xl font-medium leading-snug sm:text-3xl">
        {section.title}
      </h2>
      <div className="mt-5 space-y-5 text-base leading-relaxed text-foreground/80">
        {section.blocks.map((block, index) =>
          block.type === "paragraph" ? (
            <p key={index}>
              <PolicyText text={block.text} />
            </p>
          ) : (
            <ul key={index} className="list-disc space-y-3 pl-5 marker:text-primary">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="pl-1">
                  <PolicyText text={item} />
                </li>
              ))}
            </ul>
          ),
        )}
      </div>
    </section>
  );
}
