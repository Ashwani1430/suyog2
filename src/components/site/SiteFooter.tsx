import { CONTACT, FOOTER_LINKS } from "@/data/suyog";

const SUPPORT_LINKS = [
  "Legal Notice",
  "Privacy Policy",
  "Terms & Conditions",
  "Sitemap",
  "Cookie Policy",
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-primary/15 bg-secondary/35 px-5 pt-16 pb-28 sm:px-8 sm:pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="SUYOG Logo" className="h-12 w-auto" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Kanpur-based IT and Tally solutions company serving businesses since {CONTACT.since} —
            TallyPrime implementation, customization, industry modules and long-term support.
          </p>
          <address className="mt-6 text-sm font-medium not-italic leading-relaxed text-foreground/80">
            {CONTACT.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-4 flex flex-col gap-1 text-sm font-semibold">
            {CONTACT.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Explore</h2>
          <ul className="mt-5 space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Support</h2>
          <ul className="mt-5 space-y-3">
            {SUPPORT_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#contact"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-7xl flex-col gap-3 border-t border-primary/10 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© SUYOG. All Rights Reserved.</p>
        <p>Designed and Developed By Dynamo Hike</p>
      </div>
    </footer>
  );
}
