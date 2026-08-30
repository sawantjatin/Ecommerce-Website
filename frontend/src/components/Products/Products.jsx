import React from "react";
import ProductCard from "./ProductCard";

import product1 from "../../assets/products/p-1.jpg";
import product2 from "../../assets/products/p-2.jpg";
import product3 from "../../assets/products/p-3.jpg";
import product4 from "../../assets/products/p-4.jpg";
import product5 from "../../assets/products/p-5.jpg";
import product6 from "../../assets/products/p-6.jpg";
import product7 from "../../assets/products/p-7.jpg";
import product8 from "../../assets/products/p-8.png";

const Products = () => {
  const products = [
    {
      id: 1,
      image: product1,
      title: "Beast Headphone",
      price: 120,
    },
    {
      id: 2,
      image: product2,
      title: "Rocky Mountain",
      price: 220,
    },
    {
      id: 3,
      image: product3,
      title: "Goggle",
      price: 320,
    },
    {
      id: 4,
      image: product4,
      title: "Printed",
      price: 320,
    },
    {
      id: 5,
      image: product5,
      title: "Beast Headphone",
      price: 120,
    },
    {
      id: 6,
      image: product6,
      title: "Rocky Mountain",
      price: 220,
    },
    {
      id: 7,
      image: product7,
      title: "Goggle",
      price: 320,
    },
    {
      id: 8,
      image: product8,
      title: "Printed",
      price: 320,
    },
  ];

  return (
    <section id="shop" className="py-14 sm:py-16">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">New arrivals</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Featured products</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Curated tech made for your everyday.</p>
          </div>

          <button className="interactive-button w-fit rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white">
            View all products
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 75} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
