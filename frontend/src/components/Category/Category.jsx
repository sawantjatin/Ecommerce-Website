import React from "react";

import image1 from "../../assets/category/earphone.png";
import image2 from "../../assets/category/watch.png";
import image3 from "../../assets/category/macbook.png";

import Button from "../Shared/Button";

const Category = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Earphone */}
          <div
            className="
              py-8
              pl-5
              bg-gradient-to-br from-black to-black/70
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
                <p className="mb-[2px] text-gray-400 text-sm">Enjoy</p>

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
                  Earphone
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
              alt="Earphone"
              className="
                w-[220px]
                sm:w-[250px]
                lg:w-[280px]
                absolute
                bottom-0
                right-0
                object-contain
              "
            />
          </div>

          {/* Smartwatch */}
          <div
            className="
              py-8
              pl-5
              bg-gradient-to-br from-brandYellow to-brandYellow/90
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
                <p className="mb-[2px] text-gray-200 text-sm">Enjoy</p>

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
                  Gadget
                </p>

                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandYellow"
                />
              </div>
            </div>

            <img
              src={image2}
              alt="Smartwatch"
              className="
                w-[220px]
                sm:w-[250px]
                lg:w-[280px]
                absolute
                right-[-20px]
                bottom-0
                object-contain
              "
            />
          </div>

          {/* Laptop */}
          <div
            className="
              col-span-1
              sm:col-span-2
              lg:col-span-2
              py-8
              pl-5
              bg-gradient-to-br from-primary to-primary/90
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
                  Laptop
                </p>

                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-primary"
                />
              </div>
            </div>

            <img
              src={image3}
              alt="Laptop"
              className="
                w-[250px]
                sm:w-[300px]
                lg:w-[350px]
                absolute
                top-1/2
                -translate-y-1/2
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

export default Category;
