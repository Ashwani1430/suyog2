import { motion } from "motion/react";
import {
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Headphones,
  MessageSquare,
  Phone,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import qrPlayStoreImg from "@/assets/qr-playstore.jpg";
import qrIosImg from "@/assets/qr-ios.jpg";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.iamrps.su";
const IOS_STORE_URL = "https://supporti-os.vercel.app/";
const APP_SUPPORT_PHONE = "7607729292";

export function HeroSupportHub3D() {
  return (
    <div className="relative w-full preserve-3d select-none">
      {/* Ambient Backlight Glow behind the 3D console */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.28) 0%, rgba(6, 182, 212, 0.22) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main 3D Support Hub Console Chassis */}
      <div className="relative rounded-3xl border border-blue-200/80 bg-white/95 p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(29,78,216,0.18),0_0_0_1px_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl">
        {/* Top Window Navigation Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-rose-400/90 shadow-xs" />
            <span className="size-3 rounded-full bg-amber-400/90 shadow-xs" />
            <span className="size-3 rounded-full bg-emerald-400/90 shadow-xs" />
            <div className="ml-3 hidden sm:flex items-center gap-2 rounded-lg border border-slate-200/60 bg-slate-50/80 px-3 py-1 text-[11px] font-semibold text-slate-600">
              <Smartphone className="size-3 text-blue-600" />
              <span>suyog.support.hub / mobile-app</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available Now</span>
            </div>
            <span className="hidden sm:inline-flex rounded-full bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-700 shadow-xs">
              Free for Tally Users
            </span>
          </div>
        </div>

        {/* Console Body: Smartphone Mockup & Dual QR Codes */}
        <div className="mt-4 w-full rounded-2xl border border-blue-200/90 bg-gradient-to-b from-white via-white to-blue-50/40 p-6 sm:p-7 shadow-[0_14px_36px_rgba(30,96,255,0.09)] flex flex-col justify-between gap-6">
          {/* Top Brand Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="SUYOG"
                className="h-10 sm:h-12 w-auto object-contain"
                loading="eager"
              />
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900">
                    Suyog Support Hub
                  </h3>
                  <span className="rounded-md bg-blue-600 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
                    App
                  </span>
                </div>
                <p className="text-xs font-semibold text-blue-600">
                  Tally Support, Just a Click Away
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 px-3.5 py-1.5 text-xs font-black text-slate-950 shadow-sm shadow-amber-500/25">
              <Sparkles className="size-3.5 fill-slate-950" />
              <span>100% Free for all Tally Users</span>
            </div>
          </div>

          {/* Middle Grid: Phone Mockup on Left + Dual QR Codes on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Smartphone Screen Mockup (md:col-span-5) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[260px] sm:max-w-[275px] rounded-[2.3rem] border-[4.5px] border-slate-800 bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/30">
                {/* Speaker Notch */}
                <div className="mx-auto mb-2 h-4 w-20 rounded-full bg-slate-800 flex items-center justify-center">
                  <div className="size-1.5 rounded-full bg-slate-700" />
                </div>

                {/* Simulated Screen */}
                <div className="rounded-[1.7rem] bg-gradient-to-b from-blue-50 via-white to-blue-50/70 p-3.5 text-left overflow-hidden border border-slate-100 shadow-inner">
                  {/* App Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <img src="/logo.png" alt="SUYOG" className="h-6 w-auto" />
                    <span className="text-[10px] font-extrabold text-blue-700">Support Hub</span>
                  </div>

                  {/* App Cards inside phone */}
                  <div className="mt-3 space-y-2.5">
                    {/* Raise Issue Card */}
                    <div className="rounded-xl border border-blue-200/80 bg-white p-2.5 shadow-xs">
                      <div className="flex items-center gap-2">
                        <span className="grid size-6 place-items-center rounded-lg bg-blue-100 text-blue-600 shrink-0">
                          <Headphones className="size-3.5" />
                        </span>
                        <span className="text-[11px] font-bold text-slate-800">Raise Issue</span>
                      </div>
                      <p className="mt-1 text-[9.5px] text-slate-500 leading-tight">
                        File support tickets &amp; requests in seconds
                      </p>
                    </div>

                    {/* New Enquiry Card */}
                    <div className="rounded-xl border border-emerald-200/80 bg-white p-2.5 shadow-xs">
                      <div className="flex items-center gap-2">
                        <span className="grid size-6 place-items-center rounded-lg bg-emerald-100 text-emerald-600 shrink-0">
                          <MessageSquare className="size-3.5" />
                        </span>
                        <span className="text-[11px] font-bold text-slate-800">New Enquiry</span>
                      </div>
                      <p className="mt-1 text-[9.5px] text-slate-500 leading-tight">
                        Product catalog, licensing &amp; demos
                      </p>
                    </div>

                    {/* Notification Alert */}
                    <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-2.5 text-white shadow-xs">
                      <div className="flex items-center gap-2">
                        <Bell className="size-3.5 text-yellow-300 shrink-0" />
                        <span className="text-[10px] font-bold">Live Status Updates</span>
                      </div>
                      <p className="mt-0.5 text-[9px] text-blue-100 leading-tight">
                        Instant push notification on resolution
                      </p>
                    </div>
                  </div>

                  {/* App Footer inside Phone */}
                  <div className="mt-2.5 text-center pt-1.5 border-t border-slate-100">
                    <span className="text-[9px] font-bold text-slate-400">www.suyog.net</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dual QR Codes for Play Store & iOS (md:col-span-7) */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-200/60">
                  <QrCode className="size-3.5" />
                  Scan to Install Mobile App
                </span>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Point your phone camera at either QR code or click to open the store link directly.
                </p>
              </div>

              {/* Side-by-Side Dual QR Containers (Enlarged & Focused) */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* 1. Android Play Store QR */}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/qr flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:shadow-md hover:scale-[1.02]"
                >
                  <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2">
                    <img
                      src={qrPlayStoreImg}
                      alt="Scan for Android Google Play Store"
                      className="size-28 sm:size-32 lg:size-36 object-contain transition-transform duration-300 group-hover/qr:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-slate-900 font-black text-xs sm:text-sm group-hover/qr:text-emerald-600 transition-colors">
                    <span>Google Play</span>
                    <ArrowUpRight className="size-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">Android App</span>
                </a>

                {/* 2. Apple iOS Store QR */}
                <a
                  href={IOS_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/qr flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md hover:scale-[1.02]"
                >
                  <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2">
                    <img
                      src={qrIosImg}
                      alt="Scan for Apple iOS App Store"
                      className="size-28 sm:size-32 lg:size-36 object-contain transition-transform duration-300 group-hover/qr:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-slate-900 font-black text-xs sm:text-sm group-hover/qr:text-blue-600 transition-colors">
                    <span>iOS App Store</span>
                    <ArrowUpRight className="size-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">iPhone / iPad</span>
                </a>
              </div>

              {/* Direct Store Buttons for Click-through on Desktop */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2.5 text-xs font-bold shadow-sm transition-all"
                >
                  <span>Google Play</span>
                </a>
                <a
                  href={IOS_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2.5 text-xs font-bold shadow-sm transition-all"
                >
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Value Trio + Dedicated App Query Phone */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Value Highlights */}
            <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
              <span className="inline-flex items-center gap-1 text-blue-600">
                <Zap className="size-3.5" />
                <span>Faster Support</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-600">
                <ShieldCheck className="size-3.5" />
                <span>Better Service</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-indigo-600">
                <CheckCircle2 className="size-3.5" />
                <span>Always With You</span>
              </span>
            </div>

            {/* Direct App Query Helpline */}
            <a
              href={`tel:${APP_SUPPORT_PHONE}`}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 text-xs font-bold border border-blue-200/80 transition-colors shadow-xs"
            >
              <Phone className="size-3.5 text-blue-600" />
              <span>App Helpline: {APP_SUPPORT_PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating 3D Holographic Layer 1: Top Right Badge */}
      <div
        className="float-slow absolute -right-3 -top-5 hidden sm:flex items-center gap-2.5 rounded-2xl border border-blue-200/90 bg-white/95 px-3.5 py-2.5 shadow-[0_20px_40px_rgba(29,78,216,0.18)] backdrop-blur-xl"
        style={{
          transform: "translateZ(70px)",
          transformStyle: "preserve-3d",
        }}
      >
        <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30">
          <Smartphone className="size-4.5" />
        </span>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            Live Support App
          </span>
          <p className="text-xs font-bold text-slate-900">Android &amp; iOS</p>
        </div>
      </div>

      {/* Floating 3D Holographic Layer 2: Bottom Left Badge */}
      <div
        className="float-slow-reverse absolute -bottom-6 sm:-bottom-7 left-0 sm:-left-8 flex items-center gap-2.5 rounded-2xl border border-blue-200/90 bg-white/95 px-3 py-2 sm:px-4 sm:py-2.5 shadow-[0_20px_40px_rgba(29,78,216,0.18)] backdrop-blur-xl"
        style={{
          transform: "translateZ(85px)",
          transformStyle: "preserve-3d",
        }}
      >
        <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/30">
          <Sparkles className="size-4.5 fill-slate-950" />
        </span>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
            Free Access
          </span>
          <p className="text-xs font-bold text-slate-900">All Tally Users</p>
        </div>
      </div>
    </div>
  );
}
