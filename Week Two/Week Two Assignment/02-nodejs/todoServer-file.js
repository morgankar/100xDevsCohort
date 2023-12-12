//Todo Server that can store items on its backend
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
const fs = require("fs");
app.use(bodyParser.json());


//Defining Routes

//To read the todo list
app.get("/todos", (req,res) => {
    fs.readFile("todo.json", "utf8", (err,data) =>{
        if(err) throw err;
        res.json(JSON.parse(data));   //Json.parse is to convert whatever data/string into json format
    })

})


//To post Todo list

function onPress(){
    app.post("/todos", (req,res)=> {
        const newTodo = {
            id: Math.floor(Math.random() * 100000) , //generates unique id
            title: req.body.title,
            description: req.body.description
        };
        fs.readFile("todos.json", "utf8", (err,data) => {
            if(err) throw err;
            const todo = JSON.parse(data);
            todos.push(newTodo);
            fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
                if(err) throw err;
                res.status(201).json(newTodo);
            });
        })
    })
}


//JSON.parse converts any data to object data notation 
//JSON.stringify converts object to JSON string 





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });