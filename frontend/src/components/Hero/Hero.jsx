import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import image1 from "../../assets/hero/headphone.png";
import image2 from "../../assets/hero/watch.png";
import image3 from "../../assets/category/macbook.png";

import Button from "../Shared/Button";

function SampleNextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Next slide"
      className="slick-arrow slick-next !flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-2 md:right-5 lg:right-8 z-30 w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-gray-700 text-black dark:text-white shadow-lg hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-200"
    >
      <FaArrowRight className="text-xs md:text-sm lg:text-base" />
    </button>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Previous slide"
      className="slick-arrow slick-prev !flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-2 md:left-5 lg:left-8 z-30 w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-gray-700 text-black dark:text-white shadow-lg hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-200"
    >
      <FaArrowLeft className="text-xs md:text-sm lg:text-base" />
    </button>
  );
}

const HeroData = [
  {
    id: 1,
    img: image1,
    subtitle: "Premium Audio",
    title: "Wireless",
    title2: "Headphone",
    desc: "Experience unparalleled sound quality with our latest wireless technology.",
    btnText: "Shop Now",
  },
  {
    id: 2,
    img: image2,
    subtitle: "Smart Wearable",
    title: "Luxury",
    title2: "SmartWatch",
    desc: "Track your fitness and stay connected with style and precision.",
    btnText: "Explore",
  },
  {
    id: 3,
    img: image3,
    subtitle: "Premium Laptop",
    title: "Branded",
    title2: "Laptops",
    desc: "Powerful performance and sleek design for work and play.",
    btnText: "Discover",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,

    autoplay: true,
    autoplaySpeed: 5000,

    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: (dots) => (
      <div className="!-bottom-5 sm:!-bottom-6 md:!-bottom-8">
        <ul className="flex gap-2 justify-center items-center">{dots}</ul>
      </div>
    ),

    customPaging: () => (
      <div className="!w-2.5 !h-2.5 md:!w-3 md:!h-3 rounded-full bg-gray-400 dark:bg-gray-600 transition-all duration-300 hover:bg-primary dark:hover:bg-primary" />
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative w-full pb-14 md:pb-20 overflow-hidden">
      <Slider {...settings} className="hero-slider">
        {HeroData.map((item) => (
          <div key={item.id} className="w-full outline-none">
            <div
              className="
                hero-bg-color
                relative
                overflow-hidden
                min-h-[620px]
                sm:min-h-[580px]
                md:min-h-[560px]
                lg:min-h-[600px]
                xl:min-h-[650px]
              "
            >
              <div className="container mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-16">
                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-8
                    md:gap-10
                    lg:gap-12
                    items-center
                    min-h-full
                  "
                >
                  {/* LEFT CONTENT */}
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="
                      space-y-3
                      sm:space-y-4
                      md:space-y-5
                      lg:space-y-6
                      order-2
                      lg:order-1
                      text-center
                      lg:text-left
                      w-full
                      max-w-2xl
                      mx-auto
                      lg:mx-0
                      lg:pl-8
                      xl:pl-12
                   "
                  >
                    <p className="text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase text-gray-600 dark:text-gray-300">
                      {item.subtitle}
                    </p>

                    <div className="space-y-1">
                      <h1
                        className="
                          text-4xl
                          sm:text-5xl
                          md:text-6xl
                          lg:text-6xl
                          xl:text-7xl
                          font-bold
                          uppercase
                          text-black
                          dark:text-white
                          leading-[1.05]
                          break-words
                        "
                      >
                        {item.title}
                      </h1>

                      <h1
                        className="
                          text-4xl
                          sm:text-5xl
                          md:text-6xl
                          lg:text-6xl
                          xl:text-7xl
                          font-bold
                          uppercase
                          text-primary
                          leading-[1.05]
                          break-words
                        "
                      >
                        {item.title2}
                      </h1>
                    </div>

                    <p
                      className="
                        text-sm
                        sm:text-base
                        md:text-lg
                        text-gray-600
                        dark:text-gray-400
                        max-w-lg
                        mx-auto
                        lg:mx-0
                        leading-relaxed
                      "
                    >
                      {item.desc}
                    </p>

                    <div
                      className="
                        flex
                        flex-col
                        xs:flex-row
                        sm:flex-row
                        items-center
                        justify-center
                        lg:justify-start
                        gap-3
                        sm:gap-4
                        pt-2
                      "
                    >
                      <Button
                        text={item.btnText}
                        bgColor="bg-primary"
                        textColor="text-white"
                      />

                      <button
                        className="
                          group
                          flex
                          items-center
                          gap-2
                          text-sm
                          sm:text-base
                          font-semibold
                          text-gray-800
                          dark:text-gray-200
                          hover:text-primary
                          dark:hover:text-primary
                          transition-colors
                          duration-200
                          whitespace-nowrap
                        "
                      >
                        <span>View Collection</span>

                        <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                      order-1
                      lg:order-2
                      w-full
                      min-w-0
                    "
                  >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div
                        className="
                          w-44
                          h-44
                          sm:w-56
                          sm:h-56
                          md:w-72
                          md:h-72
                          lg:w-80
                          lg:h-80
                          xl:w-96
                          xl:h-96
                          rounded-full
                          bg-white/60
                          dark:bg-white/5
                          blur-3xl
                        "
                      />
                    </div>

                    <img
                      src={item.img}
                      alt={item.title2}
                      className="
                        relative
                        z-10
                        w-52
                        h-52
                        sm:w-60
                        sm:h-60
                        md:w-72
                        md:h-72
                        lg:w-80
                        lg:h-80
                        xl:w-96
                        xl:h-96
                        max-w-full
                        object-contain
                        drop-shadow-2xl
                        hover:scale-105
                        transition-transform
                        duration-500
                        ease-out
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
