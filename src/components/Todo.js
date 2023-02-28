import React from "react";

const Todo = ({ index, todo, deleteTodo }) => {
  return (
    <div className="todo">
      <li key={index} className="todo-item">
        {todo}
      </li>
      <button className="trash-btn" onClick={() => deleteTodo(index)}>
        <i class="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
