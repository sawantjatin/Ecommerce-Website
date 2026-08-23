import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="py-12">
      <div
        style={{ backgroundColor: data.bgColor }}
        className="container mx-auto rounded-xl overflow-visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 items-center min-h-[180px] px-6 md:px-10 py-8 text-white">
          {/* First Column */}
          <div className="text-center md:text-left">
            <p className="text-[10px] md:text-xs uppercase">{data.discount}</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
              {data.title}
            </h2>

            <p className="text-[8px] md:text-xs mt-1">{data.date}</p>
          </div>

          {/* Second Column - Image */}
          <div className="flex justify-center items-center">
            <img
              src={data.image}
              alt={data.title2}
              className="w-[180px] md:w-[220px] lg:w-[260px] object-contain drop-shadow-2xl md:-my-16"
            />
          </div>

          {/* Third Column */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <p className="text-xs md:text-sm font-semibold">{data.title2}</p>

            <h2 className="text-2xl md:text-3xl font-bold">{data.title3}</h2>

            <p className="text-[9px] md:text-xs leading-4 max-w-[280px] mt-2 mx-auto md:mx-0">
              {data.title4}
            </p>

            <button className="mt-3 bg-white text-red-500 text-[9px] md:text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
