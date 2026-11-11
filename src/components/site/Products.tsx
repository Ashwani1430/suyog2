import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ExternalLink,
  Layers,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  INDUSTRIES,
  SUYOG_PRODUCTS,
  TALLY_PRODUCTS,
  type TallyProductItem,
} from "@/data/suyog";
import { Icon, Reveal, Section, SectionHeading } from "./primitives";
import { Tilt3DCard } from "./Tilt3DCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function TallyProducts() {
  const [selectedProduct, setSelectedProduct] = useState<TallyProductItem | null>(null);

  return (
    <Section id="tally-products">
      <SectionHeading
        eyebrow="Tally Products"
        title={
          <>
            Tally Solutions Built for <span className="gradient-text">Modern Business</span>
          </>
        }
        body="Licensing, implementation, upgrades and support across the official Tally product line — certified and customized by SUYOG for your enterprise."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch justify-items-center sm:justify-items-stretch">
        {TALLY_PRODUCTS.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.07} className="w-full h-full flex justify-center">
            <Tilt3DCard maxTilt={6} className="w-full h-full flex flex-col" containerClassName="w-full flex justify-center">
              <article className="w-full max-w-md sm:max-w-none mx-auto gradient-ring group flex h-full flex-col justify-between rounded-3xl glass p-6 sm:p-7 shadow-[0_10px_30px_rgba(30,96,255,0.06)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(30,96,255,0.15)]">
                <div>
                  {/* Official Logo Banner & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="h-14 w-auto min-w-[120px] max-w-[170px] flex items-center justify-center px-3 py-1.5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      <img
                        src={product.logo}
                        alt={product.name}
                        className="h-9 w-auto max-w-full object-contain"
                      />
                    </div>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700 border border-blue-100/80 shrink-0">
                      {product.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-5 min-h-[2.5rem] text-lg font-bold tracking-tight text-foreground flex items-center">
                    {product.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-primary line-clamp-1">
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-2.5 min-h-[4rem] text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {product.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 min-h-[145px]">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-xs font-medium text-foreground/85">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Solution Button */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-primary/80 group/btn cursor-pointer"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </button>
                  <span className="text-[10px] font-semibold text-slate-400">
                    Official
                  </span>
                </div>
              </article>
            </Tilt3DCard>
          </Reveal>
        ))}
      </div>

      {/* Dedicated Interactive Detail Modal */}
      <Dialog
        open={Boolean(selectedProduct)}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        {selectedProduct && (
          <DialogContent className="max-w-2xl sm:max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-white shadow-2xl border-slate-100">
            <DialogHeader className="text-left space-y-3 pb-4 border-b border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="h-12 px-3 py-1 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
                  <img
                    src={selectedProduct.logo}
                    alt={selectedProduct.name}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-100">
                    {selectedProduct.badge}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-100 flex items-center gap-1">
                    <ShieldCheck className="size-3.5 text-emerald-600" />
                    Authorized 5-Star Partner
                  </span>
                </div>
              </div>

              <div>
                <DialogTitle className="text-2xl font-extrabold tracking-tight text-foreground">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm font-semibold text-primary mt-1">
                  {selectedProduct.tagline}
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="space-y-6 pt-3 text-left">
              {/* Product Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Product Overview
                </h4>
                <div className="rounded-2xl bg-slate-50/80 p-4 border border-slate-100 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                  {selectedProduct.overview}
                </div>
              </div>

              {/* Core Capabilities */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-primary" />
                  Key Enterprise Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProduct.keyCapabilities.map((cap) => (
                    <div
                      key={cap.title}
                      className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-foreground">
                            {cap.title}
                          </h5>
                          <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editions / Deployment Models */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Layers className="size-3.5 text-primary" />
                  Available Editions & Deployment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProduct.editionsOrDeployment.map((ed) => (
                    <div
                      key={ed.name}
                      className="rounded-2xl bg-blue-50/40 border border-blue-100/70 p-3.5"
                    >
                      <h5 className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                        <Zap className="size-3.5 text-blue-600" />
                        {ed.name}
                      </h5>
                      <p className="mt-1 text-[11px] text-blue-800/80 leading-relaxed">
                        {ed.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why SUYOG Value Add */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 p-5 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="size-5 text-blue-300" />
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    Why Implement with SUYOG?
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.suyogAdvantages.map((adv) => (
                    <div key={adv} className="flex items-start gap-2 text-xs text-blue-100">
                      <Check className="size-3.5 shrink-0 text-blue-400 mt-0.5" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground text-center sm:text-left">
                Need customized deployment, migration, or multi-user licensing?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-primary/90 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Request Quote & Consultation</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
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

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-items-center sm:justify-items-stretch">
        {SUYOG_PRODUCTS.map((product, i) => (
          <Reveal key={product.name} delay={i * 0.05} className="w-full h-full flex justify-center">
            <Tilt3DCard maxTilt={6} className="w-full h-full flex flex-col" containerClassName="w-full flex justify-center">
              <article className="w-full max-w-md sm:max-w-none mx-auto gradient-ring group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl glass p-6 sm:p-7 shadow-[0_12px_36px_rgba(30,96,255,0.07)] transition-all duration-300 hover:shadow-[0_22px_45px_rgba(30,96,255,0.16)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_4px_16px_rgba(30,96,255,0.12)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[image:var(--gradient-accent)] group-hover:text-white">
                      <Icon name={product.icon} className="size-6" />
                    </span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700 border border-blue-100">
                      TallyPrime Integrated
                    </span>
                  </div>

                  <h3 className="mt-5 min-h-[2.5rem] text-lg font-bold tracking-tight text-foreground flex items-center">
                    {product.name}
                  </h3>
                  <p className="mt-1 min-h-[2.5rem] text-xs font-semibold text-primary line-clamp-2 flex items-center">
                    {product.tagline}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 min-h-[140px]">
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
        <Reveal delay={0.4} className="w-full h-full flex justify-center">
          <Tilt3DCard maxTilt={6} className="w-full h-full flex flex-col" containerClassName="w-full flex justify-center">
            <article className="w-full max-w-md sm:max-w-none mx-auto gradient-ring group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40 p-6 sm:p-7 shadow-[0_12px_36px_rgba(30,96,255,0.07)] transition-all duration-300 hover:shadow-[0_22px_45px_rgba(30,96,255,0.16)]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25">
                    <Wrench className="size-6" />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700 border border-emerald-100">
                    Bespoke Engineering
                  </span>
                </div>

                <h3 className="mt-5 min-h-[2.5rem] text-lg font-bold tracking-tight text-foreground flex items-center">
                  Custom TDL &amp; API Integration
                </h3>
                <p className="mt-1 min-h-[2.5rem] text-xs font-semibold text-blue-700 flex items-center">
                  Custom ERP &amp; third-party software integration
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 min-h-[140px]">
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

        <div className="w-full max-w-2xl mx-auto lg:max-w-none">
          <Tilt3DCard maxTilt={6}>
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl glass-strong border border-primary/20 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(30,96,255,0.15)]"
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
      </div>
    </Section>
  );
}
