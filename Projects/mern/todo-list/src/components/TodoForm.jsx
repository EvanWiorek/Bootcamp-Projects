import "./App.css";

export default (props) => {
  const { setTodosArr, setNewTodo, todoItem, newTodo, todosArr } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.length < 1) {
      return;
    }
    setTodosArr([...todosArr, todoItem]);
    setNewTodo("");
  };

  return (
    <form
      className="d-flex align-items-center gap-2 col-10 m-auto justify-content-around"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="form-group col-12">
        <input
          type="test"
          className="form-control my-shadow"
          value={newTodo} //this is also called controlled input
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        ></input>
      </div>
      <input type="submit" value="Add" className="btn btn-primary my-shadow" />
    </form>
  );
};
