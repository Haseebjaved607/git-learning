const http = require("http")

const myServer = http.createServer((req , res) =>{
    res.end("server run")

});
 
myServer.listen(5000,()=>console.log("run ho gaya ") ) 