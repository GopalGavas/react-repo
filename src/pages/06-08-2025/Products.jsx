import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      window.scrollTo(0, 0);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        if (res) {
          setData(res.data);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Fetch Products
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "0 20px",
        }}
      >
        {data.length === 0 ? (
          <p>Products Loading...</p>
        ) : (
          data.map((product) => (
            <div
              key={product.id}
              style={{
                width: "220px",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
                src={product.image}
                alt={product.title}
              ></img>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  height: "40px",
                  overflow: "hidden",
                }}
              >
                {product.title}
              </p>
              <p style={{ fontSize: "16px", color: "#333" }}>
                ${product.price}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Products;
