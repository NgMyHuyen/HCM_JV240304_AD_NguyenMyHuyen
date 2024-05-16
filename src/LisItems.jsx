import React from "react";
import ProductItem from "./Item";
import data from "./Data.json";

export default function ListProducts({ handleAddToCart }) {
  return (
    <div id="products">
      <h1>Danh sách sản phẩm</h1>
      <div className="products">
        {data.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
