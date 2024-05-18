const os = require('node:os'); // built in module

console.log(os.freemem()) // shows free memory
console.log(os.homedir()) // home directory of user
console.log(os.hostname()) // name of computer host name
console.log(os.platform()) // operating system platform for which the Node.js binary was compiled
console.log(os.release()) // release version of this os build
console.log(os.type()) 