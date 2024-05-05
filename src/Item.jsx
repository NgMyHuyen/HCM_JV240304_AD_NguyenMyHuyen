// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import React from "react";
// export default function ItemPhone({
//   img,
//   name,
//   price,
//   phone,
//   handleAddToCart,
// }) {
//   const addToCart = () => {
//     handleAddToCart(phone);
//   };
//   return (
//     <>
//       <div className="element">
//         <img src={phone.img} alt="Photo" />
//         <p id="name"> {phone.name}</p>
//         <span id="price">{phone.price} đ</span>
//         <div className="addCart">
//           <button type="submit" onClick={addToCart} className="btn-add">
//             <ShoppingCartIcon />
//             Thêm vào giỏ hàng
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
/* */
import React from "react";

export default function ProductItem({ product, handleAddToCart }) {
  const addToCart = () => {
    handleAddToCart(product);
  };

  return (
    <div className="product">
      <img src={product.img} alt={product.name} />
      <span>{product.name}</span>
      <p>{product.price}</p>
      <button onClick={addToCart}>Thêm vào giỏ hàng</button>
    </div>
  );
}
