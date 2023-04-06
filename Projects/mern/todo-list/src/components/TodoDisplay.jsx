import "./App.css";

export default (props) => {
  const { todosArr, setTodosArr } = props;

  const handleDelete = (e, deleteIdx) => {
    e.preventDefault();
    const deletedTodos = todosArr.filter((todoItem, todosArrIdx) => {
      return todosArrIdx !== deleteIdx;
    });

    setTodosArr(deletedTodos);
  };

  const handleToggleComplete = (checkedIdx) => {
    const completedTodos = todosArr.map((todo, mapIdx) => {
      if (checkedIdx === mapIdx) {
        //below creates and replaces a todo item, instead of modifying the current state
        const completedTodo = { ...todo, complete: !todo.complete };
        return completedTodo;
      }
      //else return todo as is, if complete is not modified
      return todo;
    });

    setTodosArr(completedTodos);
  };

  return (
    <>
      {todosArr.map((todo, idx) => {
        //below could also be a const [], and the if would push to the array
        let todoClass = "";

        if (todo.complete) {
          todoClass += "completed-item";
        }

        return (
          <div className="d-flex mt-3 align-items-center gap-3">
            <input
              onChange={(e) => {
                handleToggleComplete(idx);
              }}
              checked={todo.complete}
              type="checkbox"
              className="checkbox"
            />
            <h4 key={idx} todo={todo} className={todoClass}>
              {todo.text}
            </h4>
            <input
              type="submit"
              value="Delete"
              className="btn btn-secondary my-shadow delete"
              onClick={(e) => {
                handleDelete(e, idx);
              }}
            />
          </div>
        );
      })}
    </>
  );
};

// export default TodoDisplay;
