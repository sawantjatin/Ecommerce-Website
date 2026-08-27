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
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">Our Products</h2>

          <p className="text-xs text-gray-400 mt-1">Explore Our Products</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
