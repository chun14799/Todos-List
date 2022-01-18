import './App.scss';
import { useState } from 'react';

//jsx 

//functional component
const App = () => {
<<<<<<< HEAD

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [clicked, setClicked] = useState(false)
  const [pending, setPending] = useState(todos.length)

=======
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
>>>>>>> 20006d355f6f70e5e1ed3f90b7c280df4e76ced6
  const handleChange = (e) => {
    setInput(e.target.value)
  };



  const handleSubmit = (e) => {
<<<<<<< HEAD
    e.preventDefault()
    if (!selectedTodo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          content: input,
          isDone: false
        }
      ])
      setInput("")
      setPending(todos.length + 1)
=======
    e.preventDefault();
    if (!selectedTodos) {
      //add
      setTodos([...todos, { id: Date.now(), content: input, isDone: false }])
      setInput("");
>>>>>>> 20006d355f6f70e5e1ed3f90b7c280df4e76ced6
    } else {
      const newTodos = todos.map((val) => {
        if (val.id === selectedTodo.id) {
          return {
            ...todos,
            content: input
          }
        }
        return val
      })
      setTodos(newTodos)
      setInput("")
      setSelectedTodo(null)
    }
<<<<<<< HEAD
=======

  };

  const handleDelete = (id) => {
    const newTodos = todos.filter(val => val.id !== id)
    setTodos(newTodos)
>>>>>>> 20006d355f6f70e5e1ed3f90b7c280df4e76ced6
  }

  const handleUpdate = (id) => {
    const idx = todos.findIndex(val => val.id === id)
    setInput(todos[idx].content)
    setSelectedTodo(todos[idx])
  }
  const handleCancel = () => {
    setSelectedTodo(null)
    setInput("")
  }

<<<<<<< HEAD
  const handleDelete = (id) => {
    const newTodos = todos.filter(val => val.id !== id)
    setTodos(newTodos)
  }

  const handleCheck = (id) => {
    setTodos(
      todos.map((val) => {
        if (val.id === id) {
          return {
            ...val,
            isDone: !val.isDone
          }
        }
        return val
      })
    )
  }

  const handleCheckAll = () => {
    setClicked(true)
    setTodos(
      todos.map((val) => {
        return {
          ...val,
          isDone: !val.isDone
        }
      })
    )

    if (clicked === true) {
      setClicked(false)
    } else {
      setClicked(true)
    }
  }

  const handleDeleteAll = () => {
    setTodos([])
  }

  return (
    <div className="App">
      <div className="app_block">
        <div className="container">
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="title">
              <h1>Hôm nay mày làm gì?</h1>
            </div>
            {/* Input Field */}
            <div className="input_field">
              <input onChange={handleChange} value={input} type="text" placeholder='Ráng kiếm gì làm đi mài' />
              <button>{selectedTodo ? <i className="fas fa-check"></i> : <i className="fas fa-plus"></i>}</button>
              {selectedTodo && <button onClick={handleCancel}><i className="fas fa-times"></i></button>}
            </div>
          </form>
          {/* Todo list */}
          <ul className="todo_list">
            {
              todos.length === 0 ? (<li>No item ...</li>) :
                (
                  todos.map((val) => (
                    <li key={val.id} className={val.isDone ? 'checked' : ""}>
                      <span className='check_box' onClick={() => handleCheck(val.id)}><i class="far fa-check-square"></i></span>
                      {val.content}
                      <span className='edit_btn' onClick={() => handleUpdate(val.id)}><i className="fas fa-edit"></i></span>
                      <span className='delete_btn' onClick={() => handleDelete(val.id)}><i className="fas fa-trash"></i></span>
                    </li>
                  ))
                )
            }
          </ul>
          {/* Footer */}
          <div className="footer">
            {/* <span>Mày còn {pending} tasks kìa</span> */}
            <div className="footer_btn">
              <button onClick={handleDeleteAll}>Delete All</button>
              <button className='check_all' onClick={handleCheckAll}>{clicked ? "Uncheck All" : "Check All"}</button>
            </div>
          </div>
=======
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
>>>>>>> 20006d355f6f70e5e1ed3f90b7c280df4e76ced6
        </div>
      </div>
    </div >
  );
}

export default App;
