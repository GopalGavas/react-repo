import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedData);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "30px",
        }}
      >
        Your cart is empty.
      </p>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "30px auto", padding: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Your Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            gap: "20px",
            padding: "20px",
            marginBottom: "20px",
            backgroundColor: "#fffdfdff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
            />
          </div>
          <div>
            <h4 style={{ margin: "0 0 5px" }}>{item.title}</h4>
            <p style={{ fontWeight: "bold", margin: "0", color: "#555" }}>
              ${item.price}
            </p>
          </div>
          <button
            onClick={() => handleRemoveItem(item.id)}
            style={{
              backgroundColor: "red",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
