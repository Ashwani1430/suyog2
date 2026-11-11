import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Network,
  Phone,
  Settings2,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { CONTACT, FOOTER_LINKS, NAV_LINKS, PRIMARY_PHONE, PRIMARY_TEL } from "@/data/suyog";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle outside clicks to close the desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = window.setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/90 bg-white shadow-[0_4px_20px_-4px_rgba(15,23,42,0.08)]"
          : "border-b border-slate-100 bg-white",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="SUYOG System & Software Pvt. Ltd."
            className="h-11 sm:h-12 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links — Strictly Single Line & Perfectly Centered */}
        <nav aria-label="Desktop Navigation" className="hidden lg:flex items-center justify-center flex-1 mx-4">
          <ul className="flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              if (link.children && link.children.length > 0) {
                return (
                  <li
                    key={link.label}
                    ref={dropdownRef}
                    className="relative shrink-0"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      aria-expanded={dropdownOpen}
                      onClick={() => setDropdownOpen((v) => !v)}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") setDropdownOpen(false);
                      }}
                      className={cn(
                        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 xl:px-3.5 py-2 text-[13px] font-semibold transition-colors cursor-pointer",
                        dropdownOpen
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-600",
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                          dropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400",
                        )}
                      />
                    </button>

                    {/* Desktop Dropdown Panel */}
                    {dropdownOpen && (
                      <div
                        className="absolute left-1/2 top-full z-50 mt-1.5 w-[310px] -translate-x-1/2 rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150"
                      >
                        <div className="space-y-1">
                          {link.children.map((child, idx) => {
                            const IconComponent =
                              idx === 0 ? Network : idx === 1 ? Users : Settings2;
                            return (
                              <a
                                key={child.href}
                                href={child.href}
                                onClick={() => setDropdownOpen(false)}
                                className="group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-150 hover:bg-blue-50/80"
                              >
                                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                                  <IconComponent className="size-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                      {child.label}
                                    </span>
                                    {child.badge && (
                                      <span className="rounded-full bg-blue-100/70 px-2 py-0.5 text-[9px] font-bold text-blue-700 shrink-0">
                                        {child.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="mt-0.5 text-[11px] leading-tight text-slate-500 line-clamp-1">
                                    {child.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.href} className="shrink-0">
                  <a
                    href={link.href}
                    className="inline-block whitespace-nowrap rounded-lg px-2.5 xl:px-3.5 py-2 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={`tel:${PRIMARY_TEL}`}
            className="hidden xl:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-800 transition-colors hover:border-blue-300 hover:text-blue-600 whitespace-nowrap"
          >
            <Phone className="size-3.5 text-blue-600" />
            <span>{PRIMARY_PHONE}</span>
          </a>

          <a
            href="#contact"
            className="btn-shimmer hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/35"
          >
            Talk to an Expert
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xs lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-white px-6 pt-5 backdrop-blur-2xl lg:hidden">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <img src="/logo.png" alt="SUYOG" className="h-10 w-auto" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-800"
            >
              <X className="size-5" />
            </button>
          </div>
          <ul className="mt-6 flex flex-col gap-2 overflow-y-auto max-h-[60vh] pr-1">
            {NAV_LINKS.map((link) => {
              if (link.children && link.children.length > 0) {
                return (
                  <li key={link.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileDropdownOpen((v) => !v)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold text-slate-800 transition-colors hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 text-slate-400 transition-transform duration-200",
                          mobileDropdownOpen && "rotate-180 text-blue-600",
                        )}
                      />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="mt-1 ml-4 space-y-1.5 border-l-2 border-blue-200 pl-3 pb-2">
                        {link.children.map((child, idx) => {
                          const IconComponent =
                            idx === 0 ? Network : idx === 1 ? Users : Settings2;
                          return (
                            <a
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setOpen(false);
                              }}
                              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              <IconComponent className="size-4 text-blue-600 shrink-0" />
                              <span>{child.label}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold text-slate-800 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="size-4 text-slate-400" />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto mb-8 space-y-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-shimmer block w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30"
            >
              Talk to an Expert
            </a>
            <a
              href={`tel:${PRIMARY_TEL}`}
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white py-3.5 text-sm font-bold text-slate-800"
            >
              <Phone className="size-4 text-blue-600" /> {PRIMARY_PHONE}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-slate-200 bg-white px-4 py-3 sm:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
      <a
        href={`tel:${PRIMARY_TEL}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-xs"
      >
        <Phone className="size-4 text-blue-600" /> Call Now
      </a>
      <a
        href="#contact"
        className="btn-shimmer flex-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-sm font-bold text-white shadow-md shadow-blue-500/25"
      >
        Talk to Expert
      </a>
    </div>
  );
}
