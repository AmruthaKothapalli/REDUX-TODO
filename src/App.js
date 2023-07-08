import logo from "./logo.svg";
import "./App.css";
import TodoRedux from "./Components/TodoRedux";
import { Todos } from "./Components/TodoList";
import { useState } from "react";

function App() {
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <div
      style={{
        color: "black",
        marginBottom: "300px",
        marginLeft: "300px",
        marginRight: "300px",
        marginTop: "20px",
        border: "2px solid midnightblue",
        borderRadius: "3px",
        backgroundColor: "darkgrey",
      }}
    >
      <TodoRedux
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      ></TodoRedux>
      <Todos
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
      ></Todos>
    </div>
  );
}

export default App;
