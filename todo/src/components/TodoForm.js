import React, { useState } from "react";
import styled from "styled-components";

const ClearButton = styled.button `
    width: 200px;
    height: 6vh;
    border: 3px solid black;
`;

const AddButton = styled.button `
    width: 100px;
    height: 4vh;
    border: 3px solid black;
`;

const SuperH1 = styled.h1 `
    font-size: 5rem;
`;

const SuperInput = styled.input `
    margin-bottom: 3vh;
    width: 300px;
    height: 3vh;
`;

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
    <div>
      <form onSubmit={submitForm}>
        <SuperH1>TODO LIST</SuperH1>  
          <div className="addTodo">
            <SuperInput
              name="todo"
              onChange={handleChanges}
              value={item}
              placeholder="Add New Todo..."
            />
            <AddButton className="btn">Add</AddButton>
          </div>
          <ClearButton onClick={clearCompleted}>Clear Completed</ClearButton>
      </form>
    </div>
  );
};

export default TodoForm;