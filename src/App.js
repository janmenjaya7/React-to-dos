import "./App.css";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const HandelChange = (e) => {
    setTodo(e.target.value);
  };
  const handelClick = () => {
    setTodos([...todos, todo]);
    setTodo(" ");
  };

  return (
    <div>
      <input type="text" value={todo} onChange={HandelChange} />
      <button onClick={handelClick}>add todos</button>

      {todos.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
}

export default App;
