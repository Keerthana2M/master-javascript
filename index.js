const http =require("http");
const fs =require("fs");
const myServer = http.createServer((req,res)=>{
    const log =`${Date.now()}:${req.url} New Req Received \n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case "/":res.end("Homepage");
            break;
            case "/about":res.end("I am keerthana");
            break;
            default:res.end("404 not found");
        }
    })
});
//     fs.appendFile("test1.txt","hello world\n",(error,data)=>{
//         if(error){
//             console.log(error);
//             return;
//         }

//         console.log("added")
//     })
// });
myServer.listen(5001,()=>console.log("Server started!"));