import { SectionHeading } from "@/components/home/SectionHeading";

const steps = [
  "Open the app and go to the Home Menu.",
  "Select Ritual Profile.",
  "Scroll to the bottom and select Delete Account.",
  "Confirm the deletion by inputting your user name / email and password.",
];

const dataDeleted = [
  "Personal information provided during registration (such as email and username).",
  "App usage data and preferences linked to your account.",
];

export function DeleteAccountSection() {
  return (
    <section className="border-t border-border bg-card/45">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Your data"
          title="How to delete my account"
          description="You can request the deletion of your account and associated data directly from within the My Daily Ritual app."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="glass-panel rounded-3xl p-7 sm:p-9">
            <span className="font-kick text-xs font-semibold uppercase text-primary">
              Steps to delete your account
            </span>
            <ol className="mt-6 space-y-5">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm font-medium text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-foreground/80">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-5">
            <div className="glass-panel rounded-3xl p-7 sm:p-9">
              <span className="font-kick text-xs font-semibold uppercase text-primary">
                Data that will be deleted
              </span>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/80">
                {dataDeleted.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel rounded-3xl p-7 sm:p-9">
              <span className="font-kick text-xs font-semibold uppercase text-primary">
                Data retention
              </span>
              <p className="mt-5 text-sm leading-relaxed text-foreground/80">
                When you delete your account, it will immediately become inaccessible and will no
                longer be used within My Daily Ritual. For technical, legal, or security reasons,
                certain data may be retained in our systems for a limited period before being
                permanently deleted.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                Once this process is complete, your account and associated data will be permanently
                removed.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Any concerns or questions:{" "}
          <a
            href="mailto:admin@dailyritualapp.com"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            admin@dailyritualapp.com
          </a>
        </p>
      </div>
    </section>
  );
}
