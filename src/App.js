import './App.scss';
import { useState } from 'react';

//jsx 

//functional component
const App = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [clicked, setClicked] = useState(false)
  const [checkedAll, setCheckedAll] = useState(false)


  const handleChange = (e) => {
    setInput(e.target.value)
  };



  const handleSubmit = (e) => {
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

  const handleDelete = (id) => {
    const newTodos = todos.filter(val => val.id !== id)
    setTodos(newTodos)
  }

  const handleCheck = (id) => {
    setClicked(true)
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
    if (clicked === true) {
      setClicked(false)
    } else {
      setClicked(true)
    }
  }

  const handleCheckAll = () => {
    setCheckedAll(true)
    setTodos(
      todos.map((val) => {
        return {
          ...val,
          isDone: !val.isDone
        }
      })
    )

    if (checkedAll === true) {
      setCheckedAll(false)
    } else {
      setCheckedAll(true)
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
                      <span className='check_box' onClick={() => handleCheck(val.id)}>{clicked ? <i class="far fa-check-square"></i> : <i class="far fa-square"></i>}</span>
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
              <button className='check_all' onClick={handleCheckAll}>{checkedAll ? "Uncheck All" : "Check All"}</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
