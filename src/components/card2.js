import React, { useState } from "react";
import './styles.css';

function Card2() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState(null);
  const [members, setMembers] = useState([]);
  const [showCards, setShowCards] = useState(false);

  const handleAddMember = () => {
    if (!name || !role || !photo) {
      alert("Please fill all fields and upload a photo.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setMembers((prev) => [...prev, { name, role, photo: reader.result }]);
      setName("");
      setRole("");
      setPhoto(null);
      document.getElementById("photoInput").value = "";
    };
    reader.readAsDataURL(photo);
  };
console.log('current Value',members);
  const handleCreateCards = () => {
    if (members.length === 0) {
      alert("No members added!");
      return;
    }
    setShowCards(true);
  };

  return (
    <div className="container">
      <h1>Team Member Form</h1>
      <div className="form">
        <label>Name </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Role </label>
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <label>Photo</label>
        <input
          id="photoInput"
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
        <div className="button-group">
          <button onClick={handleAddMember}>Add Member</button>
          <button onClick={handleCreateCards}>Create Cards</button>
        </div>
      </div>

      {showCards && (
        <div className="cards">
          {members.map((member, index) => (
            <div key={index} className="card">
                <div ><img src={member.photo} alt={`${member.name}`} /></div>
                <div className="field">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p></div>
                </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card2;
