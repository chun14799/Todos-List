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
      isDone: false,
    },
    {
      id: 2,
      content: "Todo 2",
      isDone: false,
    },
  ]);
  const [selectedTodos, setSelectedTodos] = useState(null)
  const [click, setClick] = useState(false)
  // 1 state ---> tên (age), function để thay đổi state đó()
  const handleChange = (e) => {
    setInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTodos) {
      //add
      setTodos([...todos, { id: Date.now(), content: input, isDone: false }])
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

  const handleCheck = (id) => {
    setTodos(
      todos.map((val)=>{
        if(val.id === id){
          return{
            ...val,
            isDone: !val.isDone,
          };
        }
        return val;
      })
    )
    console.log(todos)
  }

  const handleDeleteAll = () =>{
    setTodos([])
  }

  const handleCheckAll = () =>{
    setClick(false)
    setTodos(
      todos.map((val)=>{
        return{
          ...val,
            isDone: !val.isDone,
          }
      })
    )
    if(click === true){
      setClick(false)
    }else{
      setClick(true)
    }
  }
//  let pendingNumber = document.querySelector(".pendingNumber");
//   pendingNumber.textContent = todos.length;

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
          {todos.length !== 0 ? 
          (todos.map((val) => (
            <li key={val.id} className={ val.isDone === true  ? "checked" : ""}>
              {val.content}

              <div className="icon">
                <button onClick={() => handleCheck(val.id)}>Done</button>
                <i onClick={() => handleUpdate(val.id)} className="fas fa-edit"></i>
                <i onClick={() => handleDelete(val.id)} className="fas fa-trash"></i>
              </div>
            </li>
          ))) : (
            <li>No Item </li>
          )}
        </ul>
        {/* <span>Bạn đang có <span className="pendingNumber"></span> task</span> */}
        <div className="bottom_btn">
          <button className="checkAll" onClick={handleCheckAll}>{click === true ? "Unchecked All" : "Check All"}</button>
          <button onClick={handleDeleteAll}>Delete All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
