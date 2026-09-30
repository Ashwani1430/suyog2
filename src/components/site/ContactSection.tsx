import { useState } from "react";
import { Loader2, MapPin, Phone, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { CONTACT, PRIMARY_PHONE, PRIMARY_TEL } from "@/data/suyog";
import { Reveal, Section } from "./primitives";

type Errors = Partial<Record<"name" | "email" | "mobile" | "subject" | "message", string>>;

const FIELDS = [
  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { id: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91 ..." },
  { id: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
] as const;

export function ContactSection() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (key: keyof typeof values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setStatus("idle");
  };

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.mobile.replace(/\D/g, "").length < 10)
      next.mobile = "Please enter a valid mobile number.";
    if (values.subject.trim().length < 3) next.subject = "Please add a short subject.";
    if (values.message.trim().length < 10) next.message = "Please tell us a little more.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 700);
  };

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Talk About <span className="gradient-text">Your Business</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Reach SUYOG in Kanpur for Tally implementation, TallyPrime customization, industry
            modules or long-term support.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex gap-4 rounded-3xl glass p-6">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <address className="text-sm not-italic leading-relaxed text-muted-foreground">
                {CONTACT.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div className="flex gap-4 rounded-3xl glass p-6">
              <Phone className="mt-1 size-5 shrink-0 text-primary" />
              <div className="flex flex-col gap-1 text-sm">
                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[2rem] glass-strong p-7 sm:p-9"
            aria-label="Enquiry form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <div key={field.id} className={cn(field.id === "subject" && "sm:col-span-2")}>
                  <label
                    htmlFor={field.id}
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={values[field.id]}
                    onChange={(e) => set(field.id, e.target.value)}
                    aria-invalid={Boolean(errors[field.id])}
                    className={cn(
                      "w-full rounded-2xl border bg-secondary/35 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/70 focus:bg-secondary/60",
                      errors[field.id] && "border-destructive/70",
                    )}
                  />
                  {errors[field.id] ? (
                    <p className="mt-2 text-xs text-destructive">{errors[field.id]}</p>
                  ) : null}
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business and what you need."
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  className={cn(
                    "w-full resize-none rounded-2xl border bg-secondary/35 px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/70 focus:bg-secondary/60",
                    errors.message && "border-destructive/70",
                  )}
                />
                {errors.message ? (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
            >
              {status === "sending" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Send className="size-4" />
              )}
              Send Enquiry
            </button>

            <div aria-live="polite" className="mt-4 min-h-6">
              {status === "sent" ? (
                <p className="text-sm text-primary">
                  Thank you — your enquiry is noted. Please also call{" "}
                  <a href={`tel:${PRIMARY_TEL}`} className="underline">
                    {PRIMARY_PHONE}
                  </a>{" "}
                  for an immediate response.
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
