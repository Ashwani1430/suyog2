import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import {
  BadgeCheck,
  Boxes,
  Building2,
  Car,
  Cloud,
  Factory,
  Gem,
  GraduationCap,
  History,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  RefreshCw,
  School,
  Server,
  Settings2,
  ShoppingBag,
  Snowflake,
  Stethoscope,
  Target,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck,
  Boxes,
  Building2,
  Car,
  Cloud,
  Factory,
  Gem,
  GraduationCap,
  History,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  RefreshCw,
  School,
  Server,
  Settings2,
  ShoppingBag,
  Snowflake,
  Stethoscope,
  Target,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? Boxes;
  return <Cmp className={className} aria-hidden="true" />;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const Cmp = motion[as];
  return (
    <Cmp
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Cmp>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(0);
  const spring = useSpring(value, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  align?: "center" | "left";
  id?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 id={id} className="mt-4 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-relaxed text-muted-foreground">{body}</p> : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 lg:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
