import React from 'react';

const sponsorTiers = {
  gold: [
    {
      name: "Citadel Securities",
      logo: "/CitSec_Logo.png",
      link: "https://www.citadelsecurities.com/",
      description: "Citadel Securities is a leading market maker that provides liquidity to investors around the world. We help improve market quality and reduce trading costs for millions of people."
    },
    {
      name: "Hudson River Trading",
      logo: "/HRT_Logo.png",
      link: "https://www.hudsonrivertrading.com/",
      description: "HRT is a quantitative trading firm focused on bringing a scientific approach to trading financial products. We use algorithms, cutting-edge technology, and rigorous research."
    }
  ],
  silver: [
    {
      name: "Jane Street",
      logo: "/JS_Logo.png",
      link: "https://www.janestreet.com/",
      description: "Jane Street is a quantitative trading firm and liquidity provider with a unique focus on technology and collaborative problem solving. We trade a wide range of financial instruments."
    }
  ],
  bronze: [
    {
      name: "SIG",
      logo: "/SIG_Logo.png",
      link: "https://www.sig.com/",
      description: "SIG is a global quantitative trading firm founded with an entrepreneurial mindset and a rigorous analytical approach. We leverage technology and research to provide liquidity across multiple asset classes."
    }
  ]
};

function Sponsors() {
  return (
    <div className="w-full h-screen sm:min-h-screen flex flex-col bg-primary-light text-text-dark">
      {/* Header */}
      <div className="pt-16 sm:pt-24 pb-4 sm:pb-8 text-center px-4">
        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">Our Sponsors</h1>
      </div>

      {/* Sponsors Grid */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8">
        <div className="w-full max-w-6xl">
          
          {/* Gold Tier - Top Row */}
          <div className="mb-4 sm:mb-12">
            <div className="text-center mb-3 sm:mb-6">
              <span className="inline-block px-3 sm:px-6 py-1 sm:py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold text-sm sm:text-lg rounded-full">
                GOLD
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              {sponsorTiers.gold.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg p-2 sm:p-6 lg:p-8 sm:transition-all sm:duration-300 sm:transform sm:hover:scale-105 sm:relative sm:overflow-hidden"
                >
                  <div className="h-16 sm:h-32 lg:h-36 flex flex-col sm:relative">
                    {/* Logo */}
                    <div className="flex items-center justify-center h-full w-full sm:transition-all sm:duration-500 sm:group-hover:h-8 md:group-hover:h-10 lg:group-hover:h-12 sm:group-hover:flex-shrink-0">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className={`object-contain sm:transition-all sm:duration-500 ${
                          sponsor.name === "Citadel Securities" 
                            ? "max-h-full max-w-full scale-110 sm:scale-150 sm:group-hover:scale-100 md:group-hover:scale-125" 
                            : "max-h-full max-w-full sm:group-hover:scale-75"
                        }`}
                      />
                    </div>
                    
                    {/* Description - appears on hover (desktop only) */}
                    <div className="hidden sm:flex sm:flex-1 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-500 sm:transform sm:translate-y-4 sm:group-hover:translate-y-0 sm:items-center sm:justify-center">
                      <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed px-1 md:px-2">
                        {sponsor.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Silver & Bronze - Bottom Row */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-10 lg:gap-12 max-w-4xl mx-auto">
            
            {/* Silver Tier */}
            <div>
              <div className="text-center mb-2 sm:mb-6">
                <span className="inline-block px-2 sm:px-6 py-1 sm:py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold text-xs sm:text-lg rounded-full">
                  SILVER
                </span>
              </div>
              <div className="flex justify-center">
                {sponsorTiers.silver.map((sponsor, index) => (
                  <a
                    key={index}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg p-2 sm:p-6 lg:p-8 sm:transition-all sm:duration-300 sm:transform sm:hover:scale-105 w-full max-w-sm sm:relative sm:overflow-hidden"
                  >
                    <div className="h-12 sm:h-28 lg:h-32 flex flex-col sm:relative">
                      {/* Logo */}
                      <div className="flex items-center justify-center h-full w-full sm:transition-all sm:duration-500 sm:group-hover:h-6 md:group-hover:h-8 lg:group-hover:h-10 sm:group-hover:flex-shrink-0">
                        <img
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          className="max-h-full max-w-full object-contain sm:transition-all sm:duration-500 sm:group-hover:scale-75"
                        />
                      </div>
                      
                      {/* Description - appears on hover (desktop only) */}
                      <div className="hidden sm:flex sm:flex-1 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-500 sm:transform sm:translate-y-4 sm:group-hover:translate-y-0 sm:items-center sm:justify-center">
                        <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed px-1 md:px-2">
                          {sponsor.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Bronze Tier */}
            <div>
              <div className="text-center mb-2 sm:mb-6">
                <span className="inline-block px-2 sm:px-6 py-1 sm:py-2 bg-gradient-to-r from-orange-400 to-amber-600 text-white font-bold text-xs sm:text-lg rounded-full">
                  BRONZE
                </span>
              </div>
              <div className="flex justify-center">
                {sponsorTiers.bronze.map((sponsor, index) => (
                  <a
                    key={index}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg p-2 sm:p-6 lg:p-8 sm:transition-all sm:duration-300 sm:transform sm:hover:scale-105 w-full max-w-sm sm:relative sm:overflow-hidden"
                  >
                    <div className="h-12 sm:h-28 lg:h-32 flex flex-col sm:relative">
                      {/* Logo */}
                      <div className="flex items-center justify-center h-full w-full sm:transition-all sm:duration-500 sm:group-hover:h-6 md:group-hover:h-8 lg:group-hover:h-10 sm:group-hover:flex-shrink-0">
                        <img
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          className="max-h-full max-w-full object-contain sm:transition-all sm:duration-500 sm:group-hover:scale-75"
                        />
                      </div>
                      
                      {/* Description - appears on hover (desktop only) */}
                      <div className="hidden sm:flex sm:flex-1 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-500 sm:transform sm:translate-y-4 sm:group-hover:translate-y-0 sm:items-center sm:justify-center">
                        <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed px-1 md:px-2">
                          {sponsor.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
