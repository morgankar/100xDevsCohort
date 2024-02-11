import './App.css'

var todos =[{
  title:"Have Dinner",
  description: "Dinner from 6-7 pm",
  id: 1
},
{
  title:"Go gym",
  description: "Gym from 8-9 pm",
  id: 1
}
]

//Component
function App() {

  return (
    <>
      <h1>Hi There</h1>
      {"Title: "+ todos[0].title}
    </>
  )
}

export default App
