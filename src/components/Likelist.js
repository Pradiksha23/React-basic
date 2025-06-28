import { useState } from 'react';
import './Likelist.css'; 

function Likelist() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [likedMessage, setLikedMessage] = useState(null);

  function addition() {
    if (input.trim() === '') return;
    setList((prev) => [...prev, { text: input, liked: false }]);
    setInput('');
  }

  function toggleLike(index) {
    setList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, liked: !item.liked } : item
      )
    );

    if (!list[index].liked) {
      setLikedMessage('❤️ You have liked this!');
      setTimeout(() => setLikedMessage(null), 2000);
    }
  }

  return (
    <div className="container">
      <h1>Content List</h1>

      <div className="form">
        <label htmlFor="input">Add Item</label>
        <input
          id="input"
          type="text"
          value={input}
          placeholder="Type anything..."
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="field">
          📝 Live Preview: <span>{input}</span>
        </p>
        <div className="button-group">
          <button onClick={addition}>Add to List</button>
        </div>
      </div>

      {likedMessage && (
        <p className="field" style={{ color: 'lightgreen' }}>
          {likedMessage}
        </p>
      )}

      <div className="cards">
        {list.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.text}</h3>
            <button onClick={() => toggleLike(index)}>
              {item.liked ? '❤️' : 'Like'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Likelist;
