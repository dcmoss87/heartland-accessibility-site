import Link from "next/link";
import { Wordmark } from "./Wordmark";

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/accessibility-statement", label: "Accessibility Statement" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text px-0 py-12 text-white/80" role="contentinfo">
      <div className="container flex flex-col items-center gap-6 text-center">
        <Wordmark inverse withLlc className="items-center" />
        <p className="m-0 max-w-none text-sm text-white/80">
          Healthcare accessibility consulting — Oklahoma and nationwide
        </p>
        <nav aria-label="Footer navigation">
          <ul
            className="flex list-none flex-wrap justify-center gap-4 md:gap-6"
            role="list"
          >
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 no-underline transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="m-0 max-w-none text-xs text-white/70">
          &copy; {year} Heartland Accessibility LLC. This website is designed to
          conform to WCAG 2.1 Level AA standards. Consulting services do not
          constitute legal advice.
        </p>
      </div>
    </footer>
  );
}
