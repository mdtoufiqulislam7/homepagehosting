const http = require('http');
const fs = require('fs');
const port = process.env.port;
const serverlink = "127.0.0.1";


const Myserver = http.createServer( (req,res)=>{

    const myfun=(filename,locNum)=>{
        fs.readFile(filename,(err,data)=>{
            res.writeHead(locNum,{'content-type':'text/html'});
            res.write(data);
            res.end();
        })
    }


    if(req.url === '/'){
       myfun('home.html',200);
    }
    else if (req.url ==="/about" ){
     myfun('about.html',218)
    }
    else if( req.url ==="/contact"){
      myfun('contact.html',282);
    }
})
Myserver.listen(port,serverlink,()=>{
    console.log(`this is succesfully run at http://${serverlink}:${port}`);
})
