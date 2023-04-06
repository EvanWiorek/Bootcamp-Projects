import { useState, useEffect } from "react";
import TodoDisplay from "./components/TodoDisplay";
import TodoForm from "./components/TodoForm";

function App() {
  const [newTodo, setNewTodo] = useState("");
  //below is checking for the todos array in localstorage, and parsing the string into an object if one is available.
  const savedTodosArr = JSON.parse(localStorage.getItem('todosArr'));
  //below is either using the saved items array, or a new array if there is not list saved.
  const [todosArr, setTodosArr] = useState(savedTodosArr || []);

  const todoItem = {
    text: newTodo,
    complete: false,
  };

  useEffect(() => {
    //below is adding the item "todosArr", our todos array to local storage as a string
    localStorage.setItem('todosArr', JSON.stringify(todosArr));
  });

  return (
    <div className="col-5 m-auto mt-5 form-body my-shadow">
      <h1 className="text-light text-center mb-3" >Todo List</h1>
      <TodoForm
        setTodosArr={setTodosArr}
        setNewTodo={setNewTodo}
        todoItem={todoItem}
        newTodo={newTodo}
        todosArr={todosArr}
      />
      <div className="todos-list text-light">
        <TodoDisplay todosArr={todosArr} setTodosArr={setTodosArr} />
      </div>
    </div>
  );
}

export default App;
