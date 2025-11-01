import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/register",
        formData
      );
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "750px", margin: "0 auto" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        />
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
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
