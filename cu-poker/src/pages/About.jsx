function About() {
  const milestones = [
    {
      year: "2021",
      season: "Fall",
      title: "The Beginning",
      description: "Founded by Mateo Maturana and Noah Krever, starting with casual poker games in Schermerhorn and Hamilton."
    },
    {
      year: "2021",
      season: "Winter",
      title: "First Tournament",
      description: "Hosted our inaugural tournament in Fairchild"
    },
    {
      year: "2022",
      season: "Spring",
      title: "Official ABC Recognition",
      description: "Became a Columbia University recognized club"
    },
    {
      year: "2023",
      season: "Spring",
      title: "First Sponsored Tournament",
      description: <>Co-hosted an MTT with {' '}
        <a href="https://www.cc-seas.columbia.edu/student-group/cuinforms" target="_blank" rel="noopener noreferrer" className="text-primary-dark hover:underline font-bold">CUINFORMS</a>
        {', '}
        <a href="https://www.cc-seas.columbia.edu/node/442662" target="_blank" rel="noopener noreferrer" className="text-primary-dark hover:underline font-bold">CDSS</a>
        {', and '}
        <a href="https://www.columbiaquantgroup.com/" target="_blank" rel="noopener noreferrer" className="text-primary-dark hover:underline font-bold">CQG</a>
        {', sponsored by '}
        <a href="https://www.sig.com/" target="_blank" rel="noopener noreferrer" className="text-primary-dark hover:underline font-bold">SIG</a>
      </>
    },
    {
      year: new Date().getFullYear().toString(),
      season: "Now", 
      title: "Routine Events",
      description: "We run weekly games, monthly workshops, and yearly tournaments"
    },
    {
      year: 2025,
      season: "Fall", 
      title: "Expanding Operations",
      description: "Weekly free play and lectures. Monthly competitions and events. Semesterly Freeroll Tournaments. Women in Poker Tournament. Career and Educational events."
    }
  ];

  return (
    <div className="w-full text-text-dark">
      {/* Milestones Section - Added top padding for navbar */}
      <section className="w-full flex flex-col items-center justify-center bg-primary text-text-dark min-h-[100dvh] pt-20 pb-10 sm:pt-24 md:py-0 px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8">Club History</h1>
        <div className="max-w-4xl w-full space-y-4 sm:space-y-6">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 bg-primary-light p-3 sm:p-4 md:p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-0">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-accent-dark">{milestone.year}</div>
                <div className="text-base sm:text-lg text-text-dark opacity-75">{milestone.season}</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">{milestone.title}</h3>
                <p className="text-sm sm:text-base opacity-90">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Board */}
      <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 py-10 bg-primary-dark text-text-light">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-center mb-8 md:mb-12">
          Meet Our Team
        </h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-10 w-full max-w-7xl">
          {[
            // { name: "Andrew Fahey", role: "Co-President", class: "CC '25", major: "Economics and Political Science", link: "https://www.linkedin.com/in/andrew-e-fahey/" },
            { name: "Jonah Aden", role: "Vice President", class: "CC '26", major: "Computer Science and PoliSci - Stats", link: "https://linkedin.com/in/jonah-aden" },
            // { name: "Nicolai Sotrop", role: "Secretary", class: "CC '27", major: "Financial Economics and Political Science", link: "https://www.linkedin.com/in/nicolai-sotorp-06a729255/" },
            { name: "Zachary Klein", role: "Vice President", class: "SEAS '27", major: "Applied Math", link: "https://www.linkedin.com/in/zachary-klein-794061292/" },
            { name: "Juliana Shepard", role: "Treasurer", class: "Barnard '27", major: "Architecture", link: "https://www.linkedin.com/in/juliana-shepard/" },
            { name: "Dylan Silverman", role: "Outreach Director", class: "CC '28", major: "???", link: "????" },
            { name: "Sydney Smith", role: "Secretary", class: "CC? '26", major: "???", link: "????" },
            { name: "Bohan Gao", role: "Social Media Coordinator", class: "??", major: "???", link: "????" },
            { name: "Manni Lin", role: "Operations Coordinator", class: "??", major: "???", link: "????" },
            { name: "Olivia Huang", role: "Operations Coordinator", class: "??", major: "???", link: "????" },
            { name: "Bill Fei", role: "Operations Coordinator", class: "??", major: "???", link: "????" },
            // { name: "Lucy Rose", role: "Social Media Chair", class: "CC '26", major: "Sociology"},
            // { name: "Liz Hu", role: "Senior Advisor", class: "SEAS '25", major: "Computer Science", link: "https://www.linkedin.com/in/elizabethhu/" },
            { name: "David Eyal", role: "Senior Advisor", class: "CC '26", major: "Computer Science and Statistics", link: "https://www.linkedin.com/in/david-eyal-9a19a624b/" },
            // { name: "Bailey Ng", role: "Senior Advisor", class: "GS '25", major: "Financial Economics", link: "https://www.linkedin.com/in/baileyng/" },
          ].map((member, index) => (
            <div
              key={index}
              className={`
                bg-primary-light text-text-dark p-4 md:p-6 rounded-lg shadow-md
                flex flex-col items-center justify-center
                w-[85%] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]
                min-h-[180px] transform transition-all duration-300
                ${member.link ? 'hover:scale-105 hover:shadow-xl cursor-pointer' : ''}
              `}
              {...(member.link && { onClick: () => window.open(member.link, "_blank") })}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-base md:text-lg font-semibold text-accent-dark mb-1">{member.role}</p>
              <p className="text-sm md:text-base opacity-75">{member.class}</p>
              <p className="text-sm md:text-base opacity-75 text-center">{member.major}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <div className="text-center bg-primary-light text-text-dark p-4 md:p-6 rounded-lg shadow-md w-[85%] sm:w-auto">
            <h3 className="text-lg md:text-xl font-bold mb-2">Alumni Advisors</h3>
            <div className="space-y-2">
              <p className="text-sm md:text-base">Noah Krever (CC '22)</p>
              <p className="text-sm md:text-base">Mateo Maturana (CC '23)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
