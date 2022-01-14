import './App.scss';
import { useState } from 'react';

//jsx 

//functional component
const App = () => {
  //state
  //react hooks
  const [input, setInput] = useState(""); //[a,b]
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "Todo 1",
      active: false,
    },
    {
      id: 2,
      content: "Todo 2",
      active: true,
    },
  ]);
  const [selectedTodos, setSelectedTodos] = useState(null)
  // 1 state ---> tên (age), function để thay đổi state đó()
  const handleChange = (e) => {
    setInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTodos) {
      //add
      setTodos([...todos, { id: Date.now(), content: input, status: false }])
      setInput("");
    } else {
      //update
      const newTodos = todos.map(val => {
        if (val.id === selectedTodos.id) {
          return {
            ...selectedTodos,
            content: input
          }
        }
        return val
      })

      setTodos(newTodos)
      setInput("")
      setSelectedTodos(null)
    }
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter(val => val.id !== id)
    setTodos(newTodos)
  }

  const handleUpdate = (id) => {
    const idx = todos.findIndex(val => val.id === id)
    setInput(todos[idx].content)
    setSelectedTodos(todos[idx])
  }
  const handleCancle = () => {
    setSelectedTodos(null)
    setInput("")
  }

  return (
    <div className="App">
      <div className="todo">
        <h2>TODO LIST</h2>
        <form onSubmit={handleSubmit}>
          <input value={input} type="text" onChange={handleChange} />
          <button>{selectedTodos ? "Update" : "Add"}</button>
          {selectedTodos && <button onClick={handleCancle}>Cancle</button>}

        </form>
        <ul>
          {todos.map((val) => (
            <li key={val.id}>{val.content}
              <div className="icon">
                <i onClick={() => handleUpdate(val.id)} className="fas fa-edit"></i>
                <i onClick={() => handleDelete(val.id)} className="fas fa-trash"></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
