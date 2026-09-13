import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/Products/Products";

const BannerData = {
  discount: "50% OFF",
  title: "Fine Smile",
  date: "from 1st Jan to 31st Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  bgColor: "#f42c37",
};

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
      offset: 80,
      mirror: false,
    });
  }, []);
  //Rollback to the previous setup -> git reset --hard Used
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition-colors duration-200">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
    </div>
  );
};

export default App;
