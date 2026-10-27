import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

import { Section, SectionHeading, Reveal } from "./primitives";
import { PRIMARY_PHONE, PRIMARY_TEL } from "@/data/suyog";

import bizAnalystLogo from "@/assets/Logos/Trusted Customers/Bizz Analyst.png";
import spineLogo from "@/assets/Logos/Trusted Customers/HR spine.png";
import shivamLogo from "@/assets/Logos/Trusted Customers/Shivam Medisoft.jpg";

const PARTNERS = [
  {
    name: "Biz Analyst",
    author: "By Khatabook",
    logo: bizAnalystLogo,
    badge: "Authorized Mobility Partner",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
    icon: Smartphone,
    iconBg: "from-blue-600 to-cyan-500",
    tagline: "Mobile Business Intelligence & Tally on Mobile",
    description:
      "Access critical Tally financial reports, customer ledgers, and inventory stats anytime, anywhere on smartphone or web.",
    capabilities: [
      "Real-time Tally sync on Android & iOS",
      "Automated WhatsApp payment reminders",
      "Sales force order taking & GPS check-in",
      "Data-level encryption & multi-user access",
    ],
  },
  {
    name: "Spine Technologies",
    author: "Enterprise HRMS & Payroll",
    logo: spineLogo,
    badge: "Authorized HRMS Partner",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    icon: Users,
    iconBg: "from-indigo-600 to-blue-700",
    tagline: "Enterprise HR, Payroll & Attendance Solutions",
    description:
      "Industry-leading HR software managing the entire employee lifecycle with direct biometric integration and automated Tally payroll posting.",
    capabilities: [
      "Automated payroll with PF, ESI, TDS & PT",
      "Biometric attendance & multi-shift rosters",
      "Employee self-service (ESS) mobile app",
      "One-click salary journal vouchers in Tally",
    ],
  },
  {
    name: "Shivam Medisoft",
    author: "Healthcare Management Systems",
    logo: shivamLogo,
    badge: "Authorized Healthcare Partner",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200/80",
    icon: HeartPulse,
    iconBg: "from-cyan-600 to-blue-600",
    tagline: "Comprehensive Healthcare & Hospital ERP",
    description:
      "End-to-end hospital management software (HIMS) connecting patient care, OPD/IPD, pharmacy, and diagnostic billing directly with Tally.",
    capabilities: [
      "Complete OPD, IPD & OT patient workflows",
      "Pharmacy batch tracking & inventory audit",
      "NABH-compliant electronic health records",
      "Automatic medical billing to TallyPrime sync",
    ],
  },
];

export function TrustedPartners() {
  return (
    <Section id="partners" className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/20 to-secondary/35 py-24">
      {/* Background ambient radial grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(#2563eb 0.75px, transparent 0.75px), radial-gradient(#2563eb 0.75px, #ffffff 0.75px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-4 py-1.5 text-xs font-bold text-blue-700 shadow-xs backdrop-blur-md"
          >
            <ShieldCheck className="size-4 text-blue-600" />
            <span>Strategic Enterprise Ecosystem</span>
          </motion.div>

          <div className="mt-4">
            <SectionHeading
              eyebrow="Our Trusted Partners"
              title={
                <>
                  Strategic Solutions with <span className="gradient-text">Trusted Partners</span>
                </>
              }
              body="SUYOG collaborates with premier technology providers to deliver certified, battle-tested solutions across business mobility, enterprise human resources, and specialized healthcare automation."
            />
          </div>
        </div>

        {/* 3 Partner Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner) => {
            const Icon = partner.icon;
            return (
              <Reveal
                key={partner.name}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_15px_45px_rgba(37,99,235,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
              >
                <div>
                  {/* Top Logo Display Frame */}
                  <div className="relative flex h-28 w-full items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors group-hover:bg-blue-50/30">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 max-w-[210px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Partner Badge */}
                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold ${partner.badgeColor}`}
                    >
                      <Sparkles className="size-3" />
                      {partner.badge}
                    </span>
                    <div
                      className={`grid size-9 place-items-center rounded-xl bg-gradient-to-tr ${partner.iconBg} text-white shadow-xs`}
                    >
                      <Icon className="size-4.5" />
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="mt-4">
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                      {partner.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-blue-600">{partner.tagline}</p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      {partner.description}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {partner.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 size-4 text-emerald-600 shrink-0" />
                        <span className="text-xs font-semibold text-slate-700 leading-snug">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 border-t border-slate-100 pt-5">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-xs font-bold text-slate-800 border border-slate-200/80 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                  >
                    <span>Consult on {partner.name}</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Integration Support Bar */}
        <Reveal className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50 via-white to-blue-50/80 p-6 sm:flex-row shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/25">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 sm:text-base">
                Looking for Seamless Partner Integration with Tally?
              </h4>
              <p className="text-xs text-slate-600">
                SUYOG provides authorized licensing, setup, deployment, and ongoing technical support
                for all partner solutions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${PRIMARY_TEL}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-xs hover:border-blue-300 hover:text-blue-600"
            >
              <Phone className="size-3.5 text-blue-600" />
              <span>{PRIMARY_PHONE}</span>
            </a>
            <a
              href="#contact"
              className="btn-shimmer inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow-md shadow-blue-600/30 hover:bg-blue-700"
            >
              <span>Get in Touch</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
