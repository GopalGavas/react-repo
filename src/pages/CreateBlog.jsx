import { useState } from "react";
import api from "../api/axios";

export default function CreateBlog() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await api.post("/blogs", form);
    alert("Blog created!");
    setForm({ title: "", content: "", author: "" });
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>Create Blog</h1>

      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: 10,
          margin: "8px 0",
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />

      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
        rows={6}
        style={{
          width: "100%",
          padding: 10,
          margin: "8px 0",
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />

      <input
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: 10,
          margin: "8px 0",
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          background: "#222",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          marginTop: 10,
        }}
      >
        Create Blog
      </button>
    </div>
  );
}
