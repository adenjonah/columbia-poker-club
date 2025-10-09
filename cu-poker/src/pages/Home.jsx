import { Link, useNavigate } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

function Home() {
  const navigate = useNavigate();

  const images = [
    {
      src: "/S24_MTT.png",
      alt: "Spring 2024 Multi-Table Tournament"
    },
    {
      src: "/Poker_Meeting_1.webp",
      alt: "Poker Club Meeting"
    },
    {
      src: "/Poker_Meeting_2.webp",
      alt: "Poker Tournament Action"
    }
  ];

  return (
    <div
      className="h-auto w-full bg-primary-light flex flex-col items-center"
    >
      {/* Hero Section */}
      <div
        className="h-screen w-full flex flex-col items-center justify-center "
        style={{
          backgroundImage: `url(/Hero_Background.png)`,
          backgroundSize: "cover",
          paddingBottom: "20vh",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] md:w-[80%] h-[300px] md:h-[350px] flex flex-col items-center p-4 md:p-6 rounded-xl">
          <img
            src="/CU_Poker_Logo.png"
            alt="Columbia Poker Club Logo"
            className="w-[120px] md:w-[170px] h-[120px] md:h-[170px] mb-4 rounded-full"
          />
          <h1 className="text-[50px] md:text-[90px] text-text-light text-center">
            Columbia Poker Club
          </h1>
        </div>
      </div>

      {/* Mission */}
      <section className="w-full bg-primary-light py-8 md:py-20 px-4 md:px-10 flex flex-col items-center">
        <div className="max-w-3xl md:max-w-5xl w-[90%] md:w-[80%] flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2 p-3 md:p-6">
            <h2 className="text-3xl md:text-6xl font-bold text-text-dark mb-3 md:mb-4">
              Mission
            </h2>
            <p className="text-lg md:text-3xl text-text-dark">
              Columbia Poker Club brings together poker players for games,
              workshops, and competitions. Whether you're a beginner or a
              seasoned pro, you'll find a welcoming community here.
            </p>
          </div>

          <div className="w-full md:w-1/2 p-3 md:p-6">
            <ImageCarousel images={images} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-primary-dark py-10 md:py-20 px-5 md:px-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
          Are you a Columbia student?
        </h2>
        <p className="text-xl md:text-2xl text-text-light mb-6">
          Join our community and stay updated with our latest events!
        </p>
        <a
          href="https://discord.gg/4yzGm64uQ8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-light text-text-dark text-lg md:text-xl font-bold py-3 px-6 rounded-full hover:bg-primary transition"
        >
          Join our Discord!
        </a>
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

          {(() => {
            const events = [
              {
                title: "Weekly Meetings",
                details: [
                  "Every Thursday, 8:00 - 9:00 PM",
                  "Uris Hall, 3rd Floor",
                  "Join us for freeplay poker, educational workshops, and more!",
                ],
              },
              {
                title: "Lecture Series",
                details: [
                  "Every Other Sunday, 6:00 - 8:00 PM",
                  "Uris Hall",
                  "Educational poker strategy sessions and discussions.",
                ],
              },
              {
                title: "Fall 2025 Tournament",
                details: [
                  "Saturday, September 28th, 5:00 PM - 12:00 AM",
                  (
                    <>
                      Join Columbia's biggest poker tournament at Roone Auditorium, Lerner Hall. Over $3,000 in giveaways from our{" "}
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
                link: "/spring-mtt",
              },
            ];
            return (
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className={`w-full sm:w-[calc(50%-1rem)] lg:w-1/3 bg-primary-light shadow-lg p-6 md:p-8 lg:p-10 rounded-lg ${
                      event.link
                        ? "cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105"
                        : ""
                    }`}
                    onClick={event.link ? () => navigate(event.link) : undefined}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
                      {event.title}
                    </h3>
                    {event.details.map((detail, dIndex) => (
                      <p
                        key={dIndex}
                        className={`text-text-dark text-lg ${dIndex > 0 ? "mt-2" : ""}`}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            );
          })()}

          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_e9a2bda6adc3d9f883f7acc86756d418132483828382004ab9e93dd530e92f39%40group.calendar.google.com&ctz=America%2FNew_York"
            className="block mx-auto mt-8 rounded-lg"
            style={{ border: 0, aspectRatio: '4/3', maxWidth: '800px' }}
            width="100%"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Home;
