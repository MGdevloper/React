import { useEffect, useState } from 'react'
import { Todoprovider } from './context/todocontext.js'
import Todo from './components/Todo.jsx';
import './index.css'
import Addtodobar from './components/Addtodobar.jsx';

function App() {
  const [Todos, setTodos] = useState([]);

  function get_todos_from_localstorage() {

    if (JSON.parse(localStorage.getItem("todos")) != "") {

      setTodos(JSON.parse(localStorage.getItem("todos")))



    }

  }

  function store_todos_in_localstorage() {

    localStorage.setItem("todos", JSON.stringify(Todos))


  }


  function addtodo(todo) {
    console.log(Todos);

    if (Todos == null) {

      setTodos([todo]);

    }

    else {
      console.log("in else part");
      console.log(Todos);


      //Todos->[{todo:"msg",completed:false,id:Date.now()}]
      setTodos(prev => [...prev, todo])



    }
    // console.log("addtodo called");

    []
  }

  function edittodo(id, todo) {
    let newtodo = Todos.map((t) => (

      t.id == id ? todo : t
    ))

    setTodos(newtodo)
  }

  function removetodo(id) {
    let newtodo = Todos.filter((t) => t.id != id)

    setTodos(newtodo)

  }

  useEffect(() => {

    get_todos_from_localstorage()
  }, [])

  // useEffect(() => {
  //   console.log(Todos);

  // }, [Todos])
  useEffect(() => {

    store_todos_in_localstorage()

  }, [addtodo, edittodo, removetodo])
  //Todos==null:empty todolist

  return (

    <Todoprovider value={{ addtodo, edittodo, removetodo, Todos }}>

      <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
        <div className='w-[80%]'>

          <Addtodobar />
        </div>

        <div className='todolistctn mt-5 w-[80%]'>

          {Todos.map((t) => (
            <div key={t.id}>
              <Todo key={t.id} todo={t.todo} completed={t.completed} id={t.id} />
            </div>
          ))}

      </div>


    </div>
    </Todoprovider >


  )
}

export default App
