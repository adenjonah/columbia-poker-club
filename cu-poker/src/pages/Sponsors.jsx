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
          'Citadel Securities is a leading market maker that provides liquidity to investors around the world. We help improve market quality and reduce trading costs for millions of people.',
      },
      {
        name: 'Hudson River Trading',
        logo: '/HRT_Logo.png',
        link: 'https://www.hudsonrivertrading.com/',
        description:
          'HRT is a quantitative trading firm focused on bringing a scientific approach to trading financial products. We use algorithms, cutting-edge technology, and rigorous research.',
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
          'Jane Street is a quantitative trading firm and liquidity provider with a unique focus on technology and collaborative problem solving. We trade a wide range of financial instruments.',
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
          'SIG is a global quantitative trading firm founded with an entrepreneurial mindset and a rigorous analytical approach. We leverage technology and research to provide liquidity across multiple asset classes.',
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
      className="group relative block rounded-2xl overflow-hidden border-gradient p-6 md:p-8 hover:-translate-y-1 transition-all duration-500 ease-out-expo hover:shadow-card-lg"
    >
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${tone} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
      />
      <div className="relative flex flex-col h-full">
        <div className="h-24 md:h-32 flex items-center justify-center mb-4">
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className={`max-h-full max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105 ${
              sponsor.name === 'Citadel Securities' ? 'scale-110' : ''
            }`}
          />
        </div>
        <p className="text-sm text-text-dark/80 leading-relaxed text-center">
          {sponsor.description}
        </p>
      </div>
    </a>
  );
}

function Sponsors() {
  return (
    <div className="w-full min-h-screen bg-primary-light">
      <section className="relative w-full pt-24 sm:pt-28 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-soft opacity-40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-dark text-center mb-12 md:mb-16">
            Our Sponsors
          </h1>

          <div className="space-y-12">
            {SPONSOR_TIERS.map((tier) => (
              <div key={tier.tier}>
                <div className="text-center mb-6">
                  <span
                    className={`inline-flex items-center px-6 py-2 rounded-full text-sm md:text-lg font-bold tracking-wider uppercase text-white bg-gradient-to-r ${tier.tone} ring-2 ${tier.ring} shadow-card`}
                  >
                    {tier.tier}
                  </span>
                </div>

                <div
                  className={`grid gap-5 ${
                    tier.sponsors.length > 1
                      ? 'grid-cols-1 md:grid-cols-2 max-w-4xl'
                      : 'grid-cols-1 max-w-xl'
                  } mx-auto`}
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
