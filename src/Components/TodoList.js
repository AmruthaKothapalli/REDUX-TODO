import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  delTodo,
  handleCheckBox,
} from "./Redux/Action-creators/ActionCreators";

export const Todos = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.TodoReducer);
  console.log(todos);
  return todos.map((todo) => (
    <div key={todo.id}>
      <div className="todoItem">
        {editFormVisibility === false && (
          <label> 
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={() => dispatch(handleCheckBox(todo.id))}
            />
          </label>
        )}
        <div className="todoContent">
          <input
            type="text"
            className="todo_item"
            value={todo.todo}
            readOnly
            style={{
              textDecoration: todo.completed ? "line-through" : null,
              color: "gray",
            }}
          ></input>
        </div>
        <div className="actions">
          {editFormVisibility === false && (
            <>
              <button className="edit" onClick={() => handleEditClick(todo)}>
                Edit
              </button>
              <button
                className="del"
                onClick={() => dispatch(delTodo(todo.id))}
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>
      <br />
      <br />
    </div>
  ));
};
