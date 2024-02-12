import { useState } from 'react'
import './App.css'


//Component
function App() {

 const [todos,setTodos] = useState([ {
    title: "Go gym",
    description: "Do gym from 7-8 pm",
    id:1
    },
    {
      title: "Have Dinner",
      description: "Eat at 6pm",
      id:2
    }]);
 
   return (
    <>
    <div>
      {todos.map((todo) => {
        return <Todo title ={todo.title} description ={todo.description}></Todo>
      })}
    </div>
    </>
   )
   
}

//Component 2
function Todo(props){
  return <div>
    {props.id}
    {props.title}
    {props.description}
  </div>
}


export default App

