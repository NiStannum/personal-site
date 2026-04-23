import Link from "next/link";

const experience = [
  {
    company: "JEFIT",
    role: "Product Manager",
    location: "Santa Clara",
    dates: "2023 — now",
    note: "Solo PM on a fitness app used by over ten million lifters. Working across onboarding, subscriptions, and the core training surface.",
  },
  {
    company: "Quora",
    role: "Product Manager",
    location: "Mountain View",
    dates: "2021 — 2023",
    note: "Product manager on Quora+, the company's consumer subscription. Pricing, checkout, and creator earnings.",
  },
  {
    company: "HCL Technologies",
    role: "Lead Engineer",
    location: "Bangalore",
    dates: "2014 — 2019",
    note: "Flight management software for commercial aircraft. Led a small team on testing and airworthiness.",
  },
];

const shipped = [
  {
    title: "Adaptive Plan",
    org: "JEFIT",
    blurb:
      "An AI coach that replans your training each week based on strength and recovery.",
    href: "https://www.jefit.com/ai-workout-tracker/adaptive-plan",
  },
  {
    title: "Year in Review",
    org: "JEFIT",
    blurb: "An annual training recap matched to a character lifters can share.",
    href: "https://www.jefit.com/wp/jefit-news-product-updates/jefit-year-in-review-2025-a-look-back-at-your-strength-journey/",
  },
  {
    title: "Digital-wallet checkout",
    org: "Quora+",
    blurb: "Apple Pay, Google Pay, and PayPal at Quora+ checkout.",
    href: "https://productupdates.quora.com/Paypal-is-now-available-as-a-payment-option-for-subscriptions",
  },
  {
    title: "Creator earnings dashboard",
    org: "Quora+",
    blurb: "A view of where a creator's subscription revenue actually came from.",
    href: "https://productupdates.quora.com/Earnings-stats-and-controls-added-to-Your-content-and-stats",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[38rem] px-6 pt-24 pb-24 sm:pt-32 sm:pb-32">
      <section className="mb-20 sm:mb-24">
        <h1 className="display text-[2.6rem] sm:text-[3.25rem] leading-[1.04] tracking-[-0.02em]">
          Product manager at JEFIT, a fitness app used by over ten million
          lifters. Before that, Quora.
        </h1>
      </section>

      <Section label="Experience">
        <ul className="divide-y divide-[color:var(--color-rule)] -mt-5">
          {experience.map((job) => (
            <li key={job.company} className="py-5">
              <div className="flex items-baseline justify-between gap-6 mb-1">
                <h3 className="display text-2xl">{job.company}</h3>
                <span className="font-mono text-xs text-[color:var(--color-ink-subtle)] shrink-0">
                  {job.dates}
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--color-ink-muted)] mb-2">
                {job.role} · {job.location}
              </p>
              <p className="text-[color:var(--color-ink-muted)] leading-snug">
                {job.note}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Things I've shipped">
        <ul className="divide-y divide-[color:var(--color-rule)] -mt-5">
          {shipped.map((item) => (
            <li key={item.title} className="py-5">
              <div className="flex items-baseline justify-between gap-6 mb-1">
                <h3 className="display text-2xl">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-transparent hover:border-[color:var(--color-ink)] no-underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </h3>
                <span className="font-mono text-xs text-[color:var(--color-ink-subtle)] shrink-0">
                  {item.org}
                </span>
              </div>
              <p className="text-[color:var(--color-ink-muted)] leading-snug">
                {item.blurb}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Writing">
        <ul className="divide-y divide-[color:var(--color-rule)] -mt-5">
          <li className="py-5">
            <Link
              href="/writing/laffer-curve-in-product-strategy"
              className="group block no-underline"
            >
              <div className="flex items-baseline justify-between gap-6 mb-1">
                <h3 className="display text-2xl leading-tight">
                  <span className="border-b border-transparent group-hover:border-[color:var(--color-ink)] transition-colors">
                    The Laffer Curve in product strategy
                  </span>
                </h3>
                <span className="font-mono text-xs text-[color:var(--color-ink-subtle)] shrink-0">
                  2023
                </span>
              </div>
              <p className="text-[color:var(--color-ink-muted)] leading-snug">
                On the perils of maximizing revenue over user experience.
              </p>
            </Link>
          </li>
        </ul>
      </Section>

      <Section label="Education">
        <ul className="divide-y divide-[color:var(--color-rule)] -mt-5">
          <li className="py-5">
            <div className="flex items-baseline justify-between gap-6 mb-1">
              <h3 className="display text-2xl">UC Berkeley</h3>
              <span className="font-mono text-xs text-[color:var(--color-ink-subtle)] shrink-0">
                2021
              </span>
            </div>
            <p className="text-[color:var(--color-ink-muted)]">
              Master of Information Management &amp; Systems.
            </p>
          </li>
          <li className="py-5">
            <div className="flex items-baseline justify-between gap-6 mb-1">
              <h3 className="display text-2xl">CMR College</h3>
              <span className="font-mono text-xs text-[color:var(--color-ink-subtle)] shrink-0">
                2014
              </span>
            </div>
            <p className="text-[color:var(--color-ink-muted)]">
              Bachelor&rsquo;s, Electronics and Communication Engineering.
            </p>
          </li>
        </ul>
      </Section>

      <footer className="pt-10 border-t border-[color:var(--color-rule)]">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-4">
          Elsewhere
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href="mailto:nitinbansal090@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bansal-nitin/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20 sm:mb-24">
      <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-8">
        {label}
      </h2>
      {children}
    </section>
  );
}
