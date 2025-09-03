import ProductsRedux from "./ProductsRedux";
import CartRedux from "./CartRedux";

const ReduxShoppingCart = () => {
  return (
    <div style={{ display: "flex", gap: "50px", padding: "20px" }}>
      <div style={{ flex: 1 }}>
        <ProductsRedux />
      </div>
      <div style={{ flex: 1 }}>
        <CartRedux />
      </div>
    </div>
  );
};

export default ReduxShoppingCart;
