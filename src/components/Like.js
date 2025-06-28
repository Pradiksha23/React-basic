import React, { useState } from "react";

function Like() {
  const [liked, setLiked] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🚀 React Interactive Widget</h2>
      <div style={styles.section}>
        <button onClick={() => setLiked(!liked)}>
          {liked ? "❤️ You Liked This!" : "🤍 Like"}
        </button>
      </div>

      {/* Live Input Section */}
      <div style={styles.section}>
        <input
          type="text"
          value={input}
          placeholder="Type anything..."
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <p style={styles.output}>
          📝 Live Preview: <span style={styles.previewText}>{input}</span>
        </p>  
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "500px",
    margin: "40px auto",
    background: "linear-gradient(135deg,rgb(54, 216, 237),rgb(207, 117, 147))",
    boxShadow: "10px 10px 20px 10px rgb(207, 117, 147,0.1)",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center",
  },
  heading: {
    color: "#333",
    marginBottom: "32px",
    fontSize: "24px",
  },
  section: {
    marginBottom: "30px",
  },
  button: {
    fontSize: "16px",
    padding: "12px 24px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#ccc",
    color: "#333",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  buttonLiked: {
    backgroundColor: "#0077ff",
    color: "#fff",
  },
  input: {
    padding: "12px 16px",
    fontSize: "16px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    outline: "none",
    transition: "border 0.3s",
  },
  output: {
    marginTop: "16px",
    fontSize: "18px",
    color: "#444",
  },
  previewText: {
    color: "#0077ff",
    fontWeight: "bold",
  },
};
export default Like;
