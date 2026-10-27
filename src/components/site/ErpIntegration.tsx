import { motion } from "motion/react";
import {
  ArrowLeftRight,
  ArrowRight,
  Boxes,
  Building,
  CheckCircle2,
  CreditCard,
  Database,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  FolderTree,
  KeyRound,
  Layers,
  Link as LinkIcon,
  Mail,
  Network,
  Phone,
  Puzzle,
  Receipt,
  RotateCcw,
  Scale,
  Server,
  ShieldCheck,
  Sparkles,
  Tag,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import { Section, SectionHeading, Reveal } from "./primitives";
import { PRIMARY_PHONE, PRIMARY_TEL } from "@/data/suyog";
import tallyPrimeLogo from "@/assets/Logos/Website Logo/Tally-Prime.png";

const MASTER_APIS = [
  {
    name: "Account Groups",
    desc: "Multi-level hierarchical chart of accounts and sub-groups",
    icon: Users,
  },
  {
    name: "Stock Groups",
    desc: "Centralized product hierarchy, brand & category sync",
    icon: Tag,
  },
  {
    name: "Unit Masters",
    desc: "Simple, alternate, compound & decimal units of measurement",
    icon: Scale,
  },
  {
    name: "Location / Godowns",
    desc: "Multi-warehouse, site, rack & godown inventory routing",
    icon: Building,
  },
  {
    name: "Ledger Masters",
    desc: "Customer, vendor, bank, GST & statutory tax ledgers",
    icon: FolderTree,
  },
  {
    name: "Item Masters",
    desc: "Complete inventory SKUs, HSN/SAC codes, GST rates & pricing",
    icon: Boxes,
  },
];

const TRANSACTION_APIS = [
  {
    name: "Sales Invoice",
    desc: "Instant auto-posting from web portals, mobile apps & CRM",
    icon: FileText,
  },
  {
    name: "Purchase Invoice",
    desc: "Direct procurement, vendor bills & GRN voucher sync",
    icon: FileSpreadsheet,
  },
  {
    name: "Debit Note",
    desc: "Automated purchase returns & supplier rate corrections",
    icon: RotateCcw,
  },
  {
    name: "Credit Note",
    desc: "Customer returns, discounts & turnover rebate vouchers",
    icon: CreditCard,
  },
  {
    name: "Payment Vouchers",
    desc: "Real-time bank disbursement, cheque & vendor payouts",
    icon: Wallet,
  },
  {
    name: "Receipt Vouchers",
    desc: "Payment gateway, POS & customer collection reconciliations",
    icon: Receipt,
  },
  {
    name: "Contra Vouchers",
    desc: "Bank-to-bank transfers, cash withdrawals & deposits",
    icon: ArrowLeftRight,
  },
  {
    name: "Journal Vouchers",
    desc: "Adjustment, depreciation, provisions & year-end entries",
    icon: FileCheck2,
  },
];

export function ErpIntegration() {
  return (
    <Section id="erp-integration" className="relative overflow-hidden bg-gradient-to-b from-secondary/35 via-white to-secondary/25 py-24">
      {/* Background radial engineering grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
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
        {/* Header with Official TallyPrime Badge */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-blue-200/90 bg-white/95 px-5 py-2 shadow-xs backdrop-blur-md"
          >
            <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
            <img src={tallyPrimeLogo} alt="TallyPrime" className="h-4.5 w-auto object-contain" />
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold text-slate-800">
              Certified Integration Architecture
            </span>
          </motion.div>

          <div className="mt-6">
            <SectionHeading
              eyebrow="API & System Integration"
              title={
                <>
                  Integrate Your ERP with <span className="gradient-text">TallyPrime</span>
                </>
              }
              body="Bridge custom ERPs, CRMs, e-commerce engines, and proprietary enterprise software with TallyPrime seamlessly through bidirectional, real-time APIs with zero manual data entry."
            />
          </div>
        </div>

        {/* 2 Core Integration Cards (Master API + Transaction API) */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Card 1: Master API Integration */}
          <Reveal className="group flex flex-col justify-between rounded-3xl border border-blue-200/90 bg-white p-7 sm:p-9 shadow-[0_15px_45px_rgba(37,99,235,0.06)] transition-all duration-300 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
            <div>
              {/* Pillar Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white shadow-md shadow-blue-600/30">
                    <Puzzle className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      Master API Integration
                    </h3>
                    <p className="text-xs font-semibold text-blue-600">
                      Centralized Master Data Synchronization
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 border border-blue-200/60">
                  6 Master Endpoints
                </span>
              </div>

              {/* Items List */}
              <div className="mt-6 space-y-3.5">
                {MASTER_APIS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="group/item flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-xs"
                    >
                      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-xs border border-slate-200/60 transition-transform group-hover/item:scale-110">
                        <Icon className="size-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                          <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                        </div>
                        <p className="mt-1 text-xs text-slate-600 leading-relaxed pl-6">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status Callout */}
            <div className="mt-8 flex items-center justify-between rounded-xl bg-blue-50/80 p-3.5 border border-blue-100 text-xs font-semibold text-blue-900">
              <span className="flex items-center gap-2">
                <Database className="size-4 text-blue-600" />
                Automatic Deduplication &amp; Field Mapping
              </span>
              <span className="text-emerald-700 font-bold">100% Validated</span>
            </div>
          </Reveal>

          {/* Card 2: Transaction API Integration */}
          <Reveal className="group flex flex-col justify-between rounded-3xl border border-blue-200/90 bg-white p-7 sm:p-9 shadow-[0_15px_45px_rgba(37,99,235,0.06)] transition-all duration-300 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
            <div>
              {/* Pillar Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-700 text-white shadow-md shadow-cyan-600/30">
                    <Layers className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      Transaction API Integration
                    </h3>
                    <p className="text-xs font-semibold text-cyan-600">
                      Real-Time Dual-Entry Voucher Automation
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700 border border-cyan-200/60">
                  8 Voucher Endpoints
                </span>
              </div>

              {/* Items List */}
              <div className="mt-6 space-y-3">
                {TRANSACTION_APIS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="group/item flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition-all duration-200 hover:border-cyan-200 hover:bg-cyan-50/40 hover:shadow-xs"
                    >
                      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-cyan-700 shadow-xs border border-slate-200/60 transition-transform group-hover/item:scale-110">
                        <Icon className="size-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                          <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-600 leading-relaxed pl-6">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status Callout */}
            <div className="mt-8 flex items-center justify-between rounded-xl bg-cyan-50/80 p-3.5 border border-cyan-100 text-xs font-semibold text-cyan-950">
              <span className="flex items-center gap-2">
                <Zap className="size-4 text-cyan-600" />
                Sub-Second Posting with Dual Audit Reconciliation
              </span>
              <span className="text-emerald-700 font-bold">Zero Latency</span>
            </div>
          </Reveal>
        </div>

        {/* Real-Time Integration Architecture Diagram (Matching Reference Poster) */}
        <Reveal className="mt-12 rounded-3xl border border-blue-200/90 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 text-white shadow-2xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-bold tracking-wide text-cyan-300">
              <Sparkles className="size-3.5" />
              Automated Bidirectional Architecture
            </span>
            <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              How the SUYOG ERP-Tally Connector Operates
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-blue-200/80">
              Robust middleware engineered to handle high transaction concurrency, automatic error
              retries, and transactional ledger locking without slowing down TallyPrime.
            </p>
          </div>

          {/* Diagram Flow */}
          <div className="mt-10 grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* Left Node: Your ERP */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/15">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                <Server className="size-7" />
              </div>
              <h4 className="mt-4 text-lg font-black text-white">YOUR ERP / CRM</h4>
              <p className="mt-1 text-xs text-blue-200">
                Custom Web Portals, SAP, Salesforce, In-House SQL Systems
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold text-emerald-300 border border-emerald-400/30">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Source Feed
              </div>
            </div>

            {/* Center Node: Seamless Real-Time Sync Bridge */}
            <div className="flex flex-col items-center justify-center px-2 py-4">
              <div className="flex items-center gap-2">
                <span className="hidden sm:block h-0.5 w-12 bg-gradient-to-r from-blue-500 to-cyan-400" />
                <div className="grid size-14 place-items-center rounded-2xl border border-cyan-400/40 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/25 backdrop-blur-md animate-pulse">
                  <LinkIcon className="size-7" />
                </div>
                <span className="hidden sm:block h-0.5 w-12 bg-gradient-to-r from-cyan-400 to-blue-500" />
              </div>
              <p className="mt-3 text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                Seamless Real-Time Sync
              </p>
              <p className="text-[11px] text-blue-200">REST &amp; XML Connector</p>
            </div>

            {/* Right Node: TallyPrime */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/15">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg shadow-white/10">
                <img src={tallyPrimeLogo} alt="TallyPrime" className="size-full object-contain" />
              </div>
              <h4 className="mt-4 text-lg font-black text-white">TallyPrime</h4>
              <p className="mt-1 text-xs text-blue-200">
                Single User, Multi-User Gold, Tally Server &amp; Cloud
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-[11px] font-bold text-cyan-300 border border-cyan-400/30">
                <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Dual-Audit Compliant
              </div>
            </div>
          </div>

          {/* 4 Feature Badges */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-white/10 pt-8 text-center">
            <div className="rounded-xl bg-white/5 p-3 border border-white/10">
              <Zap className="mx-auto size-5 text-amber-400" />
              <p className="mt-1.5 text-xs font-bold text-white">Instant Sync</p>
              <p className="text-[10px] text-blue-200">Sub-second ledger reflect</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/10">
              <ShieldCheck className="mx-auto size-5 text-emerald-400" />
              <p className="mt-1.5 text-xs font-bold text-white">Zero Data Loss</p>
              <p className="text-[10px] text-blue-200">Guaranteed queue integrity</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/10">
              <KeyRound className="mx-auto size-5 text-cyan-400" />
              <p className="mt-1.5 text-xs font-bold text-white">256-Bit SSL</p>
              <p className="text-[10px] text-blue-200">Encrypted transmission</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/10">
              <Network className="mx-auto size-5 text-purple-400" />
              <p className="mt-1.5 text-xs font-bold text-white">Audit Trails</p>
              <p className="text-[10px] text-blue-200">Auto error alerts &amp; logs</p>
            </div>
          </div>

          {/* Contact / Solutions Architect Strip (From Poster) */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 sm:flex-row backdrop-blur-md">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                SUYOG SYSTEM &amp; SOFTWARE PVT. LTD.
              </p>
              <p className="text-xs text-blue-100">
                Consult with our senior Tally API integration architects today.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PRIMARY_TEL}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white hover:text-slate-900"
              >
                <Phone className="size-3.5 text-cyan-300" />
                <span>{PRIMARY_PHONE}</span>
              </a>

              <a
                href="mailto:preet.kalsi@suyog.net"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white hover:text-slate-900"
              >
                <Mail className="size-3.5 text-cyan-300" />
                <span>preet.kalsi@suyog.net</span>
              </a>

              <a
                href="#contact"
                className="btn-shimmer inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>Request API Demo</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
