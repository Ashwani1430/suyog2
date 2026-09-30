import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { CONTACT, NAV_LINKS, PRIMARY_PHONE, PRIMARY_TEL } from "@/data/suyog";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong border-b" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-sm font-bold text-primary-foreground">
            S
          </span>
          <span className="text-lg font-semibold tracking-tight">
            SUYOG
            <span className="ml-2 hidden text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              since {CONTACT.since}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:glow-shadow sm:inline-flex"
          >
            Talk to an Expert
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border bg-secondary/50 xl:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl xl:hidden">
          <div className="flex h-16 items-center justify-between px-5 lg:h-20">
            <span className="text-lg font-semibold">SUYOG</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-xl border bg-secondary/50"
            >
              <X className="size-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-5 pt-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-4 text-lg font-medium transition-colors hover:bg-secondary/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3 px-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-[image:var(--gradient-accent)] px-6 py-4 text-center font-semibold text-primary-foreground"
            >
              Talk to an Expert
            </a>
            <a
              href={`tel:${PRIMARY_TEL}`}
              className="flex items-center justify-center gap-2 rounded-full border px-6 py-4 font-semibold"
            >
              <Phone className="size-4" /> {PRIMARY_PHONE}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t glass-strong px-4 py-3 sm:hidden">
      <a
        href={`tel:${PRIMARY_TEL}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold"
      >
        <Phone className="size-4" /> Call
      </a>
      <a
        href="#contact"
        className="flex-1 rounded-full bg-[image:var(--gradient-accent)] px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
      >
        Talk to an Expert
      </a>
    </div>
  );
}
