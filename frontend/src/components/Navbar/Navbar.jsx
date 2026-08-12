import { useState, useEffect } from "react";
import { IoMdSearch, IoMdCart, IoMdPerson } from "react-icons/io";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blogs",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 shadow-sm">
      <div className="py-4">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {MenuLinks.map((data, index) => (
                  <li key={index} className="group">
                    <a
                      href={data.link}
                      className="inline-block px-3 py-2 rounded-md font-medium text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer group-focus-within:text-primary dark:group-focus-within:text-primary duration-200" />
            </div>

            <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />

            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 duration-200 relative">
              <IoMdPerson className="text-xl" />
            </button>

            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800 duration-200 relative">
              <IoMdCart className="text-xl" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiOutlineX className="text-2xl" />
              ) : (
                <HiMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
            <span className="text-primary font-semibold tracking-widest text-xl uppercase">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 duration-200"
              aria-label="Close menu"
            >
              <HiOutlineX className="text-2xl" />
            </button>
          </div>

          <div className="p-4 border-b dark:border-gray-800">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary duration-200"
              />
              <IoMdSearch className="text-xl text-gray-500 dark:text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
            </div>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 duration-200 transition-all"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t dark:border-gray-800 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 duration-200">
              <IoMdPerson className="text-xl" />
              <span>My Account</span>
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium bg-primary text-white hover:bg-primary/90 duration-200">
              <div className="flex items-center gap-3">
                <IoMdCart className="text-xl" />
                <span>Cart</span>
              </div>
              <span className="w-6 h-6 bg-white text-primary text-sm rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
