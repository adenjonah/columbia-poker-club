function About() {
  return (
    <div className="w-full text-text">
      {/* Mission */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-primary text-white">
        <h1 className="text-4xl sm:text-7xl font-extrabold">Mission</h1>
        <p className="text-xl sm:text-3xl max-w-4xl mt-6">
          Our mission is to foster a community of poker enthusiasts at Columbia
          University, providing a space for players of all skill levels to
          learn, compete, and enjoy the game in a fun and strategic environment.
        </p>
      </section>

      {/* History */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-secondary text-text">
        <h1 className="text-4xl sm:text-7xl font-extrabold">History</h1>
        <p className="text-xl sm:text-3xl max-w-4xl mt-6">
          Established in 2022, the Columbia Poker Club started as a small
          gathering of students passionate about the game. Over the years, we
          have grown into a thriving community that organizes tournaments,
          strategy workshops, and social poker nights.
        </p>
      </section>

      {/* Board */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-10 bg-accent text-text">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-center">
          Current Board
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-5xl">
          {[
            { name: "Andrew Fahey", role: "Co-President" },
            { name: "David Eyal", role: "Co-President" },
            { name: "Jonah Aden", role: "Vice President" },
            { name: "Juliana Shepard", role: "Treasurer" },
            { name: "Nicolai Sotrop", role: "Secretary" },
            { name: "Zachary Klein", role: "Outreach Chair" },
            { name: "Lucy Rose", role: "Social Media Chair" },
            { name: "Liz Hu", role: "Senior Advisor" },
            { name: "Bailey Ng", role: "Senior Advisor" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg text-center shadow-md flex flex-col items-center justify-center h-auto"
            >
              <h3 className="text-2xl sm:text-4xl font-bold">{member.name}</h3>
              <p className="text-base sm:text-lg text-gray-700">
                {member.role}
              </p>
            </div>
          ))}

          <div className="md:col-span-3 flex flex-col md:flex-row justify-center gap-8 w-full">
            {[
              { name: "Noah Krever", role: "Alumni Advisor" },
              { name: "Mateo Maturana", role: "Alumni Advisor" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 p-6 rounded-lg text-center shadow-md flex flex-col items-center justify-center w-full md:w-[300px] h-auto"
              >
                <h3 className="text-2xl sm:text-4xl font-bold">
                  {member.name}
                </h3>
                <p className="text-base sm:text-lg text-gray-700">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
