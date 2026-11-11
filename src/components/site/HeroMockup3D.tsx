import { motion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Database,
  FileCheck2,
  Layers,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import heroTeamImg from "@/assets/HeroTeamImage.jpg";
import tallyCertifiedPartnerImg from "@/assets/TallyCertifedPartner.png";
import tallyGvlaPartnerImg from "@/assets/tally-GVLA-partner.jpg";

export function HeroMockup3D() {
  return (
    <div className="relative w-full preserve-3d select-none">
      {/* Ambient Backlight Glow behind the 3D console */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.25) 0%, rgba(6, 182, 212, 0.2) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main 3D Enterprise Console Chassis */}
      <div className="relative rounded-3xl border border-blue-200/80 bg-white/95 p-6 shadow-[0_25px_60px_-15px_rgba(29,78,216,0.18),0_0_0_1px_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl">
        {/* Top Window Navigation Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-rose-400/90 shadow-xs" />
            <span className="size-3 rounded-full bg-amber-400/90 shadow-xs" />
            <span className="size-3 rounded-full bg-emerald-400/90 shadow-xs" />
            <div className="ml-3 hidden sm:flex items-center gap-2 rounded-lg border border-slate-200/60 bg-slate-50/80 px-3 py-1 text-[11px] font-semibold text-slate-600">
              <Server className="size-3 text-blue-600" />
              <span>suyog.erp.tallyprime / live-cluster</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Cloud Synced</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-slate-500">
              <Lock className="size-3 text-blue-600" />
              <span>256-bit SSL</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="mt-5 grid gap-4 sm:grid-cols-12">
          {/* Main Visual: Highlighted Official Tally Accreditation (Master Focus) + Supporting Team Visual */}
          <div className="sm:col-span-7 flex flex-col justify-start gap-3 sm:gap-3.5">
            {/* Master Tally Partner Accreditation Showcase (Primary Visual Focal Point) */}
            <div className="rounded-2xl border border-blue-200/90 bg-gradient-to-b from-white via-white to-blue-50/40 p-3 sm:p-3.5 shadow-[0_10px_28px_rgba(30,96,255,0.12)] transition-all duration-300">
              {/* Eyebrow Header Bar */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="flex size-5 items-center justify-center rounded-md bg-blue-600 text-white shadow-xs">
                    <ShieldCheck className="size-3.5" />
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-900">
                    Official Tally Accreditations
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-blue-700 border border-blue-200/80">
                  <span className="size-1.5 rounded-full bg-blue-600 animate-pulse" />
                  Highest 5-Star Tier
                </span>
              </div>

              {/* High-Impact Logos Grid */}
              <div className="mt-2.5 grid grid-cols-2 gap-2.5 items-stretch">
                {/* Logo 1: Tally Certified Partner 5-Star */}
                <div className="group/logo flex flex-col items-center justify-between rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-xs transition-all duration-300 hover:border-blue-400 hover:shadow-md">
                  <div className="flex h-14 sm:h-16 w-full items-center justify-center">
                    <img
                      src={tallyCertifiedPartnerImg}
                      alt="Tally Certified Partner - 5 Star Sales & Implementation"
                      className="max-h-12 sm:max-h-13 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105"
                      loading="eager"
                    />
                  </div>
                  <span className="mt-1 text-[9.5px] font-bold text-slate-700 text-center tracking-tight">
                    5-Star Sales &amp; Implementation
                  </span>
                </div>

                {/* Logo 2: Tally GVLA Partner */}
                <div className="group/logo flex flex-col items-center justify-between rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-xs transition-all duration-300 hover:border-blue-400 hover:shadow-md">
                  <div className="flex h-14 sm:h-16 w-full items-center justify-center">
                    <img
                      src={tallyGvlaPartnerImg}
                      alt="Tally GVLA Partner"
                      className="max-h-12 sm:max-h-13 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105"
                      loading="eager"
                    />
                  </div>
                  <span className="mt-1 text-[9.5px] font-bold text-slate-700 text-center tracking-tight">
                    Certified GVLA Partner
                  </span>
                </div>
              </div>
            </div>

            {/* Supporting Team Operations Visual */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm group">
              <div className="relative aspect-[16/8.5] w-full overflow-hidden">
                <img
                  src={heroTeamImg}
                  alt="SUYOG Tally & Enterprise Solutions Engineering Team"
                  className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Ambient Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Live Operations Status Tag */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/75 backdrop-blur-md px-2.5 py-1 text-[9px] font-semibold text-white/95 border border-white/15 shadow-xs">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SUYOG Enterprise Implementation Team
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Active Automation Pipeline */}
          <div className="sm:col-span-5 flex flex-col justify-between gap-3">
            <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-slate-900">Connected Services</span>
                <RefreshCw className="size-3.5 text-blue-600 animate-spin" style={{ animationDuration: "8s" }} />
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-slate-50/80 p-2.5 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="size-4 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">E-Way &amp; E-Invoice</p>
                      <p className="text-[10px] text-slate-500">Auto-generation active</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
                    OK
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50/80 p-2.5 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Cloud className="size-4 text-blue-600" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">Tally on Cloud</p>
                      <p className="text-[10px] text-slate-500">12ms latency</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-bold text-blue-700">
                    Live
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50/80 p-2.5 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Database className="size-4 text-purple-600" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">Custom TDL Engine</p>
                      <p className="text-[10px] text-slate-500">Suyog Modules Loaded</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[9px] font-bold text-purple-700">
                    v4.2
                  </span>
                </div>
              </div>
            </div>

            {/* Live Audit Stamp */}
            <div className="rounded-2xl border border-blue-200/60 bg-gradient-to-r from-blue-600 to-cyan-600 p-4 text-white shadow-md shadow-blue-500/20">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5" />
                <span className="text-xs font-bold tracking-wide">Tally Certified Solutions</span>
              </div>
              <p className="mt-1 text-[11px] font-medium text-blue-100 leading-snug">
                Authorized 5-Star implementations with zero data loss guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Holographic Layer 1: Top Right Badge */}
      <div
        className="float-slow absolute -right-4 -top-6 hidden sm:flex items-center gap-3 rounded-2xl border border-blue-200/90 bg-white/95 px-4 py-3 shadow-[0_20px_40px_rgba(29,78,216,0.2)] backdrop-blur-xl"
        style={{
          transform: "translateZ(70px)",
          transformStyle: "preserve-3d",
        }}
      >
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30">
          <Zap className="size-5" />
        </span>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
              Instant Sync
            </span>
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <p className="text-xs font-bold text-slate-900">Zero Lag Tally Remote</p>
        </div>
      </div>

      {/* Floating 3D Holographic Layer 2: Bottom Left Badge */}
      <div
        className="float-slow-reverse absolute -bottom-7 sm:-bottom-8 left-0 sm:-left-10 flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-blue-200/90 bg-white/95 px-3 py-2 sm:px-4 sm:py-3 shadow-[0_20px_40px_rgba(29,78,216,0.2)] backdrop-blur-xl"
        style={{
          transform: "translateZ(85px)",
          transformStyle: "preserve-3d",
        }}
      >
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-md shadow-emerald-500/30">
          <CheckCircle2 className="size-5" />
        </span>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
            GST &amp; Compliance
          </span>
          <p className="text-xs font-bold text-slate-900">100% Audit-Ready Reports</p>
        </div>
      </div>

      {/* Floating 3D Holographic Layer 3: Experience Seal */}
      <div
        className="absolute -bottom-5 right-6 hidden md:flex items-center gap-2 rounded-full border border-blue-200/80 bg-slate-900 px-4 py-2 text-white shadow-xl shadow-slate-900/20"
        style={{
          transform: "translateZ(60px)",
          transformStyle: "preserve-3d",
        }}
      >
        <Sparkles className="size-3.5 text-cyan-400" />
        <span className="text-xs font-bold tracking-wide">36+ Years Enterprise Heritage</span>
      </div>
    </div>
  );
}
