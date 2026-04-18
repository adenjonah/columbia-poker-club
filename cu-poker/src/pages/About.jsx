const MILESTONES = [
  {
    year: '2021',
    season: 'Fall',
    title: 'The Beginning',
    description:
      'Founded by Mateo Maturana and Noah Krever, starting with casual poker games in Schermerhorn and Hamilton.',
  },
  {
    year: '2021',
    season: 'Winter',
    title: 'First Tournament',
    description: 'Hosted our inaugural tournament in Fairchild.',
  },
  {
    year: '2022',
    season: 'Spring',
    title: 'Official ABC Recognition',
    description: 'Became a Columbia University recognized club.',
  },
  {
    year: '2023',
    season: 'Spring',
    title: 'First Sponsored Tournament',
    description: (
      <>
        Co-hosted an MTT with{' '}
        <a
          href="https://www.cc-seas.columbia.edu/student-group/cuinforms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-dark hover:underline font-semibold"
        >
          CUINFORMS
        </a>
        ,{' '}
        <a
          href="https://www.cc-seas.columbia.edu/node/442662"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-dark hover:underline font-semibold"
        >
          CDSS
        </a>
        , and{' '}
        <a
          href="https://www.columbiaquantgroup.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-dark hover:underline font-semibold"
        >
          CQG
        </a>
        , sponsored by{' '}
        <a
          href="https://www.sig.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-dark hover:underline font-semibold"
        >
          SIG
        </a>
        .
      </>
    ),
  },
  {
    year: '2025',
    season: 'Fall',
    title: 'Expanding Operations',
    description:
      'Weekly free play and lectures. Monthly competitions and events. Semesterly freeroll tournaments. Women in Poker Tournament. Career and educational events.',
  },
  {
    year: 'Now',
    season: 'Today',
    title: 'Routine Events',
    description:
      'Weekly games, monthly workshops, and annual sponsored tournaments for the Columbia community.',
  },
];

const TEAM = [
  { name: 'Jonah Aden', role: 'President', class: "CC '26", major: 'Computer Science & PoliSci–Stats', link: 'https://linkedin.com/in/jonah-aden' },
  { name: 'Zachary Klein', role: 'Vice President', class: "SEAS '27", major: 'Applied Math', link: 'https://www.linkedin.com/in/zachary-klein-794061292/' },
  { name: 'Juliana Shepard', role: 'Treasurer', class: "Barnard '27", major: 'Architecture', link: 'https://www.linkedin.com/in/juliana-shepard/' },
  { name: 'Dylan Silverman', role: 'Outreach Director', class: "CC '28", major: '—' },
  { name: 'Sydney Smith', role: 'Secretary', class: "GS TCD Dual BA '26", major: 'Classics & Political Science', link: 'https://www.linkedin.com/in/sydney-smith-992771316' },
  { name: 'Bohan Gao', role: 'Social Media Coordinator', class: "CC '28", major: 'Classics & Creative Writing', link: 'https://www.linkedin.com/in/bohangao0623/' },
  { name: 'Manni Lin', role: 'Operations Coordinator', class: "BC '28", major: 'Mathematics & Statistics' },
  { name: 'Olivia Huang', role: 'Operations Coordinator', class: "SEAS '28", major: 'ORFE', link: 'https://www.linkedin.com/in/olivia-huang-a13690244/' },
  { name: 'Bill Fei', role: 'Operations Coordinator', class: "SEAS '28", major: 'Computer Science' },
  { name: 'David Eyal', role: 'Senior Advisor', class: "CC '26", major: 'Computer Science & Statistics', link: 'https://www.linkedin.com/in/david-eyal-9a19a624b/' },
];

const ALUMNI = [
  { name: 'Noah Krever', class: "CC '22" },
  { name: 'Mateo Maturana', class: "CC '23" },
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-primary-dark">
        <div className="absolute inset-0 bg-mesh-hero opacity-60" />
        <div className="absolute inset-0 bg-grid-faint bg-grid-sm opacity-[0.06]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="chip-dark mb-5">Since 2021</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-balance text-white">
            The story of <span className="gradient-text">CU Poker</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            From late-night dorm games to sponsor-backed tournaments — a look at how
            we got here and who runs the room today.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative w-full py-20 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-mesh-soft opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="chip-dark">Timeline</span>
            <div className="flex-1 section-divider" />
          </div>

          <ol className="relative border-l-2 border-white/15 ml-3 md:ml-6 space-y-8">
            {MILESTONES.map((m, i) => (
              <li key={i} className="relative pl-6 md:pl-10 group">
                <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-primary ring-4 ring-ink-950/70 shadow-glow-sm" />
                <div className="border-gradient p-5 md:p-6 group-hover:-translate-y-0.5 transition-transform duration-500 ease-out-expo">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="chip">{m.year} · {m.season}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-1">{m.title}</h3>
                  <p className="text-text-dark/80 leading-relaxed">{m.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="relative w-full py-24 bg-gradient-to-b from-primary-dark to-ink-950 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="chip-dark mb-4">Board</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight text-balance">
              Meet the <span className="gradient-text">team</span>
            </h2>
            <p className="mt-4 text-white/65 text-lg">
              The students keeping the lights on, the blinds rising, and the strategy
              sessions packed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((m) => {
              const Wrapper = m.link ? 'a' : 'div';
              const wrapperProps = m.link
                ? { href: m.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={m.name}
                  {...wrapperProps}
                  className={`relative glass-dark rounded-2xl p-6 flex items-center gap-4 transition-all duration-500 ease-out-expo ${
                    m.link ? 'hover:-translate-y-1 hover:shadow-glow-sm cursor-pointer' : ''
                  }`}
                >
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary blur-md opacity-60" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center text-lg font-bold ring-2 ring-white/20">
                      {getInitials(m.name)}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white truncate">{m.name}</h3>
                      {m.link && (
                        <svg className="w-4 h-4 text-white/50 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17l9.2-9.2M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-accent-light truncate">{m.role}</div>
                    <div className="text-xs text-white/55 truncate">{m.class} · {m.major}</div>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          <div className="mt-16 max-w-xl mx-auto">
            <div className="border-gradient p-6 text-center">
              <span className="chip mb-3">Alumni Advisors</span>
              <ul className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-1 text-text-dark">
                {ALUMNI.map((a) => (
                  <li key={a.name} className="text-base">
                    <span className="font-semibold">{a.name}</span>
                    <span className="text-text-dark/60 ml-2">({a.class})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
