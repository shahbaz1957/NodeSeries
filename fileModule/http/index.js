/*

HTTP Module
    To make HTTP requests in Node.js, there is a built-in module HTTP in Node.js to transfer data over the HTTP. To use the HTTP server in the node, we need to require the HTTP module. The HTTP module creates an HTTP server that listens to server ports and gives a response back to the client..   


*/




const http = require('http');

// Create a server
http.createServer((request, response) => {
    response.write('Hello World!');
    response.end("kkkkkkkkk");
}).listen(3000,console.log("Server started on port 3000"));
 // Server listening on port 3000








// const http = require('http');

// let options = {
//     host: 'www.geeksforgeeks.org',
//     path: '/courses',
//     method: 'GET'
// };

// // Making a get request to
// // 'www.geeksforgeeks.org'
// http.request(options, (response) => {

//     // Printing the statusCode
//     console.log(`STATUS: ${response.statusCode}`);
// }).end();


