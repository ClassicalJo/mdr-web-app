import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAIL = "admin@dailyritualapp.com";

type Fields = { firstName: string; lastName: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initialFields: Fields = { firstName: "", lastName: "", email: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.firstName.trim()) errors.firstName = "Please enter your first name.";
  if (!fields.lastName.trim()) errors.lastName = "Please enter your last name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = "Please enter a valid email address.";
  if (!fields.message.trim()) errors.message = "Please write a message.";
  else if (fields.message.trim().length > 1000) errors.message = "Message must be under 1000 characters.";
  return errors;
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});

  const update = (key: keyof Fields) => (e: { target: { value: string } }) => {
    const value = e.target.value.slice(0, key === "message" ? 1000 : 100);
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const subject = encodeURIComponent(`Contact from ${fields.firstName.trim()} ${fields.lastName.trim()}`);
    const body = encodeURIComponent(
      `Name: ${fields.firstName.trim()} ${fields.lastName.trim()}\nEmail: ${fields.email.trim()}\n\n${fields.message.trim()}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} noValidate className="glass-panel rounded-3xl p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="font-kick text-xs font-semibold uppercase text-primary">First name</label>
          <input id="firstName" name="firstName" autoComplete="given-name" maxLength={100} value={fields.firstName} onChange={update("firstName")} className={`mt-2 ${inputClass}`} placeholder="Liv" />
          {errors.firstName && <p className="mt-2 text-xs text-destructive">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="font-kick text-xs font-semibold uppercase text-primary">Last name</label>
          <input id="lastName" name="lastName" autoComplete="family-name" maxLength={100} value={fields.lastName} onChange={update("lastName")} className={`mt-2 ${inputClass}`} placeholder="Smith" />
          {errors.lastName && <p className="mt-2 text-xs text-destructive">{errors.lastName}</p>}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="font-kick text-xs font-semibold uppercase text-primary">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" maxLength={255} value={fields.email} onChange={update("email")} className={`mt-2 ${inputClass}`} placeholder="you@example.com" />
        {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="font-kick text-xs font-semibold uppercase text-primary">Message</label>
        <textarea id="message" name="message" rows={5} maxLength={1000} value={fields.message} onChange={update("message")} className={`mt-2 resize-none ${inputClass}`} placeholder="Tell us what's on your mind…" />
        {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" variant="ritualDark" size="store" className="mt-7">
        Send message <Send />
      </Button>
    </form>
  );
}
