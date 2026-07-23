import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-bg py-16 md:py-20" aria-labelledby="hero-heading">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
        <div className="max-w-[600px]">
          <p className="mb-3 max-w-none font-mono text-xs font-medium tracking-[0.12em] text-sage uppercase">
            Healthcare Accessibility Consulting
          </p>
          <h1
            id="hero-heading"
            className="my-4 mb-6 font-display text-[clamp(1.875rem,5vw,3rem)] leading-[1.2] tracking-[-0.02em] font-normal text-text"
          >
            Your patients deserve a website they can actually use.
          </h1>
          <p className="mb-8 max-w-[55ch] text-lg text-subtle">
            I combine 5 years of clinical occupational therapy experience with 4
            years of frontend engineering to identify accessibility barriers that
            automated tools miss — and explain them in language your team can act
            on.
          </p>
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] border-2 border-primary bg-primary px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:border-primary-hover hover:bg-primary-hover hover:text-white"
            >
              Get a Free Audit
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[6px] border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary no-underline transition-colors hover:bg-primary hover:text-white"
            >
              See Services
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col rounded-lg border border-border bg-surface p-6 md:flex-row lg:flex-col"
          aria-label="Key accessibility facts"
        >
          <div className="px-0 py-5 md:flex-1 md:px-6 md:py-0 lg:px-0 lg:py-5 lg:pt-0">
            <span className="mb-2 block font-mono text-3xl font-medium tracking-[-0.02em] text-primary leading-none">
              <span className="sr-only">96 percent</span>
              <span aria-hidden="true">96%</span>
            </span>
            <span className="block max-w-[28ch] text-sm leading-snug text-subtle">
              of healthcare websites have accessibility failures
            </span>
          </div>
          <div
            className="h-0.5 w-full shrink-0 bg-primary/18 md:mx-0 md:my-4 md:h-auto md:w-0.5 lg:my-0 lg:h-0.5 lg:w-full"
            aria-hidden="true"
          />
          <div className="px-0 py-5 md:flex-1 md:px-6 md:py-0 lg:px-0 lg:py-5">
            <span className="mb-2 block font-mono text-3xl font-medium tracking-[-0.02em] text-primary leading-none">
              <span className="sr-only">4,600 plus</span>
              <span aria-hidden="true">4,600+</span>
            </span>
            <span className="block max-w-[28ch] text-sm leading-snug text-subtle">
              ADA digital accessibility lawsuits filed in 2023 alone
            </span>
          </div>
          <div
            className="h-0.5 w-full shrink-0 bg-primary/18 md:mx-0 md:my-4 md:h-auto md:w-0.5 lg:my-0 lg:h-0.5 lg:w-full"
            aria-hidden="true"
          />
          <div className="px-0 py-5 pb-0 md:flex-1 md:px-6 md:py-0 md:pr-0 lg:px-0 lg:py-5 lg:pb-0">
            <span className="mb-2 block font-mono text-3xl font-medium tracking-[-0.02em] text-primary leading-none">
              Title III
            </span>
            <span className="block max-w-[28ch] text-sm leading-snug text-subtle">
              ADA applies to your clinic&apos;s website right now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
