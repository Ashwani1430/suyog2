import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import heroDashboard from "@/assets/hero-dashboard.jpg";
import { Counter } from "./primitives";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border bg-secondary/40 px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur"
          >
            <ShieldCheck className="size-4 text-primary" />
            Trusted IT &amp; Tally Solutions Since 1990
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[4rem]"
          >
            30+ Years of Empowering Businesses with{" "}
            <span className="gradient-text">Smarter IT Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Since 1990, SUYOG has been helping businesses streamline operations with Tally
            solutions, customized business software and technology-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:glow-shadow"
            >
              Talk to an Expert
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#tally-products"
              className="inline-flex items-center gap-2 rounded-full border bg-secondary/40 px-7 py-4 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary/70"
            >
              <Sparkles className="size-4 text-primary" />
              Explore Solutions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-12 flex items-center gap-5"
          >
            <p className="font-display text-5xl font-semibold text-foreground">
              <Counter to={30} suffix="+" />
            </p>
            <div className="h-12 w-px bg-border" />
            <p className="max-w-[12rem] text-sm text-muted-foreground">
              Years
              <br />
              Experience in Business Technology
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="gradient-ring overflow-hidden rounded-3xl glass glow-shadow">
            <img
              src={heroDashboard}
              alt="SUYOG business analytics and Tally dashboard visualisation"
              width={1536}
              height={1152}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="float-slow absolute -left-4 bottom-10 rounded-2xl glass-strong px-5 py-4 sm:-left-8">
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              TallyPrime
            </p>
            <p className="mt-1 text-sm font-semibold">Integrated &amp; Customized</p>
          </div>
          <div
            className="float-slow absolute -right-2 top-8 rounded-2xl glass-strong px-5 py-4 sm:-right-6"
            style={{ animationDelay: "1.4s" }}
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Automation
            </p>
            <p className="mt-1 text-sm font-semibold">Reports &amp; Insights</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
