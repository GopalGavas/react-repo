import { useEffect, useState } from "react";
import api from "../api/axios";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const res = await api.get("/blogs");
    setBlogs(res.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto" }}>
      <h1>All Blogs</h1>

      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          blog={blog}
          onClick={() => navigate(`/blogs/${blog._id}`)}
        />
      ))}
    </div>
  );
}
