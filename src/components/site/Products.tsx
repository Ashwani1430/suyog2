import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles, Wrench } from "lucide-react";

import { cn } from "@/lib/utils";
import { INDUSTRIES, SUYOG_PRODUCTS, TALLY_PRODUCTS } from "@/data/suyog";
import { Icon, Reveal, Section, SectionHeading } from "./primitives";
import { Tilt3DCard } from "./Tilt3DCard";

export function TallyProducts() {
  return (
    <Section id="tally-products">
      <SectionHeading
        eyebrow="Tally Products"
        title={
          <>
            Tally Solutions Built for <span className="gradient-text">Modern Business</span>
          </>
        }
        body="Licensing, implementation, upgrades and support across the Tally product line — set up the way your organisation works."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {TALLY_PRODUCTS.map((product, i) => (
          <Reveal key={product.name} delay={i * 0.07} className="h-full flex">
            <Tilt3DCard maxTilt={6} className="w-full h-full flex flex-col">
              <article className="gradient-ring group flex h-full flex-col justify-between rounded-3xl glass p-7 shadow-[0_10px_30px_rgba(30,96,255,0.06)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(30,96,255,0.15)]">
                <div>
                  <span className="grid size-12 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_4px_16px_rgba(30,96,255,0.12)] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[image:var(--gradient-accent)] group-hover:text-white">
                    <Icon name={product.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 min-h-[3rem] text-lg font-bold tracking-tight text-foreground flex items-center">
                    {product.name}
                  </h3>
                  <p className="mt-2 min-h-[4.5rem] text-xs leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-xs font-medium text-foreground/85">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-primary/80"
                  >
                    Explore Solution
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                </div>
              </article>
            </Tilt3DCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function SuyogProducts() {
  return (
    <Section id="suyog-products" className="relative border-y border-primary/10 bg-secondary/30">
      <SectionHeading
        eyebrow="SUYOG Products"
        title={
          <>
            Ready-to-Use Business Solutions on{" "}
            <span className="gradient-text">TallyPrime</span>
          </>
        }
        body="Industry modules built by SUYOG that sit on top of TallyPrime — giving you specialized workflows without leaving your accounting system."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {SUYOG_PRODUCTS.map((product, i) => (
          <Reveal key={product.name} delay={i * 0.05} className="h-full flex">
            <Tilt3DCard maxTilt={6} className="w-full h-full flex flex-col">
              <article className="gradient-ring group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl glass p-7 shadow-[0_12px_36px_rgba(30,96,255,0.07)] transition-all duration-300 hover:shadow-[0_22px_45px_rgba(30,96,255,0.16)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_4px_16px_rgba(30,96,255,0.12)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[image:var(--gradient-accent)] group-hover:text-white">
                      <Icon name={product.icon} className="size-6" />
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700 border border-blue-100">
                      TallyPrime Integrated
                    </span>
                  </div>

                  <h3 className="mt-5 min-h-[2rem] text-lg font-bold tracking-tight text-foreground flex items-center">
                    {product.name}
                  </h3>
                  <p className="mt-1 min-h-[2.5rem] text-xs font-semibold text-primary line-clamp-2">
                    {product.tagline}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs font-medium text-foreground/80">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-primary/80"
                  >
                    Explore Solution
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                </div>
              </article>
            </Tilt3DCard>
          </Reveal>
        ))}

        {/* 9th Symmetrical Card: Custom TDL Module Inquiry */}
        <Reveal delay={0.4} className="h-full flex">
          <Tilt3DCard maxTilt={6} className="w-full h-full flex flex-col">
            <article className="gradient-ring group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40 p-7 shadow-[0_12px_36px_rgba(30,96,255,0.07)] transition-all duration-300 hover:shadow-[0_22px_45px_rgba(30,96,255,0.16)]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25">
                    <Wrench className="size-6" />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700 border border-emerald-100">
                    Bespoke Engineering
                  </span>
                </div>

                <h3 className="mt-5 min-h-[2rem] text-lg font-bold tracking-tight text-foreground flex items-center">
                  Custom TDL &amp; API Integration
                </h3>
                <p className="mt-1 min-h-[2.5rem] text-xs font-semibold text-blue-700">
                  Custom ERP &amp; third-party software integration
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {[
                    "Custom voucher formats & invoice printing",
                    "Third-party CRM / E-Commerce Tally bridge",
                    "Automated management MIS reports & analytics",
                    "Dedicated support & continuous TDL updates",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs font-medium text-foreground/80">
                      <Sparkles className="mt-0.5 size-3.5 shrink-0 text-blue-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 transition-colors hover:text-blue-900"
                >
                  Request Custom Module
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </article>
          </Tilt3DCard>
        </Reveal>
      </div>
    </Section>
  );
}

export function Industries() {
  const [active, setActive] = useState(0);
  const industry = INDUSTRIES[active] ?? INDUSTRIES[0]!;

  return (
    <Section>
      <SectionHeading
        eyebrow="Industries"
        title={
          <>
            Solutions for <span className="gradient-text">Your Industry</span>
          </>
        }
        body="Pick your sector to see the SUYOG solution built around it."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
          {INDUSTRIES.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={cn(
                "flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition-all duration-300",
                active === i
                  ? "border-primary bg-primary/10 text-primary shadow-[0_8px_24px_rgba(30,96,255,0.18)]"
                  : "border-border/60 bg-surface text-muted-foreground hover:border-primary/40 hover:bg-secondary/60 hover:text-foreground",
              )}
            >
              <Icon name={item.icon} className="size-5 shrink-0 text-primary" />
              {item.name}
            </button>
          ))}
        </div>

        <Tilt3DCard maxTilt={6}>
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl glass-strong border border-primary/20 p-8 shadow-[0_20px_50px_rgba(30,96,255,0.15)] lg:p-10"
          >
            <div className="pointer-events-none absolute inset-0 hero-glow opacity-80" aria-hidden="true" />
            <div className="relative">
              <span className="grid size-14 place-items-center rounded-2xl bg-[image:var(--gradient-accent)] text-white shadow-[0_8px_20px_rgba(30,96,255,0.3)]">
                <Icon name={industry.icon} className="size-7" />
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">{industry.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{industry.note}</p>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Recommended SUYOG solutions
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {industry.solutions.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-4 py-2 text-sm font-semibold text-foreground shadow-xs"
                  >
                    <Sparkles className="size-3.5 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="btn-shimmer group mt-9 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(30,96,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(30,96,255,0.4)]"
              >
                Discuss your requirement
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </Tilt3DCard>
      </div>
    </Section>
  );
}
