import React from "react";

const Form = ({ inputText, setInputText, addTodo }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter a task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTodo}>
        <i class="fas fa-plus-square"></i>
      </button>
    </form>
  );
};
export default Form;
