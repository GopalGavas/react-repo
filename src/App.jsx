import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UseState from "./pages/30-7-2025/UseState";
import UseEffect from "./pages/30-7-2025/UseEffect";

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
      </Routes>
    </>
  );
}

export default App;
