import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [secondCount, setSecondCount] = useState(0);
  let [allTodo, setAllTodo] = useState([]);

  let increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }

    if (count === 10) {
      setSecondCount(secondCount + 1);
      setCount(0);
    }
  };

  let decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let renderTodo = (event) => {
    event.preventDefault();

    let input = document.querySelector(".form-input");
    let inputValue = input.value.trim();

    let id = !allTodo.at(-1) ? 1 : allTodo.at(-1).id;

    if (!inputValue) {
      alert("Add Task");
    }

    let newTodo = {
      id: id + 1,
      text: inputValue,
    };

    setAllTodo((prev) => [...prev, newTodo]);

    input.value = null;
  };

  return (
    <>
      <div className="buttons text-center border-bottom border-2 border-black mb-4">
        <h1>Count: {count}</h1>
        <button className="btn btn-primary me-3" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-danger my-3" onClick={decrement}>
          Decrement
        </button>
        <h2 className="mb-4">OverallCount: {secondCount}</h2>
      </div>
      <div className="todo-list">
        <h2 className="text-center mb-4 text-dark-emphasis">Todo App</h2>
        <form
          onSubmit={renderTodo}
          className="d-flex w-75 justify-content-center gap-4 mx-auto mb-5"
        >
          <input
            className="form-control border-2 w-75 form-input"
            placeholder="Add Task"
            autoFocus
            required
            type="text"
          />
          <button className="btn btn-success px-4">Add</button>
        </form>
        <ul className="list-unstyled list-group w-75 mx-auto list">
          {allTodo.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item list-group-item-dark list-item"
            >
              <span className="text-dark list-text">{todo.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
