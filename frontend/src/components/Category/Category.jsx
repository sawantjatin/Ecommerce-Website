import React from "react";
import image1 from "../../assets/category/earphone.png";
import image2 from "../../assets/category/watch.png";
import image3 from "../../assets/category/macbook.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid">
          {/* first col */}
          <div className="col-span-4">
            <img
              src={image1}
              alt="Earphone"
              className="w-full h-full object-cover"
            />
          </div>
          {/* second col */}
          <div className="col-span-4">
            <img
              src={image2}
              alt="Watch"
              className="w-full h-full object-cover"
            />
          </div>
          {/* third col */}
          <div className="col-span-4">
            <img
              src={image3}
              alt="Macbook"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
