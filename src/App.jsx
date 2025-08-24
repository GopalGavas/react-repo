import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UseState from "./pages/30-7-2025/UseState";
import UseEffect from "./pages/30-7-2025/UseEffect";
import DynamicStyling from "./pages/03-08-2025/DynamicStyling";
import UseParams from "./pages/01-08-2025/UseParams";
import Product from "./pages/01-08-2025/Product";
import StyleComp from "./pages/02-08-2025/StyleComp";
import AddFruit from "./pages/02-08-2025/AddFruit";
import Greeting from "./pages/02-08-2025/Greeting";
import RegisterForm from "./pages/03-08-2025/RegisterForm";
import LoginForm from "./pages/03-08-2025/LoginForm";
import NotFound from "./pages/06-08-2025/NotFound";
import Products from "./pages/06-08-2025/Products";
import SingleProduct from "./pages/08-08-2025/SingleProduct";
import Cart from "./pages/08-08-2025/Cart";
import UseMemo from "./pages/10-08-2025/useMemo";
import Parent from "./pages/10-08-2025/Parent";
import UseCallback from "./pages/13-08-2025/UseCallback";
import UseRef from "./pages/13-08-2025/UseRef";
import CounterUseReducer from "./pages/13-08-2025/CounterUseReducer";
import ToggleMode from "./pages/22-08-2025/ToggleMode";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/useState" element={<UseState />}></Route>
        <Route path="/useEffect" element={<UseEffect />}></Route>
        <Route path="/use-params" element={<UseParams />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/styled-component" element={<StyleComp />}></Route>
        <Route path="/add-fruit" element={<AddFruit />}></Route>
        <Route
          path="/greeting"
          element={<Greeting name="Gopal" isLoggedIn={true} />}
        ></Route>
        <Route path="/dynamic-styling" element={<DynamicStyling />}></Route>
        <Route path="/register-form" element={<RegisterForm />}></Route>
        <Route path="/login-form" element={<LoginForm />}></Route>
        <Route path="/products-api" element={<Products />}></Route>
        <Route path="/products-api/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/memo-method" element={<Parent />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-reducer" element={<CounterUseReducer />} />
        <Route path="/toggle-theme" element={<ToggleMode />} />
      </Routes>
    </>
  );
}

export default App;
