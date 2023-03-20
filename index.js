// import your http
const http = require("http")


// create a server with http
const server = http.createServer((req, res)=> {
    console.log("server is up and running")
})

// initial ports
const PORT = 4000;

// listen to server
server.listen(PORT, ()=> console.log(`server is runnning on port ${PORT}`))