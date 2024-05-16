import React, { useState } from "react";
import "./App.scss";

/* SHOPPING APP*/
import Header from "./Header.jsx";
import ListProducts from "./LisItems.jsx";
import CartItems from "./ShopCart.jsx";

export default function App() {
  /* SHOPPING APP*/
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const storedCartCount = storedCartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [cartItems, setCartItems] = useState(storedCartItems);
  const [showCart, setShowCart] = useState(false);

  const updateCart = (updatedCartItem) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItem));
    const updatedCartItemCount = updatedCartItem.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCartItems(updatedCartItem);
    setCartCount(updatedCartItemCount);
  };

  const handleAddToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      updateCart(updatedCart);
    } else {
      updateCart([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    updateCart(updatedCart);
  };

  const handleDecrease = (product) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const handleIncrease = (product) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
    console.log(showCart);
  };

  const calculateCartTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };
  return (
    /*Shopping App*/
    <div>
      <Header cartCount={storedCartCount} toggleCart={toggleCart} />
      <ListProducts handleAddToCart={handleAddToCart} />
      {showCart && (
        <CartItems
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      )}
    </div>
  );
}
