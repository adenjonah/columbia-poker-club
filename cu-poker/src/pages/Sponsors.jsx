const SPONSOR_TIERS = [
  {
    tier: 'Gold',
    tone: 'from-amber-300 via-yellow-400 to-amber-500',
    ring: 'ring-amber-400/40',
    sponsors: [
      {
        name: 'Citadel Securities',
        logo: '/CitSec_Logo.png',
        link: 'https://www.citadelsecurities.com/',
        description:
          'A leading market maker providing liquidity to investors worldwide, improving market quality and reducing trading costs.',
      },
      {
        name: 'Hudson River Trading',
        logo: '/HRT_Logo.png',
        link: 'https://www.hudsonrivertrading.com/',
        description:
          'A quantitative trading firm bringing a scientific approach to trading — algorithms, cutting-edge technology, rigorous research.',
      },
    ],
  },
  {
    tier: 'Silver',
    tone: 'from-slate-200 via-slate-300 to-slate-500',
    ring: 'ring-slate-300/40',
    sponsors: [
      {
        name: 'Jane Street',
        logo: '/JS_Logo.png',
        link: 'https://www.janestreet.com/',
        description:
          'A quantitative trading firm and liquidity provider focused on technology and collaborative problem solving.',
      },
    ],
  },
  {
    tier: 'Bronze',
    tone: 'from-orange-300 via-amber-500 to-orange-600',
    ring: 'ring-orange-400/40',
    sponsors: [
      {
        name: 'SIG',
        logo: '/SIG_Logo.png',
        link: 'https://www.sig.com/',
        description:
          'A global quantitative trading firm with an entrepreneurial mindset and rigorous analytical approach.',
      },
    ],
  },
];

function SponsorCard({ sponsor, tone, ring }) {
  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden border-gradient p-6 md:p-8 hover:-translate-y-1 transition-all duration-500 ease-out-expo hover:shadow-card-lg"
    >
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${tone} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
      />
      <div className="relative flex flex-col h-full">
        <div className="h-28 md:h-32 flex items-center justify-center mb-4">
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className={`max-h-full max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105 ${
              sponsor.name === 'Citadel Securities' ? 'scale-110' : ''
            }`}
          />
        </div>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-text-dark/60 text-xs font-semibold uppercase tracking-wider">
            <span>Visit site</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l9.2-9.2M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="mt-3 text-sm text-text-dark/80 leading-relaxed">
            {sponsor.description}
          </p>
        </div>
      </div>
    </a>
  );
}

function Sponsors() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-primary-dark">
        <div className="absolute inset-0 bg-mesh-hero opacity-60" />
        <div className="absolute inset-0 bg-grid-faint bg-grid-sm opacity-[0.06]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="chip-dark mb-5">Partners</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-balance text-white">
            Our <span className="gradient-text">sponsors</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Firms who back Columbia's poker community — through prize pools, strategy
            talks, and recruiting events.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-primary-dark to-background-light overflow-hidden">
        <div className="absolute inset-0 bg-mesh-soft opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6 space-y-14">
          {SPONSOR_TIERS.map((tier) => (
            <div key={tier.tier}>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r ${tier.tone} ring-2 ${tier.ring} shadow-card`}
                >
                  {tier.tier}
                </span>
                <div className="flex-1 section-divider" />
              </div>

              <div
                className={`grid gap-5 ${
                  tier.sponsors.length > 1
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 max-w-xl mx-auto'
                }`}
              >
                {tier.sponsors.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.name}
                    sponsor={sponsor}
                    tone={tier.tone}
                    ring={tier.ring}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 max-w-2xl mx-auto">
            <div className="relative rounded-3xl p-8 md:p-10 overflow-hidden bg-ink-950 text-white text-center">
              <div className="absolute inset-0 bg-mesh-hero opacity-40" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                  Interested in sponsoring?
                </h3>
                <p className="mt-3 text-white/70">
                  Connect with Columbia's quantitative and strategic minds over the
                  felt. Email us to discuss partnership tiers.
                </p>
                <a
                  href="mailto:pokerclub@columbia.edu"
                  className="btn-primary mt-6"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
