const SPONSOR_TIERS = [
  {
    tier: 'Gold',
    tone: 'from-yellow-400 to-amber-500',
    ring: 'ring-amber-400/40',
    sponsors: [
      {
        name: 'Citadel Securities',
        logo: '/CitSec_Logo.png',
        link: 'https://www.citadelsecurities.com/',
        description:
          'Leading global market maker providing liquidity to investors worldwide. Helps improve market quality and reduce trading costs.',
      },
      {
        name: 'Hudson River Trading',
        logo: '/HRT_Logo.png',
        link: 'https://www.hudsonrivertrading.com/',
        description:
          'Quantitative trading firm bringing a scientific approach to financial products with algorithms, technology, and rigorous research.',
      },
    ],
  },
  {
    tier: 'Silver',
    tone: 'from-gray-400 to-gray-500',
    ring: 'ring-gray-300/40',
    sponsors: [
      {
        name: 'Jane Street',
        logo: '/JS_Logo.png',
        link: 'https://www.janestreet.com/',
        description:
          'Quantitative trading firm and liquidity provider focused on technology and collaborative problem solving across financial instruments.',
      },
    ],
  },
  {
    tier: 'Bronze',
    tone: 'from-orange-400 to-amber-600',
    ring: 'ring-orange-400/40',
    sponsors: [
      {
        name: 'SIG',
        logo: '/SIG_Logo.png',
        link: 'https://www.sig.com/',
        description:
          'Global quantitative trading firm with an entrepreneurial mindset providing liquidity across multiple asset classes.',
      },
    ],
  },
];

function SponsorCard({ sponsor, tone }) {
  return (
    <a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden border-gradient p-4 md:p-5 hover:-translate-y-1 transition-all duration-500 ease-out-expo hover:shadow-card-lg h-full"
    >
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${tone} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
      />
      <div className="relative flex items-center gap-4 h-full">
        <div className="w-28 md:w-36 flex-shrink-0 flex items-center justify-center">
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className={`max-h-20 md:max-h-24 max-w-full object-contain transition-transform duration-500 group-hover:scale-105 ${
              sponsor.name === 'Citadel Securities' ? 'scale-110' : ''
            }`}
          />
        </div>
        <p className="text-xs md:text-sm text-text-dark/80 leading-snug">
          {sponsor.description}
        </p>
      </div>
    </a>
  );
}

function Sponsors() {
  return (
    <div className="w-full h-screen bg-primary-light overflow-hidden flex flex-col">
      <section className="relative flex-1 min-h-0 w-full pt-20 sm:pt-24 pb-4 md:pb-6 overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-mesh-soft opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl w-full mx-auto px-4 sm:px-6 flex flex-col flex-1 min-h-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark text-center mb-3 md:mb-4 flex-shrink-0">
            Our Sponsors
          </h1>

          <div className="flex flex-col gap-3 md:gap-4 flex-1 min-h-0">
            {SPONSOR_TIERS.map((tier) => (
              <div key={tier.tier} className="flex flex-col min-h-0 flex-1">
                <div className="text-center mb-2 flex-shrink-0">
                  <span
                    className={`inline-flex items-center px-4 py-1 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r ${tier.tone} ring-2 ${tier.ring} shadow-card`}
                  >
                    {tier.tier}
                  </span>
                </div>

                <div
                  className={`grid gap-3 md:gap-4 flex-1 min-h-0 ${
                    tier.sponsors.length > 1
                      ? 'grid-cols-1 md:grid-cols-2 max-w-5xl'
                      : 'grid-cols-1 max-w-2xl'
                  } mx-auto w-full`}
                >
                  {tier.sponsors.map((sponsor) => (
                    <SponsorCard key={sponsor.name} sponsor={sponsor} tone={tier.tone} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
