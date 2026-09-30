import { motion } from "motion/react";
import { ArrowRight, Check, Phone } from "lucide-react";

import timelineVisual from "@/assets/timeline-visual.jpg";
import { CLIENTS, CONTACT, FLOW_STEPS, TRUST_ITEMS, WHY_SUYOG } from "@/data/suyog";
import { Counter, Icon, Reveal, Section, SectionHeading } from "./primitives";

export function TrustStrip() {
  return (
    <div className="relative border-y bg-secondary/25">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 lg:grid-cols-5">
        {TRUST_ITEMS.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 0.07}
            className="flex flex-col items-center gap-1 py-8 text-center"
          >
            {item.value ? (
              <p className="font-display text-3xl font-semibold gradient-text">
                <Counter to={item.value} suffix={item.suffix} />
              </p>
            ) : (
              <Check className="size-6 text-primary" />
            )}
            <p className="text-sm text-muted-foreground">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

const TIMELINE = [
  { year: "1990", title: "Founded", body: "The beginning of SUYOG's journey in Kanpur's IT landscape." },
  {
    year: "",
    title: "Technology Evolution",
    body: "Growing alongside changing technology and business requirements.",
  },
  {
    year: "",
    title: "Business Solutions",
    body: "Building software that follows how businesses actually operate.",
  },
  {
    year: "",
    title: "Tally Expertise",
    body: "Implementation, customization and support built on deep Tally knowledge.",
  },
  {
    year: "2026+",
    title: "Modern Digital Solutions",
    body: "Cloud, integrations and automation on top of TallyPrime.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl glass">
            <img
              src={timelineVisual}
              alt="Visual representation of SUYOG's growth from 1990 to today"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl glass-strong px-6 py-5">
            <span className="font-display text-2xl font-semibold">1990</span>
            <span className="h-px flex-1 mx-4 bg-[image:var(--gradient-accent)]" />
            <span className="font-display text-2xl font-semibold gradient-text">2026+</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About SUYOG"
            title={
              <>
                Three Decades of Technology.
                <br />
                One Focus — <span className="gradient-text">Your Business.</span>
              </>
            }
            body="SUYOG has been part of Kanpur's IT landscape since 1990, evolving alongside changing technology and changing business requirements. The work has always been the same at heart: understand how a business runs, then make technology fit it."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "30+ years of experience",
              "Customer-centric approach",
              "Tally expertise",
              "Customized business solutions",
              "Long-term business relationships",
            ].map((point, i) => (
              <Reveal as="li" key={point} delay={i * 0.06}>
                <span className="flex items-center gap-3 rounded-2xl border bg-secondary/30 px-4 py-3 text-sm">
                  <Check className="size-4 shrink-0 text-primary" />
                  {point}
                </span>
              </Reveal>
            ))}
          </ul>

          <ol className="mt-12 space-y-0 border-l border-border/80 pl-8">
            {TIMELINE.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.08} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[2.3rem] top-1.5 grid size-4 place-items-center rounded-full bg-background">
                  <span className="size-2 rounded-full bg-[image:var(--gradient-accent)]" />
                </span>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  {item.year ? (
                    <span className="text-xs font-medium tracking-wider text-primary">
                      {item.year}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export function WhySuyog() {
  return (
    <Section className="border-y bg-secondary/20">
      <SectionHeading
        eyebrow="Why SUYOG"
        title={
          <>
            Why Businesses <span className="gradient-text">Choose SUYOG</span>
          </>
        }
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_SUYOG.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <article className="gradient-ring group h-full rounded-3xl glass p-7 transition-transform duration-500 hover:-translate-y-1.5">
              <span className="grid size-11 place-items-center rounded-2xl bg-secondary/70 text-primary">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FlowVisual() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How it connects"
        title={
          <>
            From Business Operations to{" "}
            <span className="gradient-text">Reports &amp; Insights</span>
          </>
        }
        body="SUYOG connects your day-to-day operations with TallyPrime and customized technology, so information moves in one direction: forward."
      />

      <div className="relative mt-16">
        <div
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[image:var(--gradient-accent)] opacity-30 lg:block"
          aria-hidden="true"
        />
        <ol className="grid gap-5 lg:grid-cols-5">
          {FLOW_STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl glass p-6">
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-3 left-1/2 hidden size-2 -translate-x-1/2 rounded-full bg-primary lg:block"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function Clients() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <Section id="clients" className="border-y bg-secondary/20">
      <SectionHeading
        eyebrow="Clients"
        title={
          <>
            Trusted by <span className="gradient-text">Leading Companies</span>
          </>
        }
        body="Organisations across manufacturing, retail, textiles, government and services rely on SUYOG for Tally and customized business software."
      />
      <div
        className="relative mt-14 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max gap-4">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-20 min-w-[16rem] items-center justify-center rounded-2xl glass px-8 text-center text-sm font-semibold text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function LeadCta() {
  return (
    <Section>
      <Reveal className="relative overflow-hidden rounded-[2rem] glass-strong px-6 py-16 text-center sm:px-14">
        <div className="pointer-events-none absolute inset-0 hero-glow opacity-90" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Build a <span className="gradient-text">Smarter Business Workflow</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Talk to SUYOG about Tally, business automation or a customized solution for your
            organization.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:glow-shadow"
            >
              Talk to an Expert
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${PRIMARY_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border bg-secondary/40 px-7 py-4 text-sm font-semibold transition-colors hover:bg-secondary/70"
            >
              <Phone className="size-4 text-primary" />
              Call SUYOG
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
