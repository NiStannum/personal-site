import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kinai — Nitin Bansal",
  description:
    "Kinai is an iOS companion app where a small pet responds to how you're doing. A solo project covering product, design, and Swift.",
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

      <header className="mb-14">
        <h1 className="display text-[2.4rem] sm:text-[3rem] leading-[1.05] tracking-[-0.02em] mb-3">
          Kinai
        </h1>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--color-ink-muted)] mb-6">
          Personal project · iOS · 2026
        </p>
        <p className="text-lg leading-snug text-[color:var(--color-ink-muted)]">
          Kinai is an iOS app I built on my own. The whole interface is a small
          companion who reacts to how you&rsquo;re doing. I wanted to see what
          a wellness app feels like when the interface is a character instead
          of a dashboard.
        </p>
      </header>

      <section className="mb-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-6">
          Demo
        </h2>
        <div className="mx-auto w-full max-w-[260px]">
          <video
            src="/projects/kinai/demo.mp4"
            controls
            playsInline
            muted
            loop
            autoPlay
            className="w-full rounded-[28px] border border-[color:var(--color-rule)] shadow-sm"
          />
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-6">
          Screens
        </h2>
        <div className="-mx-6 px-6 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {screenshots.map((shot) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={585}
                height={1266}
                className="h-[300px] w-auto rounded-[18px] border border-[color:var(--color-rule)] shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-6">
          Notes
        </h2>
        <ul className="space-y-3 text-[color:var(--color-ink-muted)] leading-snug">
          <li>
            Kin has twelve emotional states. An LLM picks one based on the
            conversation, and the sprite plus background mood update to match.
          </li>
          <li>
            I drew the hero sprite with Imagen 4, then used Gemini Flash with
            that hero as a reference so the character stays the same across
            different expressions.
          </li>
          <li>
            The home screen is just the chat. No dashboards, no numbers. Your
            wellness shows up as the weather around Kin.
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
