"use state";
"use client";
import React from "react";
import Product from "./Product";
import { productList } from "@/utils/constants";

const Body = () => {
  if (!productList) return;
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {productList.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
