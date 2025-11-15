export default function BlogCard({ blog, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #e0e0e0",
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      <h2 style={{ margin: 0 }}>{blog.title}</h2>

      <p style={{ color: "#555", marginTop: 6 }}>
        By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      <p style={{ color: "#444", marginTop: 10 }}>
        {blog.content.slice(0, 120)}...
      </p>

      <div style={{ marginTop: 10 }}>
        <button
          style={{
            padding: "6px 14px",
            border: "none",
            background: "#333",
            color: "white",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
}
