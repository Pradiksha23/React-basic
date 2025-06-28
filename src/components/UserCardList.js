import React, { useEffect, useState } from 'react';
import './UserCardList.css';

function UserCardList() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFiltered(
      users.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`user-container ${theme}`}>
      <div className="header-bar">
        <h1 className="water-heading"> User Cards</h1>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="user-grid">
          {filtered.map((user) => (
            <div className="flip-card" key={user.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>{user.name}</h3>
                  <p>✉️ {user.email}</p>
                  <p>📞 {user.phone}</p>
                </div>
                <div className="flip-card-back">
                  <h4>🏠 Address</h4>
                  <p>{user.address.street}, {user.address.city}</p>
                  <p>🧭 {user.address.geo.lat}, {user.address.geo.lng}</p>
                  <p>🌐 {user.website}</p>
                  <p>🏢 {user.company.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserCardList;
