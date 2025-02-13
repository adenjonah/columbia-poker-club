import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JaneStreet from "../assets/jane_street_transparent.png";
import HudsonRiverTrading from "../assets/HRT_logo.png";
import SIG from "../assets/SIG_logo.png";

const sponsors = [
  {
    name: "Jane Street",
    logo: JaneStreet,
    description:
      "Jane Street is a quantitative trading firm and liquidity provider with a unique focus on technology and collaborative problem solving."
  },
  {
    name: "SIG",
    logo: SIG,
    description:
      "Susquehanna International Group (SIG) is a global quantitative trading firm that leverages its expertise in trading, technology, and research to provide liquidity and competitive pricing."
  },
  {
    name: "Hudson River Trading",
    logo: HudsonRiverTrading,
    description:
      "Hudson River Trading (HRT) is a multi-asset class quantitative trading firm that brings a scientific approach to trading financial products."
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
      <section className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-8 bg-blue-500">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-white mb-20">
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
            itemClass="px-12 py-12"
          >
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-between p-8 m-4 rounded-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-40 w-auto object-contain mb-4"
                />
                <p className="text-base sm:text-lg text-gray-700 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {sponsor.description}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
