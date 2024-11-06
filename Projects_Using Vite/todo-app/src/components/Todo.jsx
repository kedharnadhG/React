import React from "react";

function Todo({todo, delTodo, index}) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" name="" id="" />
        <button onClick={()=>delTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
