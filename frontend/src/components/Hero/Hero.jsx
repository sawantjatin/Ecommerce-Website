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
      className="
        slick-arrow slick-next
        !flex items-center justify-center
        absolute top-1/2 -translate-y-1/2
        right-2 md:right-5 lg:right-8
        z-30
        w-9 h-9
        md:w-11 md:h-11
        lg:w-12 lg:h-12
        rounded-full
        bg-white dark:bg-gray-700
        text-black dark:text-white
        shadow-lg
        hover:bg-primary hover:text-white
        dark:hover:bg-primary dark:hover:text-white
        transition-all duration-200
      "
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
      className="
        slick-arrow slick-prev
        !flex items-center justify-center
        absolute top-1/2 -translate-y-1/2
        left-2 md:left-5 lg:left-8
        z-30
        w-9 h-9
        md:w-11 md:h-11
        lg:w-12 lg:h-12
        rounded-full
        bg-white dark:bg-gray-700
        text-black dark:text-white
        shadow-lg
        hover:bg-primary hover:text-white
        dark:hover:bg-primary dark:hover:text-white
        transition-all duration-200
      "
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
      <div
        className="
          !w-2.5 !h-2.5
          md:!w-3 md:!h-3
          rounded-full
          bg-gray-400 dark:bg-gray-600
          transition-all duration-300
          hover:bg-primary dark:hover:bg-primary
        "
      />
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
    <section
      className="
        relative
        w-full
        py-6 sm:py-8 md:py-10
        overflow-hidden
      "
    >
      <Slider {...settings} className="hero-slider">
        {HeroData.map((item) => (
          <div key={item.id} className="w-full outline-none">
            {/* Hero Background */}
            <div
              className="
                hero-bg-color
                relative
                overflow-hidden
                min-h-[300px]
                sm:min-h-[320px]
                md:min-h-[340px]
                lg:min-h-[360px]
              "
            >
              {/* Content Container */}
              <div
                className="
                  container mx-auto
                  h-full
                  py-8 sm:py-10 md:py-12 lg:py-14
                "
              >
                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-6
                    md:gap-8
                    lg:gap-10
                    items-center
                    min-h-[280px]
                    sm:min-h-[300px]
                    md:min-h-[320px]
                    lg:min-h-[340px]
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

                      order-2
                      lg:order-1

                      text-center
                      lg:text-left

                      w-full
                      max-w-2xl
                      mx-auto
                      lg:mx-0
                    "
                  >
                    <p
                      className="
                        text-xs
                        sm:text-sm
                        md:text-base
                        font-semibold
                        tracking-widest
                        uppercase
                        text-gray-600
                        dark:text-gray-300
                      "
                    >
                      {item.subtitle}
                    </p>

                    <div className="space-y-1">
                      <h1
                        className="
                          text-4xl
                          sm:text-5xl
                          md:text-6xl
                          lg:text-5xl
                          xl:text-6xl
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
                          lg:text-5xl
                          xl:text-6xl
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
                        flex-row
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

                        <FaArrowRight
                          className="
                            text-xs
                            sm:text-sm
                            group-hover:translate-x-1
                            transition-transform
                            duration-200
                          "
                        />
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
                    {/* Background Glow */}
                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        pointer-events-none
                      "
                    >
                      <div
                        className="
                          w-40 h-40
                          sm:w-48 sm:h-48
                          md:w-56 md:h-56
                          lg:w-64 lg:h-64
                          xl:w-72 xl:h-72
                          rounded-full
                          bg-white/60
                          dark:bg-white/5
                          blur-3xl
                        "
                      />
                    </div>

                    {/* Product Image */}
                    <img
                      src={item.img}
                      alt={item.title2}
                      className="
                        relative
                        z-10

                        w-44 h-44
                        sm:w-52 sm:h-52
                        md:w-60 md:h-60
                        lg:w-64 lg:h-64
                        xl:w-72 xl:h-72

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
