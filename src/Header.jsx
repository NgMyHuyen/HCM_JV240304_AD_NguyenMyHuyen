import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header({ toggleCart, cartCount }) {
  return (
    <header id="content-header">
      <div className="header-content-text">
        <p>Trang chủ</p>
        <p>Danh sách sản phẩm</p>
      </div>
      <div className="btn-count">
        <button className="header-icon" onClick={toggleCart}>
          <ShoppingCartIcon />
        </button>
        <span>{cartCount}</span>
      </div>
    </header>
  );
}
