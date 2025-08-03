import { useState } from "react";
import { useNavigate } from "react-router";

const UseParams = () => {
  const router = useNavigate();
  const [tshirts, setTshirts] = useState([
    {
      id: 1,
      name: "t-shirt 1",
      price: 100,
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
    {
      id: 2,
      name: "t-shirt 2",
      price: 200,
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
    {
      id: 3,
      name: "t-shirt 3",
      price: 300,
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
    {
      id: 4,
      name: "t-shirt 4",
      price: 400,
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
    {
      id: 5,
      name: "t-shirt 5",
      price: 500,
      image:
        "https://images-cdn.ubuy.co.in/6603c87ac6b27a36b34f9728-levi-s-boys-short-sleeve-batwing.jpg",
    },
    ,
  ]);

  console.log(tshirts);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "50px",
        marginTop: "40px",
      }}
    >
      {tshirts.map((product) => (
        <div
          key={product.id}
          onClick={() => router(`/product/${product.id}`)}
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <img src={product.image} style={{ width: "150px" }}></img>
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default UseParams;
