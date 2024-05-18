const fs = require('node:fs');

fs.writeFile('file2.txt',"this is the data which will be written",()=>{ // after this data is written in this file inside code will be executed
    console.log("written to the file");
})

b=fs.writeFileSync('file2.txt',"this is the data in async which will be written darshan bhaiya")
console.log(b)
console.log("finished writing file")

// non blocking io model
// it takes time to write files, so further processes are finished until the file is ready, once ready call back is called

// we use Sync so that first this process will be completed then other will start mean it blocks other processes until it completes