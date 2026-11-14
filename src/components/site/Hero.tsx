import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import { PRIMARY_PHONE, PRIMARY_TEL } from "@/data/suyog";
import { Counter } from "./primitives";
import { Tilt3DCard } from "./Tilt3DCard";
import { Ambient3DBackground } from "./Ambient3DBackground";
import { HeroMockup3D } from "./HeroMockup3D";
import { HeroSupportHub3D } from "./HeroSupportHub3D";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.iamrps.su";
const IOS_STORE_URL = "https://supporti-os.vercel.app/";
const APP_SUPPORT_PHONE = "7607729292";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-play timer (6.5s per slide), pauses automatically when user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
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

      <div className="relative mx-auto w-full max-w-[1360px] px-5 sm:px-8">
        {/* Slider Controls Strip (Top / Clean pill tabs) */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 p-1.5 shadow-xs backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveSlide(0)}
              className={`relative flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                activeSlide === 0
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              <ShieldCheck className="size-3.5" />
              <span>01 Enterprise Heritage</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSlide(1)}
              className={`relative flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                activeSlide === 1
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              <Smartphone className="size-3.5" />
              <span>02 Suyog Support Hub App</span>
              <span className="rounded-full bg-amber-400 px-1.5 py-0.2 text-[9px] font-black text-slate-950">
                New
              </span>
            </button>
          </div>

          {/* Prev / Next Chevrons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous Slide"
              onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
              className="grid size-8 place-items-center rounded-full border border-slate-200/90 bg-white/90 text-slate-700 shadow-xs hover:border-blue-300 hover:text-blue-600 hover:scale-105 transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next Slide"
              onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
              className="grid size-8 place-items-center rounded-full border border-slate-200/90 bg-white/90 text-slate-700 shadow-xs hover:border-blue-300 hover:text-blue-600 hover:scale-105 transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Animated Slide Switcher */}
        <AnimatePresence mode="wait">
          {activeSlide === 0 ? (
            /* SLIDE 1: Enterprise Tally Solutions & Heritage */
            <motion.div
              key="slide-enterprise"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid w-full items-center gap-10 lg:grid-cols-[0.82fr_1.38fr] lg:gap-10 xl:gap-12"
            >
              {/* Left Column: Authoritative Enterprise Messaging */}
              <div>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/90 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-700 shadow-sm backdrop-blur-md">
                  <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <ShieldCheck className="size-4 text-blue-600" />
                  <span>ESTD. 1990 • Premier Tally &amp; Enterprise IT Partner</span>
                </div>

                <h1 className="mt-5 text-2xl font-extrabold leading-[1.14] tracking-tight text-slate-900 sm:text-3xl lg:text-[2.35rem] xl:text-[2.6rem]">
                  Bringing Efficient Tools and{" "}
                  <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Solution for Business Analytics
                  </span>
                </h1>

                <p className="mt-4 max-w-lg text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                  For over 36 years, SUYOG has engineered tailored TallyPrime integrations,
                  secure cloud hosting, and enterprise automation modules to give leadership complete,
                  uninterrupted control of their operations.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#contact"
                    className="btn-shimmer group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/40"
                  >
                    Talk to an Expert
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href={`tel:${PRIMARY_TEL}`}
                    className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/90 px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-800 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
                  >
                    <Phone className="size-4 text-blue-600" />
                    <span>{PRIMARY_PHONE}</span>
                  </a>
                </div>

                {/* Trust Stat Pills */}
                <div className="mt-7 grid grid-cols-3 gap-3 border-t border-slate-200/70 pt-6">
                  <div>
                    <p className="font-display text-2xl font-black tracking-tight text-blue-600 sm:text-3xl">
                      <Counter to={36} suffix="+" />
                    </p>
                    <p className="mt-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Years Heritage
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                      <Counter to={5000} suffix="+" />
                    </p>
                    <p className="mt-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Deployments
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="mt-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      5-Star Rated Support
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Enterprise Console */}
              <div className="relative">
                <Tilt3DCard maxTilt={8} glare={true} className="w-full">
                  <HeroMockup3D />
                </Tilt3DCard>
              </div>
            </motion.div>
          ) : (
            /* SLIDE 2: Suyog Support Hub Mobile App Announcement */
            <motion.div
              key="slide-app"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid w-full items-center gap-10 lg:grid-cols-[0.82fr_1.38fr] lg:gap-10 xl:gap-12"
            >
              {/* Left Column: Official Support Hub App Launch Details */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-700 shadow-sm backdrop-blur-md">
                    <Smartphone className="size-4 text-blue-600" />
                    <span>📢 INTRODUCING MOBILE APP</span>
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 px-3 py-1 text-xs font-black text-slate-950 shadow-sm shadow-amber-500/20">
                    Free for all Tally Users
                  </span>
                </div>

                <h1 className="mt-5 text-2xl font-extrabold leading-[1.14] tracking-tight text-slate-900 sm:text-3xl lg:text-[2.35rem] xl:text-[2.55rem]">
                  Suyog Support Hub —{" "}
                  <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Your Tally Support is Now Just a Click Away!
                  </span>{" "}
                  📱✨
                </h1>

                <p className="mt-3.5 max-w-lg text-sm font-normal leading-relaxed text-slate-600 sm:text-[15px]">
                  With the <strong className="text-slate-900 font-semibold">Suyog Support Hub App</strong>, you can experience quick, hassle-free Tally support whenever you need it:
                </p>

                {/* 3 Core Checklist Benefits */}
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      Raise support requests quickly
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      Enquire about new Tally products &amp; services
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      Stay updated with important notifications
                    </span>
                  </div>
                </div>

                {/* Core Value Motto Banner */}
                <div className="mt-4.5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 px-3.5 py-2 text-xs sm:text-[13px] font-black text-blue-800 border border-blue-200/70 shadow-xs">
                  <span>🚀 Faster Support. Better Service. Always With You.</span>
                </div>

                {/* Download CTA Buttons */}
                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-slate-900/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-slate-800"
                  >
                    <Download className="size-4" />
                    <span>Google Play Store</span>
                  </a>

                  <a
                    href={IOS_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Download className="size-4" />
                    <span>Apple iOS Store</span>
                  </a>

                  {/* App Query Helpline Button */}
                  <a
                    href={`tel:${APP_SUPPORT_PHONE}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-4 py-3 text-xs sm:text-sm font-bold text-slate-800 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
                  >
                    <Phone className="size-4 text-blue-600" />
                    <span>App Query: {APP_SUPPORT_PHONE}</span>
                  </a>
                </div>

                {/* Footer Attribution Tag */}
                <p className="mt-5 text-xs font-semibold text-slate-400 border-t border-slate-200/70 pt-3">
                  Brought to you by <strong className="text-slate-600">Suyog System &amp; Software Pvt. Ltd.</strong>
                </p>
              </div>

              {/* Right Column: 3D Support Hub Smartphone & Dual QR Showcase */}
              <div className="relative">
                <Tilt3DCard maxTilt={8} glare={true} className="w-full">
                  <HeroSupportHub3D />
                </Tilt3DCard>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
