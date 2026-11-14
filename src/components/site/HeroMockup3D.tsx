import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  Lock,
  Phone,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import heroTeamImg from "@/assets/HeroTeamImage.jpg";
import tallyCertifiedPartnerImg from "@/assets/TallyCertifedPartner.png";
import tallyGvlaPartnerImg from "@/assets/tally-GVLA-partner.jpg";
import { PRIMARY_PHONE, PRIMARY_TEL } from "@/data/suyog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function HeroMockup3D() {
  const [openContact, setOpenContact] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    solution: "TallyPrime Licensing & Upgrades",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };
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
      <div className="relative rounded-3xl border border-blue-200/80 bg-white/95 p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(29,78,216,0.18),0_0_0_1px_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl">
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

        {/* Master Brand Console (Full-Width, Centered Big SUYOG Logo, 2 Partner Logos & Corner Visual) */}
        <div className="mt-5 w-full rounded-2xl border border-blue-200/90 bg-gradient-to-b from-white via-white to-blue-50/40 p-6 sm:p-8 shadow-[0_14px_36px_rgba(30,96,255,0.09)] flex flex-col justify-between gap-6">
          {/* Top Center: Prominent Big SUYOG Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="/logo.png"
              alt="SUYOG System & Software Pvt. Ltd."
              className="h-16 sm:h-20 md:h-22 w-auto object-contain transition-transform duration-300 hover:scale-105"
              loading="eager"
            />
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
              {/* <span className="rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200/80 shadow-xs flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-blue-600" />
                Authorized 5-Star Sales &amp; Solution Partner
              </span> */}
              <span className="rounded-full bg-slate-100/80 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                36+ Years Enterprise Heritage
              </span>
            </div>
          </div>

          {/* Symmetrical Middle: The Two Tally Partner Logos */}
          <div className="w-full">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent flex-1 max-w-[140px]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-blue-600" />
                Official Tally Accreditations
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent flex-1 max-w-[140px]" />
            </div>

            {/* The Two Logos Side-by-Side (High Visibility) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto items-stretch">
              {/* Logo 1: Tally Certified Partner 5-Star */}
              <div className="group/logo flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md">
                <div className="flex h-16 sm:h-18 w-full items-center justify-center">
                  <img
                    src={tallyCertifiedPartnerImg}
                    alt="Tally Certified Partner - 5 Star Sales & Implementation"
                    className="max-h-13 sm:max-h-14 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105"
                    loading="eager"
                  />
                </div>
                <span className="mt-2 text-xs font-bold text-slate-800 text-center tracking-tight">
                  5-Star Sales &amp; Implementation
                </span>
              </div>

              {/* Logo 2: Tally GVLA Partner */}
              <div className="group/logo flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md">
                <div className="flex h-16 sm:h-18 w-full items-center justify-center">
                  <img
                    src={tallyGvlaPartnerImg}
                    alt="Tally GVLA Partner"
                    className="max-h-13 sm:max-h-14 w-auto object-contain scale-105 transition-transform duration-300 group-hover/logo:scale-105"
                    loading="eager"
                  />
                </div>
                <span className="mt-2 text-xs font-bold text-slate-800 text-center tracking-tight">
                  Certified GVLA Partner
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Contact Us Button + Team Visual in Corner */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setOpenContact(true)}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/35 cursor-pointer active:scale-95"
            >
              <Phone className="size-4" />
              <span>Contact Us</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Supporting Team Visual in the Corner */}
            <div className="relative h-14 sm:h-16 w-28 sm:w-36 shrink-0 overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 shadow-xs group/img">
              <img
                src={heroTeamImg}
                alt="SUYOG Enterprise Implementation Team"
                className="size-full object-cover object-center transition-transform duration-500 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
              <span className="absolute bottom-1 right-1.5 rounded-md bg-slate-900/80 px-1.5 py-0.5 text-[8.5px] font-bold text-white leading-none">
                Live Ops
              </span>
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

      {/* Interactive Contact Form Popup Modal */}
      <Dialog open={openContact} onOpenChange={setOpenContact}>
        <DialogContent className="max-w-lg rounded-3xl border border-blue-100 bg-white p-6 sm:p-8 shadow-2xl">
          <DialogHeader className="text-left space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 w-fit border border-blue-200/60">
              <ShieldCheck className="size-3.5 text-blue-600" />
              <span>Authorized Tally 5-Star Partner</span>
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Get in Touch with SUYOG
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-slate-500">
              Speak directly with our senior Tally consultants for licenses, deployment, customizations, or support.
            </DialogDescription>
          </DialogHeader>

          {/* Direct Phone Assistance Banner */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-blue-50/70 p-3 border border-blue-100 text-xs text-slate-700">
            <span className="font-semibold text-slate-700">Need instant assistance?</span>
            <a
              href={`tel:${PRIMARY_TEL}`}
              className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-800 hover:underline"
            >
              <Phone className="size-3.5 text-blue-600" />
              <span>{PRIMARY_PHONE}</span>
            </a>
          </div>

          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
              <div className="grid size-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="size-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Thank You! Inquiry Received</h4>
              <p className="text-xs text-slate-500 max-w-sm">
                Our senior Tally consultant will review your requirements and reach out to you within 2 business hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    solution: "TallyPrime Licensing & Upgrades",
                    message: "",
                  });
                }}
                className="mt-2 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-3.5 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98891 07777"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Required Solution
                  </label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                  >
                    <option value="TallyPrime Licensing & Upgrades">TallyPrime Licensing & Upgrades</option>
                    <option value="Tally on Cloud (Anywhere Access)">Tally on Cloud (Anywhere Access)</option>
                    <option value="TallyPrime Server (High Concurrency)">TallyPrime Server (High Concurrency)</option>
                    <option value="TSS Renewal & Enterprise Support">TSS Renewal & Enterprise Support</option>
                    <option value="Custom TDL & ERP API Integration">Custom TDL & API Integration</option>
                    <option value="Industry Solution (EduSoft, BuildSoft, etc.)">Industry Specific Software</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  How can we help you?
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your users, requirements or business needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Lock className="size-3 text-emerald-500" />
                  Your information is strictly confidential
                </span>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer active:scale-95 disabled:opacity-60 transition-all"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-3.5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="size-3.5" />
                      <span>Send Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
