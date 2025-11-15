import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch Blog
  const fetchBlog = async () => {
    const res = await api.get(`/blogs/${id}`);
    setBlog(res.data.blog);
  };

  // Fetch Comments
  const fetchComments = async () => {
    const res = await api.get(`/comments/blog/${id}`);
    setComments(res.data.comments);
  };

  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, []);

  // Create Comment
  const handleCreateComment = async () => {
    if (!newComment.trim()) return;

    await api.post(`/comments/${id}`, {
      content: newComment,
      createdBy: "Guest User",
    });

    setNewComment("");
    fetchComments();
  };

  // Reply to comment
  const handleReply = async (commentId, replyText, setReplyText, closeBox) => {
    if (!replyText.trim()) return;

    await api.post(`/comments/${commentId}/reply`, {
      content: replyText,
      createdBy: "Guest User",
    });

    closeBox();
    fetchComments();
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 800, margin: "40px auto" }}>
      {/* Blog Content */}
      <h1>{blog.title}</h1>
      <p style={{ color: "#555" }}>By {blog.author}</p>

      <p style={{ marginTop: 20, lineHeight: 1.6 }}>{blog.content}</p>

      <hr style={{ margin: "30px 0" }} />

      {/* Comment Input */}
      <h3>Comments</h3>

      <textarea
        style={{ width: "100%", padding: 10 }}
        rows={3}
        placeholder="Write a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />

      <button
        onClick={handleCreateComment}
        style={{
          marginTop: 10,
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        Post Comment
      </button>

      {/* Comments List */}
      <div style={{ marginTop: 30 }}>
        {comments.map((c) => (
          <CommentCard key={c._id} comment={c} onReply={handleReply} />
        ))}
      </div>
    </div>
  );
}

function CommentCard({ comment, onReply }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 12,
        borderRadius: 6,
        marginBottom: 15,
      }}
    >
      <strong>{comment.createdBy}</strong>
      <p>{comment.content}</p>

      <button
        onClick={() => setShowReplyBox(!showReplyBox)}
        style={{
          background: "none",
          border: "none",
          color: "#007bff",
          cursor: "pointer",
          fontSize: 13,
          padding: 0,
        }}
      >
        Reply
      </button>

      {showReplyBox && (
        <div style={{ marginTop: 10 }}>
          <textarea
            style={{ width: "100%", padding: 6 }}
            rows={2}
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button
            onClick={() =>
              onReply(comment._id, replyText, setReplyText, () =>
                setShowReplyBox(false)
              )
            }
            style={{
              marginTop: 6,
              padding: "5px 12px",
              cursor: "pointer",
            }}
          >
            Submit Reply
          </button>
        </div>
      )}

      {/* Replies */}
      {comment.replies?.length > 0 && (
        <div style={{ marginTop: 12, paddingLeft: 20 }}>
          {comment.replies.map((r) => (
            <div
              key={r._id}
              style={{
                background: "#f5f5f5",
                padding: 8,
                borderRadius: 5,
                marginBottom: 8,
              }}
            >
              <strong>{r.createdBy}</strong>
              <p>{r.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
