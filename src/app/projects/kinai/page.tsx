import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kinai — Nitin Bansal",
  description:
    "Kinai is a self-care companion app I built solo. A soft alternative to streak-based wellness apps.",
};

const features = [
  {
    src: "/projects/kinai/sc1.png",
    title: "A quiet daily check-in",
    body:
      "Three taps, no journaling required. A way to notice how you're doing without anyone asking why.",
  },
  {
    src: "/projects/kinai/sc2.png",
    title: "Tiny quests, no streaks",
    body:
      "A short list of doable things: a 5-minute walk, phone in another room, texting someone who gets you. Pick what fits the day, skip the rest. Nothing breaks if you do.",
  },
  {
    src: "/projects/kinai/sc3.png",
    title: "Reasons, not rules",
    body:
      "Each quest comes with a small note explaining why it might help, in Kin's voice rather than a clinician's. The intent is to make the act feel inviting, not assigned.",
  },
  {
    src: "/projects/kinai/sc4.png",
    title: "Walks that grow the bond",
    body:
      "Take Kin on a walk and your route, steps, distance, and time show up in your journal. Time spent moving deepens the bond, which is the only number the app cares about.",
  },
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
        <div className="space-y-4 text-lg leading-snug text-[color:var(--color-ink-muted)]">
          <p>
            I built Kinai because most wellness apps make me feel worse, not
            better. They run on streaks, scores, and guilt. Miss a day and
            you&rsquo;ve broken a 47-day streak, so why bother coming back.
            That&rsquo;s the opposite of what self-care should feel like.
          </p>
          <p>
            Kinai is a small companion who lives in your phone. The more you
            take care of yourself, the more your bond with them grows. There
            are no streaks to lose and no numbers to chase; if you skip a day
            nothing breaks, and Kin is just glad to see you when you come
            back.
          </p>
        </div>
      </header>

      <section className="mb-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-6">
          Demo
        </h2>
        <div className="mx-auto w-full max-w-[240px]">
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
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-8">
          Features
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
          {features.map((feature) => (
            <li key={feature.src} className="flex flex-col">
              <div className="mb-4">
                <Image
                  src={feature.src}
                  alt={feature.title}
                  width={585}
                  height={1266}
                  className="w-full h-auto rounded-[18px] border border-[color:var(--color-rule)]"
                />
              </div>
              <h3 className="display text-xl leading-tight mb-2">
                {feature.title}
              </h3>
              <p className="text-[color:var(--color-ink-muted)] leading-snug">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14">
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-6">
          The bond is the only number
        </h2>
        <p className="text-[color:var(--color-ink-muted)] leading-snug">
          Most wellness apps stack metrics on top of the user. Kinai keeps one:
          the bond level with Kin. Tap the bond pill and you can see exactly
          what&rsquo;s growing it; no mystery formula, no upsell. The rest of
          the app stays on your phone. Conversations and check-ins never leave
          the device.
        </p>
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
