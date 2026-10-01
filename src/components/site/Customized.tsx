import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import { CASE_STUDIES } from "@/data/suyog";
import { Reveal, Section, SectionHeading } from "./primitives";

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
    <Section id="customized" className="border-y bg-secondary/20">
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
            className="grid size-12 place-items-center rounded-full border bg-secondary/40 transition-colors hover:bg-secondary/70"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next case studies"
            onClick={() => scrollBy(1)}
            className="grid size-12 place-items-center rounded-full border bg-secondary/40 transition-colors hover:bg-secondary/70"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
        style={{ scrollbarWidth: "none" }}
      >
        {CASE_STUDIES.map((study, i) => (
          <Reveal key={study.client} delay={i * 0.05} className="snap-start">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="gradient-ring group flex h-full w-[19rem] flex-col rounded-3xl glass p-7 text-left transition-transform duration-500 hover:-translate-y-2 sm:w-[22rem]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {study.industry}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-snug">{study.client}</h3>
              <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                {study.context}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary">
                View case study
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
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
              className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] glass-strong p-7 sm:rounded-[2rem] sm:p-10"
            >
              <button
                type="button"
                aria-label="Close case study"
                onClick={() => setOpenIndex(null)}
                className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border bg-secondary/60"
              >
                <X className="size-5" />
              </button>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {active.industry}
              </span>
              <h3 className="mt-3 pr-12 text-2xl font-semibold sm:text-3xl">{active.client}</h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold">Business requirements</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {active.context}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Customization provided</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {active.contribution}
                  </p>
                </div>
              </div>

              <h4 className="mt-9 text-sm font-semibold">Business workflow</h4>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {active.workflow.map((step, i) => (
                  <li key={step} className="flex gap-3 rounded-2xl border bg-secondary/30 px-4 py-3">
                    <span className="font-display text-xs font-semibold text-primary">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>

              <a
                href="#contact"
                onClick={() => setOpenIndex(null)}
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3.5 text-sm font-semibold text-primary-foreground"
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
