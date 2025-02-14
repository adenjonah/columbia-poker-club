import Logo from "@assets/CU_Poker_Logo.png";
import Background from "@assets/Hero_Background.png";
import Table from "@assets/S24_MTT.png";

function Home() {
  return (
    <div
      className="h-auto w-full bg-background-DEFAULT flex flex-col items-center"
      style={{ fontFamily: "futura, sans-serif" }}
    >
      {/* Hero Section */}
      <div
        className="h-screen w-full flex flex-col items-center justify-center "
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          paddingBottom: '20vh',
        }}
      >
        <div className="w-[90%] md:w-[80%] h-[300px] md:h-[350px] flex flex-col items-center p-4 md:p-6 shadow-xl rounded-xl">
          <img
            src={Logo}
            alt="Columbia Poker Club Logo"
            className="w-[120px] md:w-[170px] h-[120px] md:h-[170px] mb-4 rounded-full"
          />
          <h1 className="text-[50px] md:text-[90px] text-text-light text-center">
            Columbia Poker Club
          </h1>
        </div>
      </div>

      {/* About */}
      <section className="w-full bg-primary-light py-10 md:py-20 px-5 md:px-10 flex flex-col items-center">
        <div className="max-w-3xl md:max-w-5xl flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4 md:p-6">
            <h2 className="text-4xl md:text-6xl font-bold text-text-dark mb-4">About Us</h2>
            <p className="text-xl md:text-3xl text-text-dark">
              Columbia Poker Club brings together poker players for games,
              workshops, and competitions. Whether you're a beginner or a
              seasoned pro, you'll find a welcoming community here.
            </p>
          </div>

          <div className="w-full md:w-1/2 p-4 md:p-6">
            <img
              src={Table}
              alt="Poker Table"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full bg-primary py-10 md:py-20 px-5 md:px-10">
        <div className="max-w-[90%] md:max-w-[80%] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-text-dark mb-4 md:mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl md:text-3xl text-text-dark mb-6 md:mb-10">
            Join our upcoming poker tournaments and club meetups!
          </p>

          {/* Grid of Events */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-primary-light shadow-lg p-10 md:p-20 rounded-lg border border-secondary-light">
              <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
                Club Freeplay
              </h3>
              <p className="text-text-dark text-lg md:text-xl">Next Thursday - 8:30 PM</p>
              <p className="text-text-dark text-lg md:text-xl">Uris Hall - 3rd Floor</p>
              <p className="text-lg md:text-xl text-text-dark mt-2">
                Join us for a night of Texas Hold'em. Free entry!
              </p>
            </div>

            <div className="bg-primary-light shadow-lg p-10 md:p-20 rounded-lg border border-secondary-light">
              <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
                Tournament Qualifier
              </h3>
              <p className="text-text-dark text-lg md:text-xl">March 6th - 7:30 PM</p>
              <p className="text-lg md:text-xl text-text-dark mt-2">
                Online qualifier for March 30th tournament, top X competitors
                qualify
              </p>
            </div>

            <div className="bg-primary-light shadow-lg p-10 md:p-20 rounded-lg border border-secondary-light">
              <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
                Spring Tournament
              </h3>
              <p className="text-text-dark text-lg md:text-xl">
                Sunday, March 30th - Noon to 9pm
              </p>
              <p className="text-lg md:text-xl text-text-dark mt-2">
                Compete in Columbia's largest poker tournament, 150 players in
                the field, over $1000 in prizes from top hedge funds and quant
                firms in the area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
