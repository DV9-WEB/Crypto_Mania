import ProductCard from "./ProductCard";
import React from "react";

const Product = ({ data }) => {
  return (
    <div className="text-white bg-black">
      <ProductCard data={data} />
    </div>
  );
};

export default Product;
