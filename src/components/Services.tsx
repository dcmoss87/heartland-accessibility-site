import { AnchorLink } from "./AchhorLink";

const auditIncludes = [
  "Full site scan — every page",
  "Manual keyboard navigation test",
  "VoiceOver and screen reader test",
  "Clinical impact section for each finding",
  "Prioritized remediation recommendations",
  "Developer-ready fix instructions",
] as const;

const addOns = [
  "PDF remediation — $250–600/document",
  "Accessibility statement drafting — from $300",
  "Developer training — from $1,000",
  "ADA complaint response support — from $750",
  "Pre-launch website audit — from $1,500",
  "Hourly consulting — $125–175/hr",
] as const;

const tiers = [
  {
    name: "Basic",
    price: "$250–350",
    desc: "Automated monthly monitoring + plain language summary",
  },
  {
    name: "Standard",
    price: "$475–625",
    desc: "Monthly monitoring + manual testing + detailed report",
  },
  {
    name: "Full",
    price: "$800–1,100",
    desc: "Full monthly audit + unlimited support + ADA complaint help",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="bg-surface py-12 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <p className="mb-3 max-w-none font-mono text-xs font-medium tracking-[0.12em] text-sage uppercase">
          Services
        </p>
        <h2
          id="services-heading"
          className="mb-6 text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-text"
        >
          Built for how healthcare clinics actually work
        </h2>
        <p className="mb-12 max-w-[60ch] text-lg text-subtle">
          Every service includes clinical context — not just technical findings.
          You&apos;ll know exactly who is affected and why it matters for your
          patients.
        </p>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          <article
            className="flex flex-col gap-4 rounded-lg border border-border bg-bg p-8"
            aria-labelledby="audit-heading"
          >
            <div className="font-mono text-xs font-medium tracking-[0.1em] text-sage uppercase">
              One-Time
            </div>
            <h3 id="audit-heading" className="mb-0 text-lg font-semibold text-text">
              Accessibility Audit
            </h3>
            <p className="m-0 text-subtle">
              A thorough evaluation of your clinic website against WCAG 2.1 AA
              standards using automated scanning, manual screen reader testing, and
              keyboard navigation testing.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-4" aria-label="Audit includes">
              {auditIncludes.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-sm text-subtle before:absolute before:top-[0.5em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-sage"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="m-0 text-base text-text">
              Starting at <strong>$1,000</strong>
            </p>
            <AnchorLink
              href="/#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] border-2 border-sky bg-transparent px-6 py-3 text-sm font-semibold text-sky no-underline transition-colors hover:bg-sky hover:text-white"
            >
              Request an Audit
            </AnchorLink>
          </article>

          <article
            className="flex flex-col gap-4 rounded-lg border border-primary bg-primary p-8"
            aria-labelledby="retainer-heading"
          >
            <div className="font-mono text-xs font-medium tracking-[0.1em] text-white uppercase">
              Most Popular
            </div>
            <h3
              id="retainer-heading"
              className="mb-0 text-lg font-semibold text-white"
            >
              Monthly Retainer
            </h3>
            <p className="m-0 text-white">
              Ongoing monitoring and support so you never have to think about
              accessibility again. Three tiers designed for different clinic sizes
              and needs.
            </p>
            <div className="flex flex-col gap-3">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-[6px] border border-white/25 bg-white/10 p-4"
                >
                  <span className="mb-1 block text-xs font-semibold tracking-[0.08em] text-white uppercase">
                    {tier.name}
                  </span>
                  <span className="mb-1 block font-mono text-xl font-medium text-white">
                    {tier.price}
                    <span className="text-sm font-normal">/mo</span>
                  </span>
                  <span className="block text-xs leading-snug text-white">
                    {tier.desc}
                  </span>
                </div>
              ))}
            </div>
            <AnchorLink
              href="/#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] border-2 border-surface bg-surface px-6 py-3 text-sm font-semibold text-primary no-underline transition-colors hover:bg-bg hover:text-primary"
            >
              Find Your Tier
            </AnchorLink>
          </article>

          <article
            className="flex flex-col gap-4 rounded-lg border border-border bg-bg p-8"
            aria-labelledby="addons-heading"
          >
            <div className="font-mono text-xs font-medium tracking-[0.1em] text-sage uppercase">
              Add-Ons
            </div>
            <h3 id="addons-heading" className="mb-0 text-lg font-semibold text-text">
              Additional Services
            </h3>
            <p className="m-0 text-subtle">
              Targeted services available as standalone projects or add-ons to any
              retainer.
            </p>
            <ul
              className="flex list-none flex-col gap-2 pl-4"
              aria-label="Additional services"
            >
              {addOns.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-sm text-subtle before:absolute before:top-[0.5em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-sage"
                >
                  {item}
                </li>
              ))}
            </ul>
            <AnchorLink
              href="/#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] border-2 border-sky bg-transparent px-6 py-3 text-sm font-semibold text-sky no-underline transition-colors hover:bg-sky hover:text-white"
            >
              Ask About Add-Ons
            </AnchorLink>
          </article>
        </div>
      </div>
    </section>
  );
}
