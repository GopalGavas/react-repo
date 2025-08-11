import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        if (res) {
          setProduct(res.data);
        }
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (existingCart.find((item) => item.id === product.id)) {
      alert("Item already exists in the cart");
    } else {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Product added to cart successfully");
    }
  };

  if (!product) {
    return <p style={{ textAlign: "center" }}>Loading product...</p>;
  }

  return (
    <div style={{ maxWidth: "750px", padding: "10px", margin: "50px auto" }}>
      <di style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "300px", objectFit: "contain" }}
        ></img>
        <div>
          <h2>{product.title}</h2>
          <p style={{ color: "#666" }}>{product.description}</p>
          <p style={{ fontWeight: "bold", marginTop: "5px" }}>
            ${product.price}
          </p>
          <button
            style={{
              backgroundColor: "#646cff",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "5px",
              marginTop: "30px",
              fontWeight: "bold",
            }}
            onClick={handleToCart}
          >
            Add to cart
          </button>
        </div>
      </di>
    </div>
  );
};

export default SingleProduct;
