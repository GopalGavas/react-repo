import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </>
  );
}

export default Navbar;
