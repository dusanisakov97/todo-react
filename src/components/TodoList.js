import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
