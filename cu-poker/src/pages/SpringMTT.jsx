const STATS = [
  { label: 'Prize Pool', value: '$5,000+' },
  { label: 'Format', value: 'NLHE Freeze-out' },
  { label: 'Venue', value: 'Roone Auditorium' },
  { label: 'Date', value: 'Feb 22, 2026' },
];

const FORMAT = [
  'No-Limit Texas Hold\u2019em',
  'Equal starting stacks for all players',
  '20\u201330 minute blind levels',
  'No rebuys',
  'Top ~30\u201350 places won prizes',
];

function SpringMTT() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-primary-dark">
        <div className="absolute inset-0 bg-mesh-hero opacity-60" />
        <div className="absolute inset-0 bg-grid-faint bg-grid-sm opacity-[0.06]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="chip-dark mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Tournament Complete
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-balance text-white leading-[0.95]">
            <span className="block text-white/80 text-2xl md:text-3xl font-semibold tracking-wider uppercase mb-3">
              Columbia Poker Club
            </span>
            <span className="gradient-text">Spring 2026</span>
            <span className="block text-white mt-1">Tournament</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/70">
            Thank you to every player, volunteer, and sponsor. The felt is put away — for now.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-10 md:-mt-14 px-4 md:px-6 z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 text-center shadow-card">
              <div className="text-xs font-semibold uppercase tracking-wider text-text-dark/60">
                {s.label}
              </div>
              <div className="mt-2 text-lg md:text-2xl font-extrabold gradient-text-ink">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recap */}
      <section className="relative w-full py-20 md:py-24 bg-gradient-to-b from-primary-dark to-background-light overflow-hidden">
        <div className="absolute inset-0 bg-mesh-soft opacity-30" />
        <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 border-gradient p-7 md:p-10">
            <span className="chip mb-4">Recap</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-dark">
              How it played out
            </h2>
            <p className="mt-5 text-lg text-text-dark/80 leading-relaxed">
              Columbia Poker Club hosted its Spring 2026 Multi-Table Tournament on
              February 22nd at Roone Auditorium in Lerner Hall. Players competed in a
              No-Limit Texas Hold&apos;em freeze-out with equal starting stacks and
              20&ndash;30 minute blind levels.
            </p>
            <p className="mt-4 text-lg text-text-dark/80 leading-relaxed">
              Over <span className="font-bold text-text-dark">$5,000</span> in prizes
              were awarded to the top finishers. Thank you to all the players,
              volunteers, and sponsors who made this event possible.
            </p>
          </div>

          <div className="md:col-span-2 border-gradient p-7 md:p-8">
            <span className="chip mb-4">Format</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-dark">
              Structure
            </h2>
            <ul className="mt-5 space-y-3">
              {FORMAT.map((line) => (
                <li key={line} className="flex gap-3 text-text-dark/85">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-20 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero opacity-40" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white text-balance">
            Don&apos;t miss the <span className="gradient-text">next one</span>.
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Join the Discord to get first dibs on tournament seats and workshop RSVPs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://discord.gg/4yzGm64uQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join our Discord
            </a>
            <a
              href="https://instagram.com/columbiapoker"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Follow on Instagram
            </a>
          </div>

          <p className="mt-10 text-xs text-white/40 max-w-lg mx-auto">
            This event was for entertainment purposes only. No real money gambling was
            involved. Columbia Poker Club is a student organization at Columbia University.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SpringMTT;
