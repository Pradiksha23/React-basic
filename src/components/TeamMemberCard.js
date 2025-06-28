import React, { useState } from "react";

function TeamMemberCard({ name, role, photo }) {
  return (
    <div style={styles.card}>
      <img src={photo} alt={name} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.role}>{role}</p>
      </div>
    </div>
  );
}

export default function SingleInputCard() {
  const [name, setName] = useState("Your Name");

  return (
    <div style={styles.container}>
      <h2>👤 Enter Your Name</h2>
      <input
        type="text"
        placeholder="Type name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <TeamMemberCard
        name={name}
        role="Frontend Developer"
        photo="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Segoe UI, sans-serif",
  },
  input: {
    padding: "10px 14px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "30px",
    width: "250px",
  },
  card: {
    width: "240px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    margin: "auto",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
  },
  info: {
    padding: "16px",
  },
  name: {
    margin: "10px 0 4px",
    fontSize: "20px",
    color: "#333",
  },
  role: {
    margin: 0,
    fontSize: "16px",
    color: "#777",
  },
};
