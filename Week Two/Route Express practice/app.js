const express = require('express');
const app = express();
const port = 3000;

function middleware1(req,res,next){
    console.log("this message from middleware" + req.headers.name);
    next();
}

function sayName(name){
    return `My name is ${name} `;
}

function sayAge(age){
    return `I am ${age} years old`;
}


function firstRequest(req,res){
    var name = req.query.name;
    var saidName = sayName(name);

    res.send(saidName)
}

function secondRequest(req,res){
    var age = req.query.age;
    var saidAge = sayAge(age)

    res.send(saidAge);
}

function createTodo(req,res){
    res.send("Eat Chocolate");
}



app.get('/sayHello', firstRequest);
app.get('/sayAge', secondRequest)
app.post('/createTodo', createTodo)


function serverStarted(){
    console.log(`App listening on port ${port}`) 
}


app.listen(port, serverStarted)