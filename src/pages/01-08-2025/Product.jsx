import { useEffect } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { productId } = useParams();
  useEffect(() => {
    if (productId) {
    }
  }, [productId]);

  const productData = [
    {
      id: 1,
      name: "t-shirt 1",
      price: 100,
      description: "Cotton T-shirt",
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
    {
      id: 2,
      name: "t-shirt 2",
      price: 200,
      description: "V-neck T-shirt",
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
    {
      id: 3,
      name: "t-shirt 3",
      price: 300,
      description: "Polo T-shirt",
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
    {
      id: 4,
      name: "t-shirt 4",
      price: 400,
      description: "Full Sleeve T-shirt",
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
    {
      id: 5,
      name: "t-shirt 5",
      price: 500,
      description: "Full Sleeve T-shirt",
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
  ];

  const product = productData.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <>
      <h3>Product Details</h3>
      <div
        style={{
          marginTop: "30px",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <img src={product.image} style={{ width: "200px" }}></img>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4>&#8377;{product.price}</h4>
      </div>
    </>
  );
};

export default Product;
