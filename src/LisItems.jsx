import React from "react";
import data from "./data.json";
import Product from "./Item.jsx";

export default function ListProducts({ cartItems, updateCart }) {
  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      updateCart(updatedCart);
    } else {
      updateCart([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div id="products">
      <h1>Danh sách sản phẩm</h1>
      <div className="products">
        {data.map((product) => (
          <Product
            key={product.id}
            product={product}
            // handleAddToCart={() => addToCart(product)}
            handleAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
