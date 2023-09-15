var sendObj = {
    method:"POST"
};

function callbackFn(result){
    console.log(result)
}

fetch("http://localhost:3000/createTodo", sendObj).then(callbackFn)