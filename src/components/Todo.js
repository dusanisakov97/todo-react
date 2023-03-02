import React, { useState } from "react";

const Todo = ({ index, todo, deleteTodo, updateTodo }) => {
  const [completed, setCompleted] = useState(false);
  const handleComplete = () => {
    setCompleted(!completed);
  };

  const handleEdit = (e) => {
    const todoItem = e.target.closest(".todo");
    const todoText = todoItem.querySelector(".todo-item");
    todoText.setAttribute("contenteditable", true);
    todoText.focus();

    todoText.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newText = todoText.innerText.trim();
        todoText.setAttribute("contenteditable", false);
        todoText.innerText = newText;
        updateTodo(index, newText);
      }
    });
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
      <button className="edit-btn" onClick={handleEdit}>
        <i class="fas fa-edit"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteTodo(index)}>
        <i class="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
