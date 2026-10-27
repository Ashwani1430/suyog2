import { motion } from "motion/react";
import { ArrowRight, Check, Phone, Sparkles, Target } from "lucide-react";

import { AboutTimelineVisual } from "./AboutTimelineVisual";
import { CLIENTS, FLOW_STEPS, PRIMARY_TEL, TRUST_ITEMS, WHY_SUYOG } from "@/data/suyog";
import { CLIENT_LOGOS } from "@/data/clientsData";
import { Counter, Icon, Reveal, Section, SectionHeading } from "./primitives";
import { Tilt3DCard } from "./Tilt3DCard";

export function TrustStrip() {
  return (
    <div className="relative border-y border-primary/15 bg-secondary/35 py-3">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-4 px-5 sm:px-8 lg:grid-cols-5">
        {TRUST_ITEMS.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 0.07}
            className="flex flex-col items-center justify-center rounded-2xl border border-primary/10 bg-surface/80 py-6 px-4 text-center shadow-xs backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
          >
            {item.value ? (
              <p className="font-display text-3xl font-extrabold gradient-text">
                <Counter to={item.value} suffix={item.suffix} />
              </p>
            ) : (
              <div className="grid size-9 place-items-center rounded-full bg-primary/10 text-primary">
                <Check className="size-5 text-primary" />
              </div>
            )}
            <p className="mt-1 text-xs font-semibold text-muted-foreground">{item.label}</p>
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
      <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-14">
        {/* Left Column: Full-Height Heritage Visual */}
        <Reveal className="h-full flex">
          <Tilt3DCard maxTilt={5} className="w-full h-full flex flex-col">
            <AboutTimelineVisual />
          </Tilt3DCard>
        </Reveal>

        {/* Right Column: Narrative & Mission */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title={
                <>
                  Welcome to SUYOG —{" "}
                  <span className="gradient-text">
                    Empowering Businesses Through Technology Since 1990
                  </span>
                </>
              }
              body="At SUYOG, we believe technology should make business simpler, smarter, and more efficient. With decades of industry experience, we have established ourselves as a trusted IT solutions provider in India, helping businesses streamline operations, improve productivity, and embrace digital transformation."
            />

            {/* Partner Specialization Card */}
            <div className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-blue-50/60 via-surface/90 to-cyan-50/40 p-5 shadow-xs">
              <div className="flex items-start gap-3">
                <span className="grid size-7 place-items-center rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                  <Sparkles className="size-4" />
                </span>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                  As a <strong className="text-foreground font-bold">Tally software solutions and development partner</strong>, we specialize in delivering comprehensive business solutions, including Tally software, customization, cloud solutions, and dedicated technical support. Our focus is on understanding each client's unique needs and providing reliable, practical solutions that drive long-term business growth.
                </p>
              </div>
            </div>

            {/* Our Story Block */}
            <div className="mt-6 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <h3 className="text-sm font-bold tracking-tight text-foreground uppercase">
                  Our Story • Three Decades of Trust, Innovation &amp; Excellence
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Since <strong className="text-foreground font-semibold">1990</strong>, SUYOG has evolved alongside the ever-changing world of technology, consistently adapting to the needs of modern businesses. What began as a commitment to delivering dependable IT solutions has grown into a lasting partnership with businesses across industries.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Over the years, we have combined technical expertise, continuous innovation, and a customer-first approach to help organizations simplify complex processes and work more efficiently. We understand that every business has different goals, which is why we focus on providing solutions that are practical, scalable, and tailored to real-world requirements.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Today, SUYOG continues to build on its legacy of trust by helping businesses make the most of technology through reliable software solutions, expert guidance, and responsive support.
              </p>
            </div>

            {/* Mission Statement Callout */}
            <div className="mt-6 rounded-2xl border-l-4 border-l-primary border border-primary/15 bg-primary/5 p-4 sm:p-5 shadow-xs">
              <div className="flex items-start gap-3">
                <span className="grid size-7 place-items-center rounded-xl bg-primary text-white shrink-0 mt-0.5 shadow-sm shadow-primary/30">
                  <Target className="size-4" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary">Our Mission</p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground leading-relaxed">
                    Our mission remains the same: to simplify business operations, empower growth, and build lasting relationships through technology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">
              Have unique requirements for your enterprise?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary/80"
            >
              <span>Talk to our Solutions Architect</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function WhySuyog() {
  return (
    <Section className="border-y border-primary/10 bg-secondary/25">
      <SectionHeading
        eyebrow="Why SUYOG"
        title={
          <>
            Why Businesses <span className="gradient-text">Choose SUYOG</span>
          </>
        }
        body="Practical engineering, deep accounting insight, and relentless support across North India's thriving enterprises."
      />
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-items-center sm:justify-items-stretch">
        {WHY_SUYOG.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} className="w-full h-full flex justify-center">
            <Tilt3DCard maxTilt={8} className="w-full h-full flex flex-col" containerClassName="w-full flex justify-center">
              <article className="w-full max-w-md sm:max-w-none mx-auto gradient-ring group flex flex-col justify-between h-full rounded-3xl glass p-7 shadow-[0_10px_30px_rgba(30,96,255,0.06)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(30,96,255,0.15)]">
                <div>
                  <span className="grid size-12 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_4px_16px_rgba(30,96,255,0.12)] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[image:var(--gradient-accent)] group-hover:text-white">
                    <Icon name={item.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 min-h-[2.5rem] text-lg font-bold tracking-tight text-foreground flex items-center">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 min-h-[3.75rem] text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </article>
            </Tilt3DCard>
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
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[image:var(--gradient-accent)] opacity-40 lg:block"
          aria-hidden="true"
        />
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch justify-items-center sm:justify-items-stretch">
          {FLOW_STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.1} className="w-full h-full flex justify-center">
              <Tilt3DCard maxTilt={6} className="w-full h-full flex flex-col" containerClassName="w-full flex justify-center">
                <div className="w-full max-w-md sm:max-w-none mx-auto relative flex flex-col justify-between h-full rounded-3xl glass border border-primary/15 p-6 shadow-[0_8px_24px_rgba(30,96,255,0.06)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(30,96,255,0.14)]">
                  <div>
                    <span className="font-display text-xs font-bold tracking-[0.2em] text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                  <motion.span
                    aria-hidden="true"
                    className="absolute -bottom-3 left-1/2 hidden size-3 -translate-x-1/2 rounded-full border-2 border-surface bg-primary shadow-[0_0_12px_rgba(30,96,255,0.6)] lg:block"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                  />
                </div>
              </Tilt3DCard>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function Clients() {
  const mid = Math.ceil(CLIENT_LOGOS.length / 2);
  const row1 = [...CLIENT_LOGOS.slice(0, mid), ...CLIENT_LOGOS.slice(0, mid)];
  const row2 = [...CLIENT_LOGOS.slice(mid), ...CLIENT_LOGOS.slice(mid)];

  return (
    <Section id="clients" className="border-y border-primary/10 bg-gradient-to-b from-secondary/30 via-white to-secondary/20 py-20">
      <SectionHeading
        eyebrow="Clients"
        title={
          <>
            Trusted by <span className="gradient-text">Leading Companies</span>
          </>
        }
        body="Prominent organizations across manufacturing, infrastructure, government, education, retail, and exports rely on SUYOG for reliable Tally and enterprise solutions."
      />
      <div
        className="relative mt-14 space-y-5 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1 - Scrolling Forward */}
        <div className="marquee-track flex w-max gap-4 sm:gap-6">
          {row1.map((item, i) => (
            <div
              key={`row1-${item.name}-${i}`}
              className="group relative flex h-28 sm:h-32 min-w-[16rem] sm:min-w-[19rem] items-center justify-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white px-6 py-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              title={item.name}
            >
              <div className={`flex items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-105 ${item.scale ?? ""}`}>
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-16 sm:max-h-20 max-w-[170px] sm:max-w-[200px] w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Scrolling Reverse */}
        <div className="marquee-track-reverse flex w-max gap-4 sm:gap-6">
          {row2.map((item, i) => (
            <div
              key={`row2-${item.name}-${i}`}
              className="group relative flex h-28 sm:h-32 min-w-[16rem] sm:min-w-[19rem] items-center justify-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white px-6 py-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              title={item.name}
            >
              <div className={`flex items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-105 ${item.scale ?? ""}`}>
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-16 sm:max-h-20 max-w-[170px] sm:max-w-[200px] w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
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
      <Reveal className="relative overflow-hidden rounded-[2.5rem] glass-strong border border-primary/25 px-6 py-16 text-center shadow-[0_25px_60px_rgba(30,96,255,0.18)] sm:px-14">
        <div className="pointer-events-none absolute inset-0 hero-glow opacity-90" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Build a <span className="gradient-text">Smarter Business Workflow</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Talk to SUYOG about Tally, business automation or a customized solution for your
            organization.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="btn-shimmer group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(30,96,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(30,96,255,0.45)]"
            >
              Talk to an Expert
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${PRIMARY_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-surface px-8 py-4 text-sm font-semibold text-foreground shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-primary"
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
