import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";

const CartRedux = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {items.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>
                  {item.name} - ₹{item.price} x {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  style={{
                    padding: "8px",
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  style={{
                    padding: "8px",
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{
                    padding: "8px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <h3>Total: {total}</h3>
          <button
            onClick={() => dispatch(clearCart())}
            style={{
              padding: "8px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartRedux;
