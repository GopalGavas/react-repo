import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

const ProductsRedux = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <div key={product.id} style={{ marginBottom: "15px" }}>
            <span>
              {product.name} - {product.price}
            </span>
            <button
              onClick={() => dispatch(addToCart(product))}
              style={{ marginLeft: "10px", padding: "8px 12px" }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsRedux;
