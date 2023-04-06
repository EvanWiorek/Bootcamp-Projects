import "./App.css";
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoItem = {
    text: newTodo,
    complete: false
  };

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length < 1) {
      return;
    }
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (e, delIdx) => {
    e.preventDefault();
    const deletedTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodos(deletedTodos);
  };

  const handleToggleComplete = (idx) => {
    const completedTodos = todos.map((todo, i)  => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTodos(completedTodos)
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleNewTodoSubmit(e);
        }}
      >
        <div className="form-group">
          <input
            type="test"
            className="form-control"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          ></input>
        </div>
        <input
          type="submit"
          value="Add"
          className="btn btn-primary my-shadow"
        />
      </form>

      {todos.map((todo, idx) => {
        const todoClass = [];

        if (todo.complete) {
          todoClass.push("completed-item");
        }
        
        return (
          <div className="d-flex gap-2">
            <input
              onChange={(e) => {
                handleToggleComplete(idx);
              }}
              checked={todo.complete}
              type="checkbox"
            />
            <h4 key={idx} todo={todo} className={todoClass}>
              {todo.text}
            </h4>
            <input
              type="submit"
              value="Delete"
              className="btn btn-secondary ml-2"
              onClick={(e) => {
                handleTodoDelete(e, idx);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
