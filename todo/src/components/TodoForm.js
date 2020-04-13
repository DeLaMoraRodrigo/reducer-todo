import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = e => {
    setItem(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <h2>TODO LIST</h2>
        <div className="topOfForm">
          <div className="addTodo">
            <input
              name="todo"
              onChange={handleChanges}
              value={item}
              placeholder="Add New Todo..."
            />
            <button className="btn">Add</button>
          </div>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;