// importing utilities
import * as http from "http";

//const http = require("http")
// let value = "hello world";
// console.log("Node.js first server" , value)


// creating a locql server to receive data from
// these functions are called anonymous functions and are not called externally

const server = http.createServer((req, res) => { // arrow function runs automatically when someone will open the link
    res.writeHead(200, {              // basically meaning setting status code 200
        "Content-Type": "application/json" // important header  // server first send the header tells info about status code , etc to browser
    });

    res.end(
        JSON.stringify({
            data : "Hello world from nayamat!" ,
        })
    )
});

const hostname = "127.0.0.1";
const port = 5000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});