import React from "react";

import image1 from "../../assets/category/gaming.png";
import image2 from "../../assets/category/vr.png";
import image3 from "../../assets/category/speaker.png";

import Button from "../Shared/Button";

const Category2 = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Console */}
          <div
            className="
              col-span-1
              sm:col-span-2
              lg:col-span-2
              py-8
              pl-5
              bg-gradient-to-br from-gray-400/90 to-gray-100
              text-white
              rounded-2xl
              relative
              h-[260px]
              sm:h-[280px]
              lg:h-[300px]
              flex
              items-end
              overflow-hidden
            "
          >
            <div className="relative z-10">
              <div className="mb-4">
                <p className="text-white text-sm">Enjoy</p>

                <p className="text-xl sm:text-2xl font-semibold mb-[2px]">
                  With
                </p>

                <p
                  className="
                    text-3xl
                    sm:text-4xl
                    xl:text-5xl
                    font-bold
                    opacity-40
                  "
                >
                  CONSOLE
                </p>

                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>

            <img
              src={image1}
              alt="Gaming Console"
              className="
                w-[200px]
                sm:w-[230px]
                lg:w-[250px]
                absolute
                top-1/2
                -translate-y-1/2
                right-0
                object-contain
              "
            />
          </div>

          {/* Oculus */}
          <div
            className="
              py-8
              pl-5
              bg-gradient-to-br from-brandGreen/90 to-brandGreen/70
              text-white
              rounded-2xl
              relative
              h-[260px]
              sm:h-[280px]
              lg:h-[300px]
              flex
              items-start
              overflow-hidden
            "
          >
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-white text-sm">Enjoy</p>

                <p className="text-xl sm:text-2xl font-semibold mb-[2px]">
                  With
                </p>

                <p
                  className="
                    text-3xl
                    sm:text-4xl
                    xl:text-5xl
                    font-bold
                    opacity-20
                    mb-2
                  "
                >
                  Oculus
                </p>

                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandGreen"
                />
              </div>
            </div>

            <img
              src={image2}
              alt="Oculus VR"
              className="
                w-[240px]
                sm:w-[280px]
                lg:w-[320px]
                absolute
                bottom-0
                right-0
                object-contain
              "
            />
          </div>

          {/* Speakers */}
          <div
            className="
              py-8
              pl-5
              bg-gradient-to-br from-brandBlue to-brandBlue/90
              text-white
              rounded-2xl
              relative
              h-[260px]
              sm:h-[280px]
              lg:h-[300px]
              flex
              items-start
              overflow-hidden
            "
          >
            <div className="relative z-10">
              <div className="mb-4">
                <p className="mb-[2px] text-gray-300 text-sm">Enjoy</p>

                <p className="text-xl sm:text-2xl font-semibold mb-[2px]">
                  With
                </p>

                <p
                  className="
                    text-3xl
                    sm:text-4xl
                    xl:text-5xl
                    font-bold
                    opacity-40
                    mb-2
                  "
                >
                  Speakers
                </p>

                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandBlue"
                />
              </div>
            </div>

            <img
              src={image3}
              alt="Speaker"
              className="
                w-[160px]
                sm:w-[180px]
                lg:w-[200px]
                absolute
                bottom-0
                right-0
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category2;
