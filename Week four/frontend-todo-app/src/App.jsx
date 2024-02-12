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
        return <div>
        {todo.id}
        {todo.title}
        {todo.description}
        </div>
      })}
    </div>
    </>
   )
   
}



export default App

