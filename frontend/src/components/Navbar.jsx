import React from "react";
import { Search, User, Heart, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-base-100">
      <div className="border-b border-base-300">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <p className="text-base-content/70">
            📦 Free shipping on orders above ₹999
          </p>

          <div className="hidden md:flex items-center gap-5 text-base-content/70">
            <span className="cursor-pointer hover:text-primary">
              Track Order
            </span>
            <span className="text-base-content/30">|</span>
            <span className="cursor-pointer hover:text-primary">
              Help Center
            </span>
            <span className="text-base-content/30">|</span>
            <span className="cursor-pointer hover:text-primary">Returns</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-base-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-6">
            <div className="text-3xl font-bold tracking-tight min-w-fit">
              Shop<span className="text-primary">Ease</span>
              <span className="text-primary">.</span>
            </div>

            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="join w-full">
                <select className="select select-bordered join-item w-40">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home & Kitchen</option>
                  <option>Beauty</option>
                  <option>Sports</option>
                </select>

                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  className="input input-bordered join-item flex-1"
                />

                <button className="btn btn-neutral join-item">
                  <Search size={20} />
                </button>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6 ml-auto">
              <button className="flex items-center gap-2 hover:text-primary">
                <User size={22} />
                <span className="whitespace-nowrap">Login / Signup</span>
              </button>

              <button className="indicator">
                <span className="indicator-item badge badge-primary badge-xs">
                  0
                </span>

                <Heart size={23} className="hover:text-primary" />
              </button>

              <button className="indicator">
                <span className="indicator-item badge badge-primary badge-xs">
                  0
                </span>

                <ShoppingCart size={23} className="hover:text-primary" />
              </button>
            </div>

            <div className="dropdown dropdown-end lg:hidden ml-auto">
              <label tabIndex={0} className="btn btn-ghost">
                ☰
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-50 w-56 p-2 shadow-lg"
              >
                <li>
                  <a>
                    <User size={18} />
                    Login / Signup
                  </a>
                </li>

                <li>
                  <a>
                    <Heart size={18} />
                    Wishlist
                  </a>
                </li>

                <li>
                  <a>
                    <ShoppingCart size={18} />
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="flex md:hidden mt-4">
            <div className="join w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="input input-bordered join-item w-full"
              />

              <button className="btn btn-neutral join-item">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
