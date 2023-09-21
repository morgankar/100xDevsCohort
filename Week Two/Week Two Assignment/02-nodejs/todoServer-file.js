//Todo Server that can store items on its backend
const express = require("express");
const app = express();
const bodyParser = require("body parser");
const port = 5000;
app.use(bodyParser.json());


//Defining Routes

//To read the todo list
app.get("/todos", (req,res) => {
    fs.readFile("todo.json", "utf8", (err,data) =>{
        if(err) throw err;
        res.json(JSON.parse(data));
    })
})


//To post Todo list
app.post("/todos", (req,res)=> {
    const newTodo = {
        id: Math.floor(Math.random() * 100000) , //generates unique id
        title: req.body.title,
        description: req.body.description
    };
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })