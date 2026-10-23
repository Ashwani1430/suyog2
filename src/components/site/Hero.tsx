import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";

import { PRIMARY_PHONE, PRIMARY_TEL } from "@/data/suyog";
import { Counter } from "./primitives";
import { Tilt3DCard } from "./Tilt3DCard";
import { Ambient3DBackground } from "./Ambient3DBackground";
import { HeroMockup3D } from "./HeroMockup3D";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-28">
      {/* 3D Ambient Glowing Mesh Background */}
      <Ambient3DBackground />

      {/* Modern Engineering Radial Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(#2563eb 0.75px, transparent 0.75px), radial-gradient(#2563eb 0.75px, #ffffff 0.75px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 30%, #000 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1.15fr] lg:gap-14">
        {/* Left Column: Authoritative Enterprise Messaging */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/90 px-4 py-2 text-xs font-bold tracking-wide text-blue-700 shadow-sm backdrop-blur-md"
          >
            <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
            <ShieldCheck className="size-4 text-blue-600" />
            <span>ESTD. 1990 • Premier Tally &amp; Enterprise IT Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.75rem]"
          >
            Transforming Enterprises with{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Smarter Tally &amp; IT Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-6 max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg"
          >
            For over 36 years, SUYOG has engineered tailored TallyPrime integrations,
            secure cloud hosting, and enterprise automation modules to give leadership complete,
            uninterrupted control of their operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="btn-shimmer group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/40"
            >
              Talk to an Expert
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={`tel:${PRIMARY_TEL}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/90 px-6 py-4 text-sm font-bold text-slate-800 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
            >
              <Phone className="size-4 text-blue-600" />
              <span>{PRIMARY_PHONE}</span>
            </a>
          </motion.div>

          {/* Trust Stat Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.36 }}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200/70 pt-8"
          >
            <div>
              <p className="font-display text-3xl font-black tracking-tight text-blue-600 sm:text-4xl">
                <Counter to={36} suffix="+" />
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Years Heritage
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                <Counter to={5000} suffix="+" />
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Deployments
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                5-Star Rated Support
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Live Workstation Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Tilt3DCard maxTilt={8} glare={true} className="w-full">
            <HeroMockup3D />
          </Tilt3DCard>
        </motion.div>
      </div>
    </section>
  );
}
