import React, { useState } from "react";
import "./TodoList.css";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function TodoList() {
  const [todos, setTodos] = useState({});
  const [input, setInput] = useState("");
  const [selectedDay, setSelectedDay] = useState(days[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo = { id: Date.now(), text: input };
    setTodos((prev) => ({
      ...prev,
      [selectedDay]: [...(prev[selectedDay] || []), newTodo],
    }));
    setInput("");
  };

  const handleDelete = (day, id) => {
    setTodos((prev) => ({
      ...prev,
      [day]: prev[day].filter((todo) => todo.id !== id),
    }));
  };

  return (
    <div className="weekly-todo-container">
      <h1 className="fancy-heading">🌟 Weekly To-Do Planner</h1>

      <form className="todo-form" onSubmit={handleSubmit}>
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder={`Add task for ${selectedDay}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <div className="days-grid">
        {days.map((day) => (
          <div className="day-card" key={day}>
            <h2 className="day-title">📅 {day}</h2>
            <ul className="todo-list">
              {(todos[day] || []).map((todo) => (
                <li className="todo-item" key={todo.id}>
                  <span>{todo.text}</span>
                  <button onClick={() => handleDelete(day, todo.id)}>❌</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;