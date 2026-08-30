import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa6";

const ProductCard = ({ product, delay }) => {
  return (
    <article data-aos="fade-up" data-aos-delay={delay} className="group motion-card overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800/70">
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gray-50 p-5 sm:h-56 dark:bg-gray-900/60">
        <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">New</span>
        <button aria-label={`Save ${product.title}`} className="interactive-button absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white text-gray-400 shadow-sm hover:text-primary dark:bg-gray-800 dark:text-gray-300">
          <FaHeart className="text-xs" />
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="motion-product h-full w-full object-contain transition-transform duration-500 ease-out"
        />
      </div>

      <div className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Eshop pick</p>
        <h3 className="mt-1 truncate text-base font-semibold text-gray-900 dark:text-white">
          {product.title}
        </h3>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-lg font-bold text-gray-900 dark:text-white">${product.price}</p>
          <button aria-label={`Add ${product.title} to cart`} className="interactive-button grid h-9 w-9 place-items-center rounded-full bg-primary text-white shadow-sm hover:bg-red-600 hover:shadow-md">
            <FaPlus className="text-xs" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
