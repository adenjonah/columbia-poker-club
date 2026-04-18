import { Link, useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

const IMAGES = [
  { src: '/S24_MTT.png', alt: 'Spring 2024 Multi-Table Tournament' },
  { src: '/Poker_Meeting_1.webp', alt: 'Poker Club Meeting' },
  { src: '/Poker_Meeting_2.webp', alt: 'Poker Tournament Action' },
];

const EVENTS = [
  {
    title: 'Weekly Meetings',
    details: [
      'Every Thursday, 8:00 - 9:00 PM',
      'Uris Hall, 3rd Floor',
      'Join us for freeplay poker, educational workshops, and more!',
    ],
  },
  {
    title: 'Lecture Series',
    details: [
      'Every Other Sunday, 6:00 - 8:00 PM',
      'Uris Hall',
      'Educational poker strategy sessions and discussions.',
    ],
  },
  {
    title: 'Spring 2026 Tournament',
    details: [
      'Sunday, February 22nd — Tournament Complete!',
      (
        <>
          Over $5,000 in prizes were awarded at Roone Auditorium, Lerner Hall. Thanks to all participants and our{' '}
          <Link
            to="/sponsors"
            onClick={(e) => e.stopPropagation()}
            className="text-accent-dark hover:underline font-bold"
          >
            sponsors
          </Link>
          !
        </>
      ),
    ],
    link: '/spring-mtt',
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
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-900/45 to-ink-950/80" />
        <div className="absolute inset-0 bg-mesh-hero opacity-60 mix-blend-screen" />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32">
          <div className="flex flex-col items-center text-center animate-fade-up-slow">
            <div className="relative mb-6">
              <span className="absolute inset-0 rounded-full bg-accent/40 blur-2xl animate-pulse-ring" />
              <img
                src="/CU_Poker_Logo.png"
                alt="Columbia Poker Club Logo"
                className="relative h-[120px] w-[120px] md:h-[170px] md:w-[170px] rounded-full ring-2 ring-white/30 shadow-glow"
              />
            </div>
            <h1 className="text-[50px] md:text-[90px] font-bold leading-[0.95] text-white">
              Columbia Poker Club
            </h1>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative w-full py-16 md:py-24 bg-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-mesh-soft opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-text-dark mb-4">
                Mission
              </h2>
              <p className="text-lg md:text-2xl text-text-dark/90 leading-relaxed">
                Columbia Poker Club brings together poker players for games,
                workshops, and competitions. Whether you&apos;re a beginner or a
                seasoned pro, you&apos;ll find a welcoming community here.
              </p>
            </div>
            <div>
              <ImageCarousel images={IMAGES} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full py-16 md:py-24 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-faint bg-grid-sm opacity-[0.07]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Are you a Columbia student?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Join our community and stay updated with our latest events!
          </p>
          <a
            href="https://discord.gg/4yzGm64uQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Join our Discord!
          </a>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative w-full py-16 md:py-24 bg-primary overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-text-dark mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl md:text-3xl text-text-dark/90 mb-10">
            Join our upcoming poker tournaments and club meetups!
          </p>

          <div className="grid md:grid-cols-3 gap-5 text-left">
            {EVENTS.map((event, idx) => (
              <article
                key={idx}
                onClick={event.link ? () => navigate(event.link) : undefined}
                className={`border-gradient p-6 md:p-8 ${
                  event.link
                    ? 'cursor-pointer hover:-translate-y-1 hover:shadow-card-lg transition-all duration-500 ease-out-expo'
                    : ''
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-text-dark">
                    {event.title}
                  </h3>
                  {event.link && (
                    <svg className="w-5 h-5 text-primary/70 shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17l9.2-9.2M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                {event.details.map((detail, dIdx) => (
                  <p
                    key={dIdx}
                    className={`text-text-dark/90 text-base md:text-lg ${dIdx > 0 ? 'mt-2' : ''}`}
                  >
                    {detail}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden border-gradient p-2 max-w-3xl mx-auto">
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
