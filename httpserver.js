import http from 'node:http';

const port=process.env.PORT || 3000; // provided by provider or set as 3000

const server=http.createServer((req,res)=>{
    // console.log(req);
    console.log(req.url);
    res.statusCode=200; // like 404. HTTP 200 OK success status response code indicates that the request has succeeded
    res.setHeader('Content-Type','text/html'); // request will be serve as html
    res.end('<h1>Rocking Node.js</h1>'); // what response you want send
})


server.listen(port,()=>{
    console.log(`Server is listening on port http://localhost:${port}`);  // it is backtick ` instead on single  to use $
});