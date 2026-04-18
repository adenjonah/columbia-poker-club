import { Link, useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

const HERO_IMAGES = [
  { src: '/S24_MTT.png', alt: 'Spring 2024 Multi-Table Tournament' },
  { src: '/Poker_Meeting_1.webp', alt: 'Poker Club Meeting' },
  { src: '/Poker_Meeting_2.webp', alt: 'Poker Tournament Action' },
];

const STATS = [
  { value: '$5K+', label: 'Prize pool awarded' },
  { value: '100+', label: 'Active members' },
  { value: 'Weekly', label: 'Games & lectures' },
  { value: '2021', label: 'Founded' },
];

const FEATURES = [
  {
    title: 'Weekly Free Play',
    desc: 'Cash games every Thursday at Uris Hall — open to all skill levels.',
    icon: (
      <path d="M12 2l2.09 6.26H20l-5.18 3.76L16.18 18 12 14.27 7.82 18l1.36-5.98L4 8.26h5.91L12 2z" />
    ),
  },
  {
    title: 'Lecture Series',
    desc: 'Strategy deep-dives every other Sunday from ranges to ICM.',
    icon: (
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    ),
  },
  {
    title: 'Signature Tournaments',
    desc: 'Sponsor-backed freerolls with thousands in prizes each semester.',
    icon: (
      <path d="M7 4V2h10v2h4v4c0 2.21-1.79 4-4 4h-.5c-.45 1.72-1.86 3.05-3.5 3.42V18h3v2H8v-2h3v-2.58c-1.64-.37-3.05-1.7-3.5-3.42H7c-2.21 0-4-1.79-4-4V4h4zm0 2H5v2c0 1.1.9 2 2 2V6zm10 4c1.1 0 2-.9 2-2V6h-2v4z" />
    ),
  },
];

const EVENTS = [
  {
    tag: 'Weekly',
    title: 'Thursday Night Games',
    when: 'Thursdays · 8:00–9:00 PM',
    where: 'Uris Hall, 3rd Floor',
    desc: 'Freeplay poker, drills, and casual workshops for every level.',
  },
  {
    tag: 'Bi-weekly',
    title: 'Lecture Series',
    when: 'Sundays · 6:00–8:00 PM',
    where: 'Uris Hall',
    desc: 'Structured strategy sessions and discussion — preflop to postflop.',
  },
  {
    tag: 'Recap',
    title: 'Spring 2026 Tournament',
    when: 'Sunday, Feb 22 · Complete',
    where: 'Roone Auditorium, Lerner Hall',
    desc: (
      <>
        Over $5,000 in prizes awarded. Thank you to all participants and our{' '}
        <Link
          to="/sponsors"
          onClick={(e) => e.stopPropagation()}
          className="text-accent-dark font-semibold underline-offset-2 hover:underline"
        >
          sponsors
        </Link>
        .
      </>
    ),
    link: '/spring-mtt',
    featured: true,
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/Hero_Background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-900/55 to-ink-950/90" />
        <div className="absolute inset-0 bg-mesh-hero opacity-70 mix-blend-screen" />
        <div className="absolute inset-0 bg-grid-faint bg-grid-sm opacity-[0.06]" />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
          <div className="flex flex-col items-center text-center max-w-4xl animate-fade-up-slow">
            <div className="relative mb-6">
              <span className="absolute inset-0 rounded-full bg-accent/40 blur-2xl animate-pulse-ring" />
              <img
                src="/CU_Poker_Logo.png"
                alt="Columbia Poker Club"
                className="relative h-28 w-28 md:h-32 md:w-32 rounded-full ring-2 ring-white/30 shadow-glow"
              />
            </div>

            <span className="chip-dark mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Official Columbia University Club
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-balance leading-[0.95]">
              <span className="block gradient-text">Columbia</span>
              <span className="block text-white mt-1">Poker Club</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 text-pretty leading-relaxed">
              Sharp play, sharper minds. A home for poker players at Columbia — from your
              first hand to deep tournament runs.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://discord.gg/4yzGm64uQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join the Discord
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link to="/learn" className="btn-ghost">
                Start learning
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="glass-dark rounded-2xl px-4 py-5 text-center"
                >
                  <div className="text-2xl md:text-3xl font-extrabold gradient-text">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/65 mt-1 uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-float">
          <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-ink-950 to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-mesh-soft opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="chip-dark mb-5">Mission</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight text-balance">
                Built for players who <span className="gradient-text">think in ranges</span>.
              </h2>
              <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
                Columbia Poker Club brings together poker players for games, workshops,
                and competitions. Whether you're a beginner or a seasoned pro, you'll
                find a welcoming community here.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/about" className="btn-ghost">Our story</Link>
                <Link to="/learn" className="btn-ghost">Lectures</Link>
              </div>
            </div>

            <div className="relative">
              <ImageCarousel images={HERO_IMAGES} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative w-full py-24 bg-background-light overflow-hidden">
        <div className="absolute inset-0 bg-mesh-soft opacity-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chip mb-4">What we do</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-dark tracking-tight text-balance">
              Three ways to <span className="gradient-text-ink">level up</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group border-gradient p-8 hover:-translate-y-1 transition-transform duration-500 ease-out-expo"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white shadow-glow-sm mb-5">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{f.title}</h3>
                <p className="text-text-dark/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-faint bg-grid-sm opacity-[0.07]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight text-balance">
            Are you a <span className="gradient-text">Columbia student</span>?
          </h2>
          <p className="mt-5 text-lg md:text-xl text-white/70">
            Join the community. Get game nights, strategy sessions, and tournament
            invites straight to your inbox.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
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
        </div>
      </section>

      {/* Events */}
      <section className="relative w-full py-24 bg-gradient-to-b from-primary-light to-background-light overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chip mb-4">Calendar</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-dark tracking-tight text-balance">
              Upcoming <span className="gradient-text-ink">events</span>
            </h2>
            <p className="mt-4 text-text-dark/70 text-lg">
              Join our poker tournaments and club meetups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {EVENTS.map((event) => (
              <article
                key={event.title}
                onClick={event.link ? () => navigate(event.link) : undefined}
                className={`relative border-gradient p-7 flex flex-col ${
                  event.link
                    ? 'cursor-pointer hover:-translate-y-1 hover:shadow-card-lg transition-all duration-500 ease-out-expo'
                    : ''
                } ${event.featured ? 'md:col-span-1' : ''}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="chip">{event.tag}</span>
                  {event.link && (
                    <svg className="w-5 h-5 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17l9.2-9.2M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-2">{event.title}</h3>
                <div className="text-sm text-text-dark/60 font-medium mb-1">{event.when}</div>
                <div className="text-sm text-text-dark/60 mb-4">{event.where}</div>
                <p className="text-text-dark/80 leading-relaxed mt-auto">{event.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl overflow-hidden border-gradient p-2 max-w-3xl mx-auto">
            <iframe
              title="Columbia Poker Club Calendar"
              src="https://calendar.google.com/calendar/embed?src=c_e9a2bda6adc3d9f883f7acc86756d418132483828382004ab9e93dd530e92f39%40group.calendar.google.com&ctz=America%2FNew_York"
              className="block w-full rounded-2xl"
              style={{ border: 0, aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
