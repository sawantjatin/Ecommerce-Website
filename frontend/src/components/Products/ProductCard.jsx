import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <div className="bg-white rounded-sm overflow-hidden h-32 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-2">
        <h3 className="text-[8px] sm:text-[9px] font-semibold text-white">
          {product.title}
        </h3>

        <p className="text-[8px] sm:text-[9px] font-bold text-white mt-0.5">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
