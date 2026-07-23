function IconActivity() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const credentials = [
  {
    title: "Licensed COTA",
    description:
      "5 years of clinical occupational therapy experience working directly with patients with disabilities",
    icon: IconActivity,
  },
  {
    title: "Frontend Engineer",
    description:
      "4 years of professional frontend engineering experience with a BS in Computer Science",
    icon: IconCode,
  },
  {
    title: "WCAG 2.1 AA",
    description:
      "All audits evaluated against the standard used by courts and the DOJ for ADA Title III compliance",
    icon: IconShield,
  },
  {
    title: "Ongoing Monitoring",
    description:
      "Automated monthly scanning keeps your site accessible as it grows and changes over time",
    icon: IconClock,
  },
] as const;

export function About() {
  return (
    <section id="about" className="py-12 md:py-20" aria-labelledby="about-heading">
      <div className="container grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 max-w-none font-mono text-xs font-medium tracking-[0.12em] text-sage uppercase">
            About
          </p>
          <h2
            id="about-heading"
            className="mb-6 text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-text"
          >
            Two skill sets. One rare combination.
          </h2>
          <p className="mb-4 max-w-[65ch] text-subtle">
            Most accessibility consultants come from one direction — either
            technical or clinical. I bring both.
          </p>
          <p className="mb-4 max-w-[65ch] text-subtle">
            As a licensed Certified Occupational Therapy Assistant with 5 years of
            hands-on experience, I&apos;ve worked directly with stroke survivors,
            patients with cognitive disabilities, and individuals learning to
            navigate daily life with physical limitations. I understand exactly who
            is blocked by an inaccessible healthcare website — because I&apos;ve
            worked with them.
          </p>
          <p className="mb-4 max-w-[65ch] text-subtle">
            As a frontend engineer with 4 years of professional experience and a BS
            in Computer Science, I can identify the issue in your code, explain it to
            your developer, and verify the fix — not just flag the problem and hand
            you a rulebook.
          </p>
          <p className="mb-0 max-w-[65ch] text-subtle">
            Heartland Accessibility is based in Oklahoma and serves healthcare
            clinics and organizations nationwide.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          aria-label="Credentials and qualifications"
        >
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-bg p-5"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-[6px] bg-primary text-white"
                  aria-hidden="true"
                >
                  <Icon />
                </div>
                <h3 className="mb-2 text-base font-semibold text-text">
                  {item.title}
                </h3>
                <p className="m-0 text-sm text-subtle">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
