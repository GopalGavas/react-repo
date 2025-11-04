import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        formData,
        { withCredentials: true }
      );
      setMessage(res.data.message);
      setUserName(res.data?.name || "");
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong");
      setUserName("");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {userName && <p>Hello, {userName} 👋</p>} {/* 👈 dynamic greeting */}
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "750px", margin: "0 auto" }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
