import { useState } from 'react'
import './App.css'

// var todos =[{
//   
// }
// ]

//Component
function App() {

  const [todo,setTodo] = useState({
    
      title:"Go gym",
      description: "Gym from 8-9 pm",
      id: 1
    });

    setInterval(()=>{
      setTodo({
        title:"Have Dinner",
        description: "Dinner from 6-7 pm",
        id: 1
      })
    },2000)

  return (
    <>
      <h1>Hi There</h1>
      {todo.title}
      {todo.description}
      <PersonName firstName = {"Morgan"} lastName ={"Kar"}></PersonName>
    </>
  )
}

function PersonName(props){
  return <>
  <div>
    {props.firstName} {props.lastName}
  </div>
  </>
}

export default App

