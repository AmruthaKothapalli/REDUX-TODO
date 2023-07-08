import React, { useState, useEffect } from "react";
import "./TodoRedux.css";
import { useDispatch } from "react-redux";
import {
  addTodo,
  handleEditSubmit,
} from "./Redux/Action-creators/ActionCreators";

export const TodoRedux = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };

  return (
    <div>
      <h1 className="header1">TODO</h1>
      <>
        {editFormVisibility === false ? (
          <section className="createTodo" id="section">
            <form>
              <input
                placeholder="ADD your task...."
                className="inputText"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
              />

              <button className="button" onClick={handleSubmit}>
                Add Item
              </button>
            </form>
            <br />
          </section>
        ) : (
          <section className="createTodo" id="section">
            <form>
              <input
                placeholder="ADD your task...."
                className="inputText"
                value={editValue || ""}
                onChange={(e) => setEditValue(e.target.value)}
              />

              <button className="updatebutton" onClick={editSubmit}>
                UPDATE
              </button>
              <button className="backButton" onClick={cancelUpdate}>
                BACK
              </button>
            </form>

            <br />
          </section>
        )}
      </>
    </div>
  );
};

export default TodoRedux;
