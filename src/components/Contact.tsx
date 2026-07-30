import { CONTACT_EMAIL } from "@/constants";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-surface py-12 md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="container grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 max-w-none font-mono text-xs font-medium tracking-[0.12em] text-sage uppercase">
            Get Started
          </p>
          <h2
            id="contact-heading"
            className="mb-6 text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-text"
          >
            Start with a free audit
          </h2>
          <p className="mb-4 max-w-[65ch] text-subtle">
            I offer a complimentary accessibility audit to a limited number of
            Oklahoma healthcare clinics each month. No cost, no obligation — just a
            professional report you can act on.
          </p>
          <p className="mb-4 max-w-[65ch] text-subtle">
            Not in Oklahoma? I work with healthcare organizations nationwide. Reach
            out and let&apos;s talk about your site.
          </p>
          <div className="mt-8 border-t border-border pt-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-lg font-semibold text-primary underline-offset-[3px] hover:text-primary-hover"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
