import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const sponsors = [
  {
    name: "Jane Street",
    logo: "/JS_Logo.png",
    description:
      "Jane Street is a quantitative trading firm and liquidity provider with a unique focus on technology and collaborative problem solving.",
    link: "https://www.janestreet.com/"
  },
  {
    name: "SIG",
    logo: "/SIG_Logo.png",
    description:
      "Susquehanna International Group (SIG) is a global quantitative trading firm that leverages its expertise in trading, technology, and research to provide liquidity and competitive pricing.",
    link: "https://www.sig.com/"
  },
  {
    name: "Hudson River Trading",
    logo: "/HRT_Logo.png",
    description:
      "Hudson River Trading (HRT) is a multi-asset class quantitative trading firm that brings a scientific approach to trading financial products.",
    link: "https://www.hudsonrivertrading.com/"
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function Sponsors() {
  return (
    <div className="w-full">
      <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-8 bg-primary-light">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-text-dark mb-20">
          Our Sponsors
        </h1>
        <div className="w-full">
          <Carousel
            arrows={false}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="px-4 py-4 sm:px-12 sm:py-12"
          >
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start sm:items-center justify-start sm:justify-between p-4 sm:p-8 m-4 rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="w-full h-auto object-contain mb-8 sm:mb-4 sm:h-60"
                />
                <p className="text-base sm:text-lg text-text-DEFAULT text-center sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {sponsor.description}
                </p>
              </a>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
