const fs = require("fs");
const os = require('os')
const http = require('http')
const EventEmitter = require('events')


// const nodeJsArchitecture = `
// Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is built on the V8 JavaScript engine and allows developers to run JavaScript on the server-side. Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient for building scalable network applications. It provides a rich set of APIs for file system operations, networking, and other system interactions.
// Node.js architecture consists of:
// - V8 JavaScript Engine: The core engine that executes JavaScript code.
// - Libuv: A multi-platform support library that provides asynchronous I/O operations.
// - Event Loop: A mechanism that handles events and callbacks.
// - Modules: Encapsulated units of functionality that can be reused across applications.

// Node.js allows developers to build server-side applications, command-line tools, and other types of applications using JavaScript, leveraging the extensive npm ecosystem for package management.
// `;

// fs.writeFile("nodejs_architecture.txt", nodeJsArchitecture, function (err) {
//     if (err) {
//         throw err;
//     }
//     console.log("success");
// });

// read file

// fs.readFile('nodejs_architecture.txt','utf-8', function(err, data){
//     if(err){
//         throw err
//     }
//     console.log(data);
// })

// append in file
// const additionalAdvantages = `
// Advantages of Node.js:
// - Asynchronous and Non-blocking: Node.js uses an event-driven, non-blocking I/O model, allowing it to handle a large number of concurrent requests efficiently. This makes it highly suitable for building scalable and responsive applications.
// - Fast Execution: Node.js is built on the V8 JavaScript engine, which compiles JavaScript code to machine code before executing it. This results in high performance and faster execution compared to traditional interpreted languages.
// - Single-threaded with Event Loop: Node.js follows a single-threaded event-driven architecture, but it employs an event loop mechanism that allows it to handle multiple concurrent requests without blocking the execution. This makes it efficient for handling real-time applications, web sockets, and streaming data.
// - Rich Ecosystem: Node.js has a vast ecosystem with a rich collection of modules and packages available through npm (Node Package Manager). It allows developers to easily integrate third-party libraries, frameworks, and tools into their projects, speeding up the development process.
// - Sharing Code between Frontend and Backend: Node.js allows sharing code between the frontend and backend since both use JavaScript. This enables developers to reuse code, reducing duplication and improving productivity.

// `

// fs.appendFile('nodejs_architecture.txt', additionalAdvantages , (err) =>{
//     if(err) throw err
//     console.log("Successfully appendFile");
// })

// fs.readFile('nodejs_architecture.txt', 'utf-8', (err, data) =>{
//     if(err) throw err
//     console.log("updated data");
//     console.log(data);
// })


// delete nodejs_architecture.txt

// fs.unlink('nodejs_architecture.txt', (err) =>{
//     if(err) throw err
//     console.log("File deleted Successfully");
// })


//print os information

// const osName = os.platform();

// const osRelease = os.release()

// console.log("Os Name:", osName)
// console.log("Os Release:", osRelease)

//create a server

// const server = http.createServer((req, res) =>{
//     res.setHeader('Content-Type', 'text/plain')
//     res.end("I Am Happy To Learn Full Stack Web Development From PW Skills!")
// })

// const port = 5000

// server.listen(port, ()=>{
//     console.log(`Running on ${port}`);
// })

//subscribe features

const eventEmitter = new EventEmitter()

const subscribeHandler = () =>{
    console.log("Thanks for subscribing to college wallah");
}

eventEmitter.on('subscribe', subscribeHandler)

eventEmitter.emit('subscribe', 'college wallah')

// remove listener

eventEmitter.off('subscribe', subscribeHandler)
eventEmitter.emit('subscribe', "college wallah")

// set max listener

const maxListener = eventEmitter.getMaxListeners()

console.log("Max event Listener", maxListener);

eventEmitter.setMaxListeners(5)

console.log("Updated maximum number of event", eventEmitter.getMaxListeners());