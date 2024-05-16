import React from "react";

export default function Header({ handleToggle, cartCount }) {
  return (
    <header id="content-header">
      <div className="header-content-text">
        <p>Trang chủ</p>
        <p>Danh sách sản phẩm</p>
      </div>
      <button className="header-icon" onClick={handleToggle}></button>
      <span>{cartCount}</span>
    </header>
  );
}
