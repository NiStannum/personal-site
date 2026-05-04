import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kinai — Nitin Bansal",
  description:
    "Kinai is an iOS companion app where a small pet responds to how you're doing. Built solo across product, design, and Swift.",
};

const screenshots = [
  { src: "/projects/kinai/sc1.png", alt: "Kinai onboarding" },
  { src: "/projects/kinai/sc2.png", alt: "Kinai chatting with the user" },
  { src: "/projects/kinai/sc3.png", alt: "Kinai responding to user mood" },
  { src: "/projects/kinai/sc4.png", alt: "Kinai companion in a calm state" },
];

const APP_STORE_URL =
  "https://apps.apple.com/us/app/kinai-companion/id6759957133";

export default function KinaiProjectPage() {
  return (
    <main className="mx-auto max-w-[38rem] px-6 pt-14 pb-24 sm:pt-20 sm:pb-32">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-6">
        <Link href="/">← Nitin Bansal</Link>
      </p>

      <header className="mb-12">
        <h1 className="display text-[2.4rem] sm:text-[3rem] leading-[1.05] tracking-[-0.02em] mb-4">
          Kinai
        </h1>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--color-ink-muted)] mb-6">
          Personal project · iOS · 2026
        </p>
        <p className="text-lg leading-snug text-[color:var(--color-ink-muted)]">
          A small AI companion that lives on your phone and responds to how
          you&rsquo;re doing. I built Kinai solo — product, design, and Swift —
          to explore what an emotionally aware app looks like when the
          interface is a character, not a dashboard.
        </p>
      </header>

      <section className="mb-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-6">
          Demo
        </h2>
        <video
          src="/projects/kinai/demo.mp4"
          controls
          playsInline
          muted
          loop
          autoPlay
          className="w-full rounded-lg border border-[color:var(--color-rule)]"
        />
      </section>

      <section className="mb-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-6">
          Screens
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {screenshots.map((shot) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              width={585}
              height={1266}
              className="w-full rounded-lg border border-[color:var(--color-rule)]"
            />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-6">
          Notes
        </h2>
        <ul className="space-y-3 text-[color:var(--color-ink-muted)] leading-snug">
          <li>
            Kin&rsquo;s emotional state is driven by an LLM that classifies
            each conversation turn into one of twelve states, then renders the
            matching sprite and ambient mood.
          </li>
          <li>
            Sprites were generated with Imagen 4 for the hero pose and Gemini
            Flash for consistent variants — same character, different
            expressions.
          </li>
          <li>
            The home is the conversation. There are no dashboards or numbers —
            the user&rsquo;s wellness shows up as Kin&rsquo;s world.
          </li>
        </ul>
      </section>

      <footer className="pt-8 border-t border-[color:var(--color-rule)]">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block"
        >
          Download on the App Store →
        </a>
      </footer>
    </main>
  );
}
