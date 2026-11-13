import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { CASE_STUDIES } from "@/data/suyog";
import { Reveal, Section, SectionHeading } from "./primitives";
import { Tilt3DCard } from "./Tilt3DCard";

export function Customized() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : CASE_STUDIES[openIndex];

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <Section id="customized" className="border-y border-primary/10 bg-secondary/25">
      <SectionHeading
        eyebrow="Customized Solutions"
        title={
          <>
            Tailoring Tally to <span className="gradient-text">Your Business</span>
          </>
        }
        body="Every business works differently. SUYOG customizes Tally-based solutions around your workflows, reporting requirements and operational needs."
      />

      {/* Symmetrical Equal-Height Fixed Grid (Matching SUYOG Products Layout) */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-items-center sm:justify-items-stretch">
        {CASE_STUDIES.map((study, i) => (
          <Reveal key={study.client} delay={i * 0.05} className="w-full h-full flex justify-center">
            <Tilt3DCard maxTilt={6} className="w-full h-full flex flex-col" containerClassName="w-full flex justify-center">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="gradient-ring group flex h-full w-full max-w-md sm:max-w-none mx-auto flex-col justify-between rounded-3xl glass p-6 sm:p-7 text-left shadow-[0_10px_30px_rgba(30,96,255,0.06)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(30,96,255,0.16)] cursor-pointer"
              >
                <div>
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary truncate">
                      {study.industry}
                    </span>
                    {study.badge && (
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[9.5px] font-bold text-blue-700 border border-blue-100/80 shrink-0">
                        {study.badge}
                      </span>
                    )}
                  </div>

                  {/* High-Visibility Full-Width Logo Stage */}
                  <div className="h-22 sm:h-24 w-full rounded-2xl bg-white border border-slate-200/90 p-3 sm:p-4 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-sm mb-4">
                    <img
                      src={study.logo}
                      alt={study.client}
                      className={cn(
                        "max-h-16 sm:max-h-18 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105",
                        study.scale,
                      )}
                      loading="lazy"
                    />
                  </div>

                  {/* Client Name - Fully Visible Without Clipping */}
                  <h3 className="min-h-[3.25rem] sm:min-h-[3.5rem] text-base sm:text-lg font-bold leading-snug tracking-tight text-foreground flex items-start">
                    {study.client}
                  </h3>

                  {/* Context Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3 overflow-hidden">
                    {study.context}
                  </p>
                </div>

                <span className="mt-auto pt-5 border-t border-slate-100/90 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary">
                  <span>View case study</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>
            </Tilt3DCard>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/30 p-0 backdrop-blur-md sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.client} case study`}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] glass-strong border border-primary/25 p-8 shadow-[0_25px_60px_rgba(30,96,255,0.2)] sm:rounded-[2rem] sm:p-10"
            >
              <button
                type="button"
                aria-label="Close case study"
                onClick={() => setOpenIndex(null)}
                className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-primary/20 bg-surface text-muted-foreground transition-colors hover:border-primary hover:text-foreground cursor-pointer"
              >
                <X className="size-5" />
              </button>

              <div className="flex flex-wrap items-center justify-between gap-3 pr-12 pb-3 border-b border-slate-100">
                <div className="h-16 sm:h-20 px-4 py-2 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-center">
                  <img
                    src={active.logo}
                    alt={active.client}
                    className={cn(
                      "max-h-14 sm:max-h-16 w-auto max-w-[200px] object-contain",
                      active.scale
                    )}
                  />
                </div>
                {active.badge && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-100">
                    {active.badge}
                  </span>
                )}
              </div>

              <span className="mt-3 block text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {active.industry}
              </span>
              <h3 className="mt-1 pr-12 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {active.client}
              </h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/15 bg-surface/80 p-5">
                  <h4 className="text-sm font-bold text-foreground">Business requirements</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {active.context}
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/15 bg-surface/80 p-5">
                  <h4 className="text-sm font-bold text-foreground">Customization provided</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {active.contribution}
                  </p>
                </div>
              </div>

              <h4 className="mt-9 text-sm font-bold text-foreground">Business workflow</h4>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {active.workflow.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 rounded-2xl border border-primary/15 bg-surface/90 px-4 py-3 shadow-xs"
                  >
                    <span className="font-display text-xs font-bold text-primary">
                      0{i + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground/90">{step}</span>
                  </li>
                ))}
              </ol>

              <a
                href="#contact"
                onClick={() => setOpenIndex(null)}
                className="btn-shimmer mt-9 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(30,96,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(30,96,255,0.4)]"
              >
                Discuss a similar project
                <ArrowRight className="size-4" />
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
