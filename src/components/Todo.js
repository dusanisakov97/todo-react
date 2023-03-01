import React, { useState } from "react";

const Todo = ({ index, todo, deleteTodo }) => {
  const [completed, setCompleted] = useState(false);
  const handleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`todo ${completed ? "completed" : ""}`}>
      <li key={index} className={`todo-item`}>
        {todo}
      </li>
      <button className="complete-btn" onClick={handleComplete}>
        {completed ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-check"></i>
        )}
      </button>
      <button className="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteTodo(index)}>
        <i class="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
