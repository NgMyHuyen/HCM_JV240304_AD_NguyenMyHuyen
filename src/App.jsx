import React, { useState } from "react";
import "./App.scss";

/*To do List*/
import ListJobs from "./ListJobs";
import InputJobs from "./InputJobs";
/* SHOPPING APP*/
import Header from "./Header.jsx";
import ListProducts from "./LisItems.jsx";
import CartItems from "./ShopCart.jsx";

export default function App() {
  /* To do List*/
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );
  const [error, setError] = useState("");

  const addJobs = (event) => {
    event.preventDefault();
    const jobName = event.target[0].value;
    if (jobName === "") {
      setError("Bạn chưa nhập tên công việc");
    } else {
      const newJob = {
        id: Math.floor(Math.random() * 1000),
        jobName: jobName,
        isChecked: false,
      };
      setJobs([...jobs, newJob]);
      setError("");
      alert("Thêm công việc thành công");
      localStorage.setItem("jobs", JSON.stringify([jobs, newJob]));
      event.target.reset();
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    const index = jobs.findIndex((job) => job.id == id);
    jobs.splice(index, 1);
    setJobs([...jobs]);
    localStorage.setItem("jobs", JSON.stringify([...jobs]));
  };

  const handleCheck = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    jobs[index].isChecked = !jobs[index].isChecked;
    console.log(jobs);
    setJobs([...jobs]);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  };
  let count = 0;
  for (let i in jobs) {
    if (jobs[i].isChecked === true) count++;
  }

  const handleEdit = (id) => {
    const index = jobs.findIndex((job) => job.id == id);
    console.log(index, "index");
    console.log(jobs[index].jobName);
    const editJobname = prompt("Nhập tên công việc mới", jobs[index].jobName);
    jobs[index].jobName = editJobname;
    setJobs([...jobs]);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  };

  /* SHOPPING APP*/
  // const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  // const storedCartCount = storedCartItems.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );

  // const [cartItems, setCartItems] = useState(storedCartItems);
  // const [showCart, setShowCart] = useState(false);

  // const updateCart = (updatedCartItem) => {
  //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItem));
  //   const updatedCartItemCount = updatedCartItem.reduce(
  //     (total, item) => total + item.quantity,
  //     0
  //   );

  //   setCartItems(updatedCartItem);
  //   setCartCount(updatedCartItemCount);
  // };

  // const handleAddToCart = (product) => {
  //   const itemIndex = cartItems.findIndex((item) => item.id === product.id);
  //   if (itemIndex !== -1) {
  //     const updatedCart = [...cartItems];
  //     updatedCart[itemIndex].quantity += 1;
  //     updateCart(updatedCart);
  //   } else {
  //     updateCart([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };

  // const handleRemoveFromCart = (product) => {
  //   const updatedCart = cartItems.filter((item) => item.id !== product.id);
  //   updateCart(updatedCart);
  // };

  // const handleDecrease = (product) => {
  //   const updatedCart = cartItems.map((item) => {
  //     if (item.id === product.id) {
  //       const newQuantity = item.quantity - 1;
  //       return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
  //     }
  //     return item;
  //   });
  //   updateCart(updatedCart);
  // };

  // const handleIncrease = (product) => {
  //   const updatedCart = cartItems.map((item) => {
  //     if (item.id === product.id) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     }
  //     return item;
  //   });
  //   updateCart(updatedCart);
  // };

  // const toggleCart = () => {
  //   setShowCart(!showCart);
  //   console.log(showCart);
  // };

  // const calculateCartTotal = () => {
  //   let totalPrice = 0;
  //   cartItems.forEach((item) => {
  //     totalPrice += item.price * item.quantity;
  //   });
  //   return totalPrice.toFixed(2);
  // };

  return (
    /*ToDoList*/
    <>
      <div>
        <h1>Danh sách công việc</h1>
        <InputJobs addJobs={addJobs} error={error} />
        <ListJobs
          listJob={jobs}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          count={count}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );

  /*Shopping App*/
  //   <div>
  //     <Header cartCount={storedCartCount} toggleCart={toggleCart} />
  //     <ListProducts handleAddToCart={handleAddToCart} />
  //     {showCart && (
  //       <CartItems
  //         cartItems={cartItems}
  //         handleRemoveFromCart={handleRemoveFromCart}
  //         handleDecrease={handleDecrease}
  //         handleIncrease={handleIncrease}
  //       />
  //     )}
  //   </div>
  // );
}
