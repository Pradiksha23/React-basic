import React, { useState } from 'react';

function Card1() {
  const [formData, setFormData] = useState({ name: '', role: '', photo: '' });
  const [teamList, setTeamList] = useState([]);
  const [showCards, setShowCards] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addAnother = () => {
    if (!formData.name || !formData.role || !formData.photo) {
      alert('Please fill all fields.');
      return;
    }
    setTeamList((prev) => [...prev, formData]);
    setFormData({ name: '', role: '', photo: '' });
  };

  const createCards = () => {
    if (formData.name && formData.role && formData.photo) {
      setTeamList((prev) => [...prev, formData]);
      setFormData({ name: '', role: '', photo: '' });
    }
    if (teamList.length === 0 && !formData.name) {
      alert('Please add at least one member.');
      return;
    }
    setShowCards(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Team Member Entry</h2>

      {!showCards && (
        <div>
          <input
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleInput}
            style={{ padding: '8px', margin: '5px', width: '200px' }}
          />
          <br />
          <input
            name="role"
            placeholder="Enter Role"
            value={formData.role}
            onChange={handleInput}
            style={{ padding: '8px', margin: '5px', width: '200px' }}
          />
          <br />
          <input
            name="photo"
            placeholder="Enter Photo URL"
            value={formData.photo}
            onChange={handleInput}
            style={{ padding: '8px', margin: '5px', width: '200px' }}
          />
          <br />
          <button onClick={addAnother} style={{ marginRight: '10px' }}>Add Another</button>
          <button onClick={createCards}>Create Cards</button>
        </div>
      )}

      {showCards && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          {teamList.map((member, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              padding: '15px',
              width: '200px',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <img src={member.photo} alt={member.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card1;
