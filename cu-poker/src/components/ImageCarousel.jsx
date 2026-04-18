import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CustomDot = ({ onClick, active }) => (
  <button
    aria-label="Slide"
    className={`mx-1 rounded-full transition-all duration-500 ease-out-expo ${
      active
        ? 'bg-gradient-to-r from-accent to-primary w-8 h-2'
        : 'bg-primary/30 hover:bg-primary/60 w-2 h-2'
    }`}
    onClick={() => onClick()}
  />
);

function ImageCarousel({ images }) {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 via-secondary/20 to-primary/30 rounded-3xl blur-2xl opacity-60" />
      <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/40 shadow-card-lg">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3500}
          keyBoardControl
          transitionDuration={600}
          containerClass="pb-8"
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
          customDot={<CustomDot />}
          showDots
          renderDotsOutside
          itemClass="px-0"
          swipeable={false}
          draggable={false}
          arrows={false}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full aspect-video">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageCarousel;
