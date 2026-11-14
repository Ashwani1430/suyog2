import { useState } from "react";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  MessageSquare,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TESTIMONIALS, type TestimonialItem } from "@/data/testimonialsData";

export function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialItem | null>(null);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-50/60 via-white to-blue-50/30 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Ambient Glow & Grid Accent */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.22) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-1.5 text-xs font-bold tracking-wide text-blue-700 shadow-xs backdrop-blur-md">
            <Award className="size-4 text-blue-600" />
            <span>CLIENT TESTIMONIALS &amp; APPRECIATION</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by Leading{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Educational Institutions
            </span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Official letters of appreciation and verified certificates from university CFOs,
            school principals, and trust secretaries running SUYOG’s{" "}
            <strong className="font-semibold text-slate-900">Tally.EduSoft</strong> and{" "}
            <strong className="font-semibold text-slate-900">eLOGiPay</strong> solutions.
          </p>

          {/* Quick Credibility Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-3.5 py-1.5 shadow-2xs">
              <ShieldCheck className="size-3.5 text-emerald-600" />
              <span>Official Certificates &amp; Letters</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-3.5 py-1.5 shadow-2xs">
              <CheckCircle2 className="size-3.5 text-blue-600" />
              <span>100% Genuine Executive Feedback</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-3.5 py-1.5 shadow-2xs">
              <Sparkles className="size-3.5 text-amber-500" />
              <span>Tally.EduSoft + eLOGiPay Ecosystem</span>
            </span>
          </div>
        </div>

        {/* Testimonials 3x2 Compact Responsive Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/10"
            >
              {/* Decorative Top Quote Icon in background */}
              <Quote
                className="pointer-events-none absolute right-5 top-5 size-10 text-slate-100 transition-colors group-hover:text-blue-50"
                aria-hidden="true"
              />

              {/* Card Upper Half */}
              <div>
                {/* Logo & Certificate Ribbon Header */}
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3.5 min-h-[58px]">
                  {/* Institution Logo / Emblem */}
                  {t.logo ? (
                    <div className="flex h-11 w-28 sm:w-32 items-center justify-start overflow-hidden">
                      <img
                        src={t.logo}
                        alt={t.institution}
                        className="max-h-10 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-tr ${t.emblemColor ?? "from-blue-600 to-indigo-600"} text-white font-black text-xs tracking-wider shadow-xs`}
                    >
                      {t.emblemInitials ?? "INST"}
                    </div>
                  )}

                  {/* Certificate Badge & Date */}
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-200/80 bg-amber-50/90 px-2 py-0.5 text-[9.5px] font-extrabold text-amber-800 shadow-2xs">
                      <Award className="size-2.5 text-amber-600" />
                      <span>{t.certificateType}</span>
                    </span>

                    {t.date && (
                      <span className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-slate-400">
                        <Calendar className="size-2.5" />
                        <span>{t.date}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Institution Name & Product */}
                <div className="mt-3.5">
                  <h3 className="font-display text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {t.institution}
                  </h3>
                  {t.subtitle && (
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5 line-clamp-1">
                      {t.subtitle} {t.location ? `• ${t.location}` : ""}
                    </p>
                  )}
                </div>

                {/* Featured Product Pill */}
                <div className="mt-2.5">
                  <span className="inline-flex items-center gap-1 rounded-md border border-blue-200/80 bg-blue-50/80 px-2.5 py-0.5 text-[11px] font-bold text-blue-700">
                    <GraduationCap className="size-3 text-blue-600 shrink-0" />
                    <span className="line-clamp-1">{t.productName}</span>
                  </span>
                </div>

                {/* Star Rating & Highlight Badge */}
                <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-[11px] font-bold text-slate-700">5.0</span>
                  </div>

                  {t.highlightStat && (
                    <span className="rounded bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 text-[9.5px] font-bold text-emerald-700">
                      {t.highlightStat}
                    </span>
                  )}
                </div>

                {/* Compact Quote Snippet (Line Clamped to 3 lines) */}
                <p className="mt-2.5 text-xs sm:text-[13px] font-normal leading-relaxed text-slate-600 line-clamp-3">
                  “{t.quote}”
                </p>

                {/* Read Full Certificate Popup Trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedTestimonial(t)}
                  className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-all group-hover:translate-x-0.5 cursor-pointer"
                >
                  <span>Read Full Certificate</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Card Signatory Bottom Row */}
              <div className="mt-4 border-t border-slate-100 pt-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                      {t.signatory}
                    </p>
                    <p className="text-[11px] font-semibold text-blue-600 truncate">
                      {t.designation}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedTestimonial(t)}
                    aria-label={`View full certificate from ${t.institution}`}
                    className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors border border-blue-100 cursor-pointer"
                  >
                    <ExternalLink className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Certificate & Testimonial Details Modal Popup */}
      <Dialog
        open={Boolean(selectedTestimonial)}
        onOpenChange={(open) => !open && setSelectedTestimonial(null)}
      >
        {selectedTestimonial && (
          <DialogContent className="max-w-2xl sm:max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-white shadow-2xl border-slate-200/90 text-left">
            <DialogHeader className="space-y-3 pb-4 border-b border-slate-100 text-left">
              {/* Modal Top Bar: Logo + Certificate Badge & Date */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                {selectedTestimonial.logo ? (
                  <div className="flex h-12 w-32 items-center justify-start overflow-hidden">
                    <img
                      src={selectedTestimonial.logo}
                      alt={selectedTestimonial.institution}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-tr ${selectedTestimonial.emblemColor ?? "from-blue-600 to-indigo-600"} text-white font-black text-sm shadow-sm`}
                  >
                    {selectedTestimonial.emblemInitials ?? "INST"}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-black text-amber-800 shadow-2xs">
                    <Award className="size-3.5 text-amber-600" />
                    <span>{selectedTestimonial.certificateType}</span>
                  </span>

                  {selectedTestimonial.date && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                      <Calendar className="size-3 text-slate-500" />
                      <span>Dated: {selectedTestimonial.date}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Institution Title */}
              <div>
                <DialogTitle className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                  {selectedTestimonial.institution}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                  {selectedTestimonial.subtitle}
                  {selectedTestimonial.location ? ` • ${selectedTestimonial.location}` : ""}
                </DialogDescription>
              </div>

              {/* Product Badge in Modal */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  <GraduationCap className="size-3.5 text-blue-600" />
                  <span>Product: {selectedTestimonial.productName}</span>
                </span>

                <div className="flex items-center gap-1 text-amber-400 ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-slate-700">5.0 Verified</span>
                </div>
              </div>
            </DialogHeader>

            {/* Official Certificate Letter Body */}
            <div className="mt-4 space-y-4">
              <div className="relative rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/40 via-white to-blue-50/20 p-5 sm:p-7 shadow-inner">
                <Quote
                  className="pointer-events-none absolute right-5 top-5 size-12 text-blue-100/60"
                  aria-hidden="true"
                />

                <div className="relative z-10 space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
                  {selectedTestimonial.quote.split("\n\n").map((para, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Signatory Footer inside Modal */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                    <ShieldCheck className="size-6" />
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {selectedTestimonial.signatory}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-blue-600">
                      {selectedTestimonial.designation}
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      {selectedTestimonial.organization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="#contact"
                    onClick={() => setSelectedTestimonial(null)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold shadow-md shadow-blue-500/20 transition-all"
                  >
                    <MessageSquare className="size-3.5" />
                    <span>Inquire for Your Institute</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedTestimonial(null)}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
