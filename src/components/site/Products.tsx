import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { INDUSTRIES, SUYOG_PRODUCTS, TALLY_PRODUCTS } from "@/data/suyog";
import { Icon, Reveal, Section, SectionHeading } from "./primitives";

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

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TALLY_PRODUCTS.map((product, i) => (
          <Reveal key={product.name} delay={i * 0.07}>
            <article className="gradient-ring group flex h-full flex-col rounded-3xl glass p-7 transition-transform duration-500 hover:-translate-y-2">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary/70 text-primary transition-transform duration-500 group-hover:scale-110">
                <Icon name={product.icon} className="size-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{product.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <ul className="mt-5 space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore Solution
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function SuyogProducts() {
  return (
    <Section id="suyog-products" className="border-y bg-secondary/20">
      <SectionHeading
        eyebrow="SUYOG Products"
        title={
          <>
            Ready-to-Use Business Solutions on{" "}
            <span className="gradient-text">TallyPrime</span>
          </>
        }
        body="Industry modules built by SUYOG that sit on top of TallyPrime — so you get specialised workflows without leaving your accounting system."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SUYOG_PRODUCTS.map((product, i) => (
          <Reveal
            key={product.name}
            delay={i * 0.06}
            className={cn(product.featured && "lg:col-span-1")}
          >
            <article className="gradient-ring group relative flex h-full flex-col overflow-hidden rounded-3xl glass p-7 transition-transform duration-500 hover:-translate-y-2">
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hero-glow"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-2xl bg-secondary/70 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  <Icon name={product.icon} className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{product.tagline}</p>
                {product.features.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Explore Solution
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
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
                "flex items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-medium transition-all duration-300",
                active === i
                  ? "border-primary/60 bg-secondary/70 text-foreground glow-shadow"
                  : "bg-secondary/25 text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
              )}
            >
              <Icon name={item.icon} className="size-5 shrink-0 text-primary" />
              {item.name}
            </button>
          ))}
        </div>

        <motion.div
          key={industry.name}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl glass-strong p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 hero-glow opacity-70" aria-hidden="true" />
          <div className="relative">
            <span className="grid size-12 place-items-center rounded-2xl bg-secondary/70 text-primary">
              <Icon name={industry.icon} className="size-6" />
            </span>
            <h3 className="mt-6 text-2xl font-semibold">{industry.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.note}</p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Recommended SUYOG solutions
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {industry.solutions.map((s) => (
                <li key={s} className="rounded-full border bg-secondary/50 px-4 py-2 text-sm">
                  {s}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Discuss your requirement
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
