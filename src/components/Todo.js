import React from "react";

const Todo = ({ index, todo, deleteTodo }) => {
  return (
    <div className="todo">
      <li key={index} className="todo-item">
        {todo}
      </li>
      <button className="complete-btn">
        <i class="fas fa-check"></i>
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
