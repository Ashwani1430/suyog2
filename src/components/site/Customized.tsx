import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import { CASE_STUDIES } from "@/data/suyog";
import { Reveal, Section, SectionHeading } from "./primitives";
import { Tilt3DCard } from "./Tilt3DCard";

export function Customized() {
  const trackRef = useRef<HTMLDivElement>(null);
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

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <Section id="customized" className="border-y border-primary/10 bg-secondary/25">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Customized Solutions"
          title={
            <>
              Tailoring Tally to <span className="gradient-text">Your Business</span>
            </>
          }
          body="Every business works differently. SUYOG customizes Tally-based solutions around your workflows, reporting requirements and operational needs."
        />
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Previous case studies"
            onClick={() => scrollBy(-1)}
            className="grid size-12 place-items-center rounded-full border border-primary/20 bg-surface shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-sm"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next case studies"
            onClick={() => scrollBy(1)}
            className="grid size-12 place-items-center rounded-full border border-primary/20 bg-surface shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-sm"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
        style={{ scrollbarWidth: "none" }}
      >
        {CASE_STUDIES.map((study, i) => (
          <Reveal key={study.client} delay={i * 0.05} className="snap-start shrink-0">
            <Tilt3DCard maxTilt={8} className="h-full">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="gradient-ring group flex h-full w-[19rem] flex-col rounded-3xl glass p-8 text-left shadow-[0_10px_30px_rgba(30,96,255,0.06)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(30,96,255,0.16)] sm:w-[22rem]"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {study.industry}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-foreground">
                  {study.client}
                </h3>
                <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                  {study.context}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-primary">
                  View case study
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
                className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-primary/20 bg-surface text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <X className="size-5" />
              </button>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {active.industry}
              </span>
              <h3 className="mt-3 pr-12 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
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
