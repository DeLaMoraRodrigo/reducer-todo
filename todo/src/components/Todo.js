import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    
`;

const TodoDiv = styled.div`
    background-color: white;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3vh 0;
    width: 500px;
`;

const TodoSpan = styled.p`
    color: black;
`;

function Todo({ todo, dispatch }) {
    const toggleCompleted = () => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: todo.id
        });
    };

    return (
        <ContainerDiv>
            <TodoDiv
                className={todo.completed ? 'completed' : ''}
                onClick={toggleCompleted}
            >
                <TodoSpan>{todo.item}</TodoSpan>
            </TodoDiv>
        </ContainerDiv>
    );
}

export default Todo;