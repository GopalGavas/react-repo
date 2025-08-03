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
        <Route path="/dynamic-styling" element={<DynamicStyling />}></Route>
      </Routes>
    </>
  );
}

export default App;
