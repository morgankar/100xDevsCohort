const express = require('express');
const app = express();
const port = 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json())

// function middleware1(req,res,next){
//     console.log("this message from middleware " + req.headers.name);
//     next();
// }

// app.use(middleware1)

function sayName(name){
    return `My name is ${name} `;
}

function sayAge(age){
    return `I am ${age} years old`;
}


function firstRequest(req,res){
    console.log(req.body)
    var name = req.body.name;
    var saidName = sayName(name);

    res.send(saidName)
}

function secondRequest(req,res){

        var age = req.body.age;
        var saidAge = sayAge(age)
        var ageObject = {
            age: saidAge
        }
        res.send(ageObject);    
}

function createTodo(req,res){
    res.send("Eat Chocolate");
}

function getPage(req,res){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello from page</title>
    </head>
    <body>
        <h2>Hi tiltey</h2>
    </body>
    </html>`)
}


app.get('/sayHello', firstRequest);
app.get('/sayAge', secondRequest)
app.post('/createTodo', createTodo)

app.get('/getPage', getPage);


function serverStarted(){
    console.log(`App listening on port ${port}`) 
}


app.listen(port, serverStarted)