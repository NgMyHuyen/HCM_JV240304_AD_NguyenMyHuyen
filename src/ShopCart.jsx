import DeleteIcon from "@mui/icons-material/Delete";

export default function CartItems({
  cartItems,
  handleRemoveFromCart,
  handleDecrease,
  handleIncrease,
}) {
  return (
    <div className="cart-items-container">
      <h1 id="cart-name">Cart</h1> <hr />
      {cartItems.length === 0 ? (
        <span>
          <h3>Chưa có sản phẩm trong giỏ hàng</h3>
        </span>
      ) : (
        <>
          {cartItems?.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <div className="position-img-name-item">
                  <img className="img-in-cart" src={item.img} />
                  <span> {item.name}</span>
                </div>
              </div>

              <div className="btn-cart">
                {/* <div className="quantity-controls"> */}
                <button onClick={() => handleDecrease(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item)}>+</button>
                {/* </div> */}

                <button
                  className="trash"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
