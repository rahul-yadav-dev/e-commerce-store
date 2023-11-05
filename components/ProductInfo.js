"use client";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductInfo = ({ name, price, description }) => {
  const [cartValue, setCartValue] = useState(0);
  console.log(name);
  function handleIncreaseCart() {
    setCartValue(cartValue + 1);
  }

  function handleDecreaseCart() {
    cartValue == 0 ? setCartValue(0) : setCartValue(cartValue - 1);
  }

  return (
    <div className="mr-80 border   border-red-500 py-20 pl-8 pr-32  ml-28  ">
      <h1 className="text-orange-500 font-bold text-sm tracking-wide pb-3 ">
        {name}
      </h1>
      <h1 className="font-extrabold  text-3xl">{name}</h1>
      <h1 className="font-thin mt-4 ">
        {description}
      </h1>
      <div className="mt-5 ">
        <span className="text-2xl mt-6 font-bold">${price}</span>
        <span className="text-xl font-semibold rounded-lg bg-orange-200 px-2 mt-6 mb-4 text-orange-500 ml-5">
          50%
        </span>
      </div>
      <h1 className="line-through font-semibold text-gray-400">$125.00</h1>

      <div className="flex mt-2">
        <div className=" p-2 rounded-lg px-8 flex items-center bg-gray-200">
          <button
            className=" pl-0 ml-0 cursor-pointer text-orange-400"
            onClick={handleDecreaseCart}
          >
            -
          </button>
          <h1 className="text-black mx-10">{cartValue}</h1>
          <button
            className=" cursor-pointer text-orange-500"
            onClick={handleIncreaseCart}
          >
            +
          </button>
        </div>

        <button
          className="bg-orange-400 p-2 ml-4 rounded-lg text-white px-8 flex"
          onClick={handleIncreaseCart}
        >
          <ShoppingCartIcon /> +
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
