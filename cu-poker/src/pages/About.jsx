function About() {
  return (
    <div className="w-full text-text-dark">
      {/* Mission */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-primary text-text-dark" style={{ paddingBottom: '20vh' }}>
        <h1 className="text-4xl sm:text-7xl font-extrabold">Mission</h1>
        <p className="text-xl sm:text-3xl max-w-4xl mt-6">
          Our mission is to foster a community of poker enthusiasts at Columbia
          University, providing a space for players of all skill levels to
          learn, compete, and enjoy the game in a fun and strategic environment.
        </p>
      </section>

      {/* History */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-primary-light text-text-dark">
        <h1 className="text-4xl sm:text-7xl font-extrabold">History</h1>
        <p className="text-xl sm:text-3xl max-w-4xl mt-6 leading-relaxed">
          Founded in Fall 2021 by Mateo Maturana and Noah Krever,
          the Columbia Poker Club began with meetings in Schermerhorn and Hamilton, 
          hosting free games. The first tournament took place in November 2021 in Fairchild. 
          The club offered workshops on rules and basic strategy, and successfully ran several tournaments. 
          Official recognition as a club at Columbia was achieved during the 2022-2023 academic year. 
          Initially without funding, the club has since gained sponsors and partners.
        </p>
      </section>

      {/* Board */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-10 bg-primary-dark text-text-light">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-center">
          Current Board
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mt-10 w-full max-w-5xl">
          {[
            { name: "David Eyal", role: "Co-President", class: "CC '26", major: "Computer Science and Statistics", link: "https://www.linkedin.com/in/david-eyal-9a19a624b/" },
            { name: "Andrew Fahey", role: "Co-President", class: "CC '25", major: "Economics and Political Science", link: "https://www.linkedin.com/in/andrew-e-fahey/" },
            { name: "Jonah Aden", role: "Vice President", class: "CC '26", major: "Computer Science and PoliSci - Stats", link: "https://linkedin.com/in/jonah-aden" },
            { name: "Juliana Shepard", role: "Treasurer", class: "Barnard '27", major: "Architecture", link: "https://www.linkedin.com/in/juliana-shepard/" },
            { name: "Nicolai Sotrop", role: "Secretary", class: "CC '27", major: "Financial Economics and Political Science", link: "https://www.linkedin.com/in/nicolai-sotorp-06a729255/" },
            { name: "Zachary Klein", role: "Outreach Chair", class: "SEAS '27", major: "Applied Math", link: "https://www.linkedin.com/in/zachary-klein-794061292/" },
            { name: "Lucy Rose", role: "Social Media Chair", class: "CC '26", major: "Sociology"},
            { name: "Liz Hu", role: "Senior Advisor", class: "SEAS '25", major: "Computer Science", link: "https://www.linkedin.com/in/elizabethhu/" },
            { name: "Bailey Ng", role: "Senior Advisor", class: "GS '25", major: "Financial Economics", link: "https://www.linkedin.com/in/baileyng/" },
            { name: "Noah Krever", role: "Alumni Advisor", class: "'CC '23", major: "", link: "https://www.linkedin.com/in/noahkrever/" },
            { name: "Mateo Maturana", role: "Alumni Advisor", class: "'CC '23", major: "", link: "https://www.linkedin.com/in/mateo-maturana-300187170/" }
          ].map((member, index) => (
            <div
              key={index}
              className="bg-primary-light text-text-dark p-6 rounded-lg text-center shadow-md flex flex-col items-center justify-center h-[250px] w-full md:w-[300px] cursor-pointer"
              {...(member.link && { onClick: () => window.open(member.link, "_blank") })}
            >
              <h3 className="text-2xl sm:text-4xl font-bold">{member.name}</h3>
              <p className="text-base sm:text-lg">
                {member.role}
              </p>
              <p className="text-base sm:text-lg">
                {member.major}
              </p>
              <p className="text-base sm:text-lg">
                {member.class}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
