function About() {
  return (
    <div className="w-full text-text">
      {/* Mission */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-blue-500 text-white">
        <h1 className="text-4xl sm:text-7xl font-extrabold">Mission</h1>
        <p className="text-xl sm:text-3xl max-w-4xl mt-6">
          Our mission is to foster a community of poker enthusiasts at Columbia
          University, providing a space for players of all skill levels to
          learn, compete, and enjoy the game in a fun and strategic environment.
        </p>
      </section>

      {/* History */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-blue-300 text-text">
        <h1 className="text-4xl sm:text-7xl font-extrabold">History</h1>
        <p className="text-xl sm:text-3xl max-w-4xl mt-6">
          Established in 2022, the Columbia Poker Club started as a small
          gathering of students passionate about the game. Over the years, we
          have grown into a thriving community that organizes tournaments,
          strategy workshops, and social poker nights.
        </p>
      </section>

      {/* Board */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-10 bg-blue-100 text-text">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-center">
          Current Board
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mt-10 w-full max-w-5xl">
          {[
            { name: "Andrew Fahey", role: "Co-President", class: "CC '25", major: "Political Science & Statistics" },
            { name: "David Eyal", role: "Co-President", class: "CC '26", major: "Computer Science and Statistics" },
            { name: "Jonah Aden", role: "Vice President", class: "CC '26", major: "Computer Science and PoliSci - Stats" },
            { name: "Juliana Shepard", role: "Treasurer", class: "Barnard '26", major: "Business" },
            { name: "Nicolai Sotrop", role: "Secretary", class: "CC '27", major: "Engineering" },
            { name: "Zachary Klein", role: "Outreach Chair", class: "CC '27", major: "Political Science" },
            { name: "Lucy Rose", role: "Social Media Chair", class: "'25", major: "Art History" },
            { name: "Liz Hu", role: "Senior Advisor", class: "CC '25", major: "Biology" },
            { name: "Bailey Ng", role: "Senior Advisor", class: "GS '25", major: "Financial Economics" },
            { name: "Noah Krever", role: "Alumni Advisor", class: "'23?", major: "Econ?" },
            { name: "Mateo Maturana", role: "Alumni Advisor", class: "'23?", major: "CS?" }
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg text-center shadow-md flex flex-col items-center justify-center h-[250px] w-full md:w-[300px]"
            >
              <h3 className="text-2xl sm:text-4xl font-bold">{member.name}</h3>
              <p className="text-base sm:text-lg text-gray-700">
                {member.role}
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                {member.major}
              </p>
              <p className="text-base sm:text-lg text-gray-700">
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
