import http from 'node:http';
import * as fs from 'node:fs';

const port=process.env.PORT || 3000; 

const server=http.createServer((req,res)=>{
     
    res.setHeader('Content-Type','text/html'); 

    if(req.url=='/hello'){
        res.statusCode=200;
        res.end('<h1>Rocking Node.js</h1>'); 
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1> this is nodemon darshan</h1>'); 
    }
    else if(req.url=='/'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html')
        res.end(data.toString()); 
    }
    else{
        // res.darshan(); // server crash
        res.statusCode=404;
        res.end('<h1>Page not found</h1>'); 
    }
})


server.listen(port,()=>{
    console.log(`Server is listening on port http://localhost:${port}`); 
});