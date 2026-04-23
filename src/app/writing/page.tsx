import Link from "next/link";

const essays = [
  {
    slug: "laffer-curve-in-product-strategy",
    title: "Analyzing the Laffer Curve's Relevance in Product Strategies",
    subtitle: "Perils of maximizing revenue over user experience",
    date: "September 14, 2023",
  },
];

export default function WritingIndex() {
  return (
    <main>
      <nav className="mb-16">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] no-underline hover:text-[color:var(--color-ink)]"
        >
          ← Nitin Bansal
        </Link>
      </nav>

      <h1 className="display text-4xl sm:text-5xl leading-[1.04] tracking-[-0.02em] mb-16">
        Writing
      </h1>

      <ul className="divide-y divide-[color:var(--color-rule)]">
        {essays.map((essay) => (
          <li key={essay.slug}>
            <Link
              href={`/writing/${essay.slug}`}
              className="group block py-6 no-underline"
            >
              <div className="flex items-baseline justify-between gap-6 mb-2">
                <h2 className="display text-[1.625rem] leading-tight">
                  <span className="border-b border-transparent group-hover:border-[color:var(--color-ink)] transition-colors">
                    {essay.title}
                  </span>
                </h2>
                <span className="font-mono text-xs text-[color:var(--color-ink-subtle)] shrink-0">
                  {essay.date}
                </span>
              </div>
              <p className="text-[color:var(--color-ink-muted)] leading-snug">
                {essay.subtitle}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
