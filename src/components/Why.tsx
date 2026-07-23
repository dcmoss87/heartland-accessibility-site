const reasons = [
  {
    title: "Clinical context in every report",
    body: "Any tool can flag a missing alt text. Only someone who has worked clinically with visually impaired patients can explain that a stroke survivor trying to book an appointment at your OT clinic is the exact person blocked by it. Every finding includes clinical context written from real experience.",
  },
  {
    title: "Manual testing catches what automated tools miss",
    body: "Automated scanners catch roughly 30–40% of real accessibility issues. The rest require a human navigating with a screen reader, testing keyboard flows, and making judgment calls about real patient impact. Every audit includes full manual testing.",
  },
  {
    title: "Developer-ready fix instructions",
    body: "Reports include exact code-level remediation guidance — specific elements, specific fixes, specific hex color values for contrast corrections. Your web person can act on the findings without needing a translator.",
  },
  {
    title: "Platform-aware recommendations",
    body: "Whether your site is built on WordPress, Wix, Squarespace, or a custom stack, findings are categorized by what you can fix today versus what requires platform migration. No recommendations that aren't actionable.",
  },
  {
    title: "Ongoing monitoring — not a one-time snapshot",
    body: "Websites change. New pages, new forms, new staff bios — each one can introduce new accessibility issues. Retainer clients receive automated monthly monitoring so compliance doesn't erode as your site grows.",
  },
  {
    title: "ADA legal context included",
    body: "Every report explains the legal relevance of findings under ADA Title III — the standard that applies to your clinic. Documentation of ongoing accessibility work demonstrates good faith effort, which matters significantly if a complaint is ever filed.",
  },
] as const;

export function Why() {
  return (
    <section id="why" className="py-12 md:py-20" aria-labelledby="why-heading">
      <div className="container">
        <p className="mb-3 max-w-none font-mono text-xs font-medium tracking-[0.12em] text-sage uppercase">
          Why Heartland
        </p>
        <h2
          id="why-heading"
          className="mb-6 text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-text"
        >
          What makes this different
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="border-t-2 border-primary pt-5">
              <h3 className="mb-3 text-lg font-semibold text-text">{reason.title}</h3>
              <p className="m-0 text-sm text-subtle">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
