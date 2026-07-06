const http = require('http'); // importing node http module using require function

function requestListener(request , response){
    console.log(request) 
}

const server = http.createServer(requestListener);


// see we r not caaling the function we passed the function reference to the createServer method of http module. 
// This is because the createServer method will call the requestListener function when a request is made to the server.
// this is how we created a server using node http module.
//but we need to listen to the server so that it can accept requests from clients.
server.listen(3000 , () => {
    console.log("Server is listening on port 3000");
}) //this is the port number on which the server will listen to the requests from clients.
