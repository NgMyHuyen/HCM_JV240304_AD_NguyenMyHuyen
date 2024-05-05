// import React from "react";
// import ItemPhone from "./Item.jsx";
// import phoneList from "./Data.json";

// export default function LisItems({ handleAddToCart }) {
//   return (
//     <>
//       <div className="container">
//         {phoneList.map((phone) => (
//           <div key={phone.id} className="phone-line">
//             <ItemPhone
//               img={phone.img}
//               name={phone.name}
//               price={phone.price}
//               handleAddToCart={handleAddToCart}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
/* */

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
