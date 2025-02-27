import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// Custom dot component using Tailwind classes
const CustomDot = ({ onClick, active }) => {
  return (
    <button
      className={`
        mx-1 w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ease-in-out
        ${active 
          ? "bg-primary-dark md:w-4 md:h-4" 
          : "bg-primary-light hover:bg-primary"}
      `}
      onClick={() => onClick()}
    />
  );
};

function ImageCarousel({ images }) {
  return (
    <div className="w-full relative">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={400}
        containerClass="pb-4 md:pb-8"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        customDot={<CustomDot />}
        itemClass="px-1 md:px-2"
        swipeable={false}
        draggable={false}
        arrows={false}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full aspect-video">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel; 