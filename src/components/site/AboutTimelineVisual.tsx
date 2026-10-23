import { motion } from "motion/react";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Cpu,
  History,
  MapPin,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";

export function AboutTimelineVisual() {
  const milestones = [
    {
      year: "1990",
      label: "Foundation",
      detail: "Kanpur IT Pioneer",
      h: "42%",
      color: "from-blue-200 to-blue-400",
      active: false,
    },
    {
      year: "2005",
      label: "Custom TDL",
      detail: "Industry Modules",
      h: "60%",
      color: "from-blue-300 to-blue-500",
      active: false,
    },
    {
      year: "2017",
      label: "GST Era",
      detail: "Tax Compliance",
      h: "78%",
      color: "from-blue-400 to-blue-600",
      active: false,
    },
    {
      year: "2026+",
      label: "Connected Cloud",
      detail: "Cloud ERP & API",
      h: "98%",
      color: "from-blue-600 via-indigo-600 to-cyan-400",
      active: true,
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between preserve-3d select-none">
      {/* Ambient Light Halo */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.22) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Main Light Glass Showcase Chassis */}
      <div className="relative flex flex-col justify-between h-full rounded-3xl border border-blue-200/80 bg-white/95 p-7 shadow-[0_20px_50px_-10px_rgba(29,78,216,0.14)] backdrop-blur-2xl">
        {/* Top Header Strip */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/25">
              <History className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">SUYOG Heritage Roadmap</p>
              <p className="text-[11px] font-medium text-slate-500">1990 — 2026+ Continuous Innovation</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            <Sparkles className="size-3.5 text-blue-600" />
            <span>36+ Years</span>
          </span>
        </div>

        {/* Milestone 3D Growth Pillar Simulation */}
        <div className="relative my-6 pt-2 pb-2">
          {/* Growth Curve Line in Background */}
          <div className="pointer-events-none absolute inset-x-4 top-8 h-28 opacity-40">
            <svg viewBox="0 0 400 120" className="w-full h-full preserve-3d overflow-visible">
              <path
                d="M 20,100 C 120,95 240,60 380,10"
                fill="none"
                stroke="url(#growth-gradient)"
                strokeWidth="3"
                strokeDasharray="4 4"
              />
              <defs>
                <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#93c5fd" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Pillars Grid */}
          <div className="relative grid grid-cols-4 gap-3 sm:gap-4 h-52 items-end pb-2">
            {milestones.map((m) => (
              <div key={m.year} className="flex flex-col items-center h-full justify-end group">
                {/* Year Label Float Top */}
                <span
                  className={`mb-2 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                    m.active
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700"
                  }`}
                >
                  {m.year}
                </span>

                {/* 3D Glass Pillar */}
                <div
                  style={{ height: m.h }}
                  className={`w-full max-w-[56px] rounded-2xl bg-gradient-to-t ${m.color} border border-white/60 shadow-md transition-all duration-500 group-hover:scale-105 ${
                    m.active
                      ? "shadow-lg shadow-blue-500/35 ring-2 ring-blue-500/30"
                      : "shadow-slate-300/40"
                  }`}
                >
                  {m.active && (
                    <div className="flex h-full items-start justify-center pt-2">
                      <span className="size-2 rounded-full bg-white animate-ping" />
                    </div>
                  )}
                </div>

                {/* Bottom Milestone Name */}
                <span className="mt-2.5 text-center text-[11px] font-bold text-slate-800 leading-tight">
                  {m.label}
                </span>
                <span className="hidden sm:block text-center text-[10px] text-slate-400 mt-0.5 leading-snug">
                  {m.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Metrics Bar */}
        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5">
            <div className="flex items-center gap-1.5 text-blue-600">
              <ShieldCheck className="size-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Data Security
              </span>
            </div>
            <p className="mt-1 text-sm font-bold text-slate-900">Zero Data Loss</p>
            <p className="text-[10px] text-slate-500">Continuous migration integrity</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <TrendingUp className="size-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Retention
              </span>
            </div>
            <p className="mt-1 text-sm font-bold text-slate-900">99.4% Client Loyalty</p>
            <p className="text-[10px] text-slate-500">Long-term enterprise trust</p>
          </div>
        </div>

        {/* Lower Credentials Bar: Fills Space Solidly & Elegantly */}
        <div className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-white to-cyan-50/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-blue-600" />
              <div>
                <p className="text-xs font-bold text-slate-900">Kanpur Headquarters</p>
                <p className="text-[10px] text-slate-500">Sarvodaya Nagar • Serving Enterprises PAN-India</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-white border border-blue-200/60 rounded-full px-3 py-1 shadow-xs">
              <Users2 className="size-3.5 text-blue-600" />
              <span>5,000+ Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Badge */}
      <div
        className="float-slow absolute -bottom-5 -right-3 sm:-right-5 flex items-center gap-2.5 rounded-2xl border border-blue-200/90 bg-white/95 px-4 py-3 shadow-[0_16px_36px_rgba(29,78,216,0.18)] backdrop-blur-xl"
        style={{
          transform: "translateZ(65px)",
          transformStyle: "preserve-3d",
        }}
      >
        <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25">
          <Award className="size-4" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            Trusted Legacy
          </p>
          <p className="text-xs font-bold text-slate-900">Since 1990 in Kanpur</p>
        </div>
      </div>
    </div>
  );
}
