import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
  console.log('please turn of motor!');
  setTimeout(()=>{
    console.log("Pease turn off motor! Its a gentle reminder")
  },3000)
});

console.log("the script is running")

myEmitter.emit('waterFull'); // to call the event // // non blocking io model

console.log("the script is still running")

