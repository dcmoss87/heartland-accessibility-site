import { CONTACT_EMAIL } from "@/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility statement for Heartland Accessibility — our commitment to WCAG 2.1 Level AA conformance.",
};

export default function AccessibilityStatementPage() {
  return (
    <main id="main" className="flex-1 bg-bg py-12 md:py-20">
      <article className="container max-w-3xl">
        <p className="mb-3 max-w-none font-mono text-xs font-medium tracking-[0.12em] text-sage uppercase">
          Legal
        </p>
        <h1 className="mb-6 font-display text-[clamp(1.875rem,5vw,3rem)] leading-[1.2] tracking-[-0.02em] font-normal text-text">
          Accessibility Statement
        </h1>
        <p className="mb-4 max-w-[65ch] text-subtle">
          Heartland Accessibility  is committed to ensuring digital
          accessibility for people with disabilities. We continually improve the
          user experience for everyone and apply relevant accessibility standards.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-[-0.02em] text-text">
          Conformance status
        </h2>
        <p className="mb-4 max-w-[65ch] text-subtle">
          The{" "}
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            className="font-medium text-sky underline underline-offset-[3px] hover:text-primary"
          >
            Web Content Accessibility Guidelines (WCAG)
          </a>{" "}
          define requirements for designers and developers to improve
          accessibility for people with disabilities. It defines three levels of
          conformance: Level A, Level AA, and Level AAA.
        </p>
        <p className="mb-4 max-w-[65ch] text-subtle">
          Heartland Accessibility  aims to conform to{" "}
          <strong className="text-text">WCAG 2.1 Level AA</strong>. This website
          has been designed and built with that standard as the baseline.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-[-0.02em] text-text">
          Measures to support accessibility
        </h2>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-subtle">
          <li>Semantic HTML structure and landmark regions</li>
          <li>Keyboard-operable navigation and interactive controls</li>
          <li>Visible focus indicators that meet contrast requirements</li>
          <li>Skip link to main content</li>
          <li>Form labels, error messaging, and live status announcements</li>
          <li>Respect for prefers-reduced-motion</li>
          <li>Sufficient color contrast for text and interactive elements</li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-[-0.02em] text-text">
          Compatibility
        </h2>
        <p className="mb-4 max-w-[65ch] text-subtle">
          This website is designed to be compatible with modern browsers and
          assistive technologies, including VoiceOver, NVDA, and JAWS when used with
          current versions of Safari, Chrome, Firefox, and Edge.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-[-0.02em] text-text">
          Feedback
        </h2>
        <p className="mb-4 max-w-[65ch] text-subtle">
          We welcome your feedback on the accessibility of this website. Please
          contact us if you encounter barriers:
        </p>
        <ul className="mb-4 list-none space-y-2 text-subtle">
          <li>
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-sky underline underline-offset-[3px] hover:text-primary"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            Contact form:{" "}
            <Link
              href="/#contact"
              className="font-medium text-sky underline underline-offset-[3px] hover:text-primary"
            >
              Get in touch
            </Link>
          </li>
        </ul>
        <p className="mb-4 max-w-[65ch] text-subtle">
          We aim to respond to accessibility feedback within two business days.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-[-0.02em] text-text">
          Date
        </h2>
        <p className="mb-0 max-w-[65ch] text-subtle">
          This statement was last updated on July 14, 2026.
        </p>
      </article>
    </main>
  );
}
