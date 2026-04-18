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
    description: 'Hosted our inaugural tournament in Fairchild',
  },
  {
    year: '2022',
    season: 'Spring',
    title: 'Official ABC Recognition',
    description: 'Became a Columbia University recognized club',
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
          className="text-primary-dark hover:underline font-bold"
        >
          CUINFORMS
        </a>
        {', '}
        <a
          href="https://www.cc-seas.columbia.edu/node/442662"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-dark hover:underline font-bold"
        >
          CDSS
        </a>
        {', and '}
        <a
          href="https://www.columbiaquantgroup.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-dark hover:underline font-bold"
        >
          CQG
        </a>
        {', sponsored by '}
        <a
          href="https://www.sig.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-dark hover:underline font-bold"
        >
          SIG
        </a>
      </>
    ),
  },
  {
    year: new Date().getFullYear().toString(),
    season: 'Now',
    title: 'Routine Events',
    description: 'We run weekly games, monthly workshops, and yearly tournaments',
  },
  {
    year: '2025',
    season: 'Fall',
    title: 'Expanding Operations',
    description:
      'Weekly free play and lectures. Monthly competitions and events. Semesterly Freeroll Tournaments. Women in Poker Tournament. Career and Educational events.',
  },
];

const TEAM = [
  { name: 'Jonah Aden', role: 'President', class: "CC '26", major: 'Computer Science and PoliSci - Stats', link: 'https://linkedin.com/in/jonah-aden' },
  { name: 'Zachary Klein', role: 'Vice President', class: "SEAS '27", major: 'Applied Math', link: 'https://www.linkedin.com/in/zachary-klein-794061292/' },
  { name: 'Juliana Shepard', role: 'Treasurer', class: "Barnard '27", major: 'Architecture', link: 'https://www.linkedin.com/in/juliana-shepard/' },
  { name: 'Dylan Silverman', role: 'Outreach Director', class: "CC '28", major: '???', link: '????' },
  { name: 'Sydney Smith', role: 'Secretary', class: "GS TCD Dual BA '26", major: 'Classical and Ancient Civilization with Political Science', link: 'https://www.linkedin.com/in/sydney-smith-992771316' },
  { name: 'Bohan Gao', role: 'Social Media Coordinator', class: "CC '28", major: 'Classics and Creative Writing', link: 'https://www.linkedin.com/in/bohangao0623/' },
  { name: 'Manni Lin', role: 'Operations Coordinator', class: "BC '28", major: 'Mathematics and Statistics', link: '????' },
  { name: 'Olivia Huang', role: 'Operations Coordinator', class: "SEAS '28", major: 'Operations Research: Financial Engineering', link: 'https://www.linkedin.com/in/olivia-huang-a13690244/' },
  { name: 'Bill Fei', role: 'Operations Coordinator', class: "SEAS '28", major: 'Computer Science', link: '????' },
  { name: 'David Eyal', role: 'Senior Advisor', class: "CC '26", major: 'Computer Science and Statistics', link: 'https://www.linkedin.com/in/david-eyal-9a19a624b/' },
];

function About() {
  return (
    <div className="w-full text-text-dark">
      {/* Club History */}
      <section className="relative w-full flex flex-col items-center justify-center bg-primary-light min-h-[100dvh] pt-24 pb-14 sm:pt-28 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-soft opacity-40 pointer-events-none" />

        <div className="relative max-w-4xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
            Club History
          </h1>

          <ol className="relative border-l-2 border-primary/20 ml-3 md:ml-4 space-y-5">
            {MILESTONES.map((m, i) => (
              <li key={i} className="relative pl-6 md:pl-8">
                <span className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-primary ring-4 ring-primary-light shadow-glow-sm" />
                <div className="border-gradient p-4 md:p-5 hover:-translate-y-0.5 transition-transform duration-500 ease-out-expo">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-0 shrink-0">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-accent-dark">{m.year}</div>
                      <div className="text-base sm:text-lg text-text-dark/75">{m.season}</div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">{m.title}</h3>
                      <p className="text-sm sm:text-base text-text-dark/90">{m.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="relative w-full py-16 md:py-24 bg-primary-dark text-text-light overflow-hidden">
        <div className="absolute inset-0 bg-mesh-hero opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-10 md:mb-14">
            Meet Our Team
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {TEAM.map((m) => {
              const hasLink = m.link && m.link !== '????';
              const Wrapper = hasLink ? 'a' : 'div';
              const props = hasLink
                ? { href: m.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Wrapper
                  key={m.name}
                  {...props}
                  className={`relative glass-dark rounded-2xl p-5 md:p-6 text-center transition-all duration-500 ease-out-expo ${
                    hasLink ? 'hover:-translate-y-1 hover:shadow-glow-sm cursor-pointer' : ''
                  }`}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{m.name}</h3>
                  <p className="text-base md:text-lg font-semibold text-accent-light mb-1">{m.role}</p>
                  <p className="text-sm md:text-base text-white/70">{m.class}</p>
                  <p className="text-sm md:text-base text-white/70">{m.major}</p>
                </Wrapper>
              );
            })}
          </div>

          <div className="mt-10 md:mt-14 flex justify-center">
            <div className="border-gradient p-5 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-text-dark">Alumni Advisors</h3>
              <div className="space-y-1 text-text-dark/85">
                <p className="text-sm md:text-base">Noah Krever (CC &apos;22)</p>
                <p className="text-sm md:text-base">Mateo Maturana (CC &apos;23)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
