const fs = require('node:fs');

const a=fs.readFileSync('file.txt')
console.log(a.toString()) // .toString() => to read the buffer

fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data);
})

fs.readFile('filele.txt','utf8',(err,data)=>{
    console.log(err,data);
})

console.log("finished reading file")

// non blocking io model
// it takes time to read files, so further processes are finished until the file is ready, once ready call back is called

// we use Sync so that first this process will be completed then other will start mean it blocks other processes until it completes