import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCarSide />,
      title: "Free Shipping",
      description: "Free Shipping on All Orders",
    },
    {
      icon: <FaCheckCircle />,
      title: "Safe Money",
      description: "100% Money Back",
    },
    {
      icon: <FaWallet />,
      title: "Secure Payment",
      description: "100% Secure Payment",
    },
    {
      icon: <FaHeadphonesAlt />,
      title: "Online Support 24/7",
      description: "Technical Support 24/7",
    },
  ];

  return (
    <section className="bg-[#111827] py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-center gap-3 
                         justify-center"
            >
              <div className="shrink-0 text-2xl text-red-500">
                {service.icon}
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  {service.title}
                </h3>

                <p className="text-[9px] sm:text-[10px] text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
