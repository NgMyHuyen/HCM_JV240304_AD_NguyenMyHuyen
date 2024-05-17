export default function Product({ product, handleAddToCart }) {
  return (
    <>
      <div className="product">
        <img src={product.img} alt="Photo" />
        <p id="nameProduct">Điện thoại {product.name}</p>
        <span id="pPrice">{product.price}₫</span>
        <div className="buyAndSellContainer">
          <button
            type="button"
            className="btn-add-cart"
            onClick={() => handleAddToCart(product)}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
}
