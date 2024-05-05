// import React from "react";
//

// export default function Header({ handleToggle, cartCount }) {
//   return (
//     <header id="content-header">
//       <div className="header-content-text">
//         <p>Trang chủ</p>
//         <p>Danh sách sản phẩm</p>
//       </div>
//       <button className="header-icon" onClick={handleToggle}>
//
//       </button>
//       <span>{cartCount}</span>
//     </header>
//   );
// }

/* */
/* */

import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header({ cartCount, toggleCart }) {
  return (
    <div id="header">
      <div className="header-text">
        <a>Trang Chủ</a>
        <a>Danh sách sản phẩm</a>
      </div>
      <div className="shopping-icon">
        <button onClick={toggleCart}>
          <ShoppingCartIcon />
        </button>
        <span id="cartCount">{cartCount}</span>
      </div>
    </div>
  );
}
