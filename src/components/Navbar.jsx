import { useNavigate } from "react-router";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}

export default Navbar;
