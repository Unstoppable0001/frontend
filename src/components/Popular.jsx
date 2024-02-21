import React from "react";
import model from "../assets/popular.png";

const Popular = () => {
  const categories = [
    "Flight", "Bus", "Entertainment", "Jewellery", "Medicines", "Hosting",
    "Flowers", "Beauty", "OTT", "Bills", "Kids", "Travel", "Food", "Eyewear",
    "Lifestyle", "Kitchen", "Recharge", "Electronics", "Hotel", "Footwear",
    "Lab", "Education", "Services", "Furniture", "Fashion", "Pizza", "Bike", "Novelties"
  ];

  return (
    <div className="px-5 md:px-28 py-8 flex md:flex-row flex-col gap-5 bg-[#f8f8f8]">
      <div className="h-[500px] w-full md:w-auto border">
        <img src={model} alt="" className="h-full w-full" />
      </div>
      <div className="flex-grow">
        <div className="font-bold py-3 text-xl my-4">
          <span className="border-b-4 border-pink-600 py-3">Popular </span>
          Categories
        </div>
        <div className="grid grid-cols-4 w-full font-semibold overflow-auto">
          {categories.map((category, index) => (
            <div key={index} className="border text-center py-4">{category}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
