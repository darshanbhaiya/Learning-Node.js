import {simple} from "./modsecond.mjs"  
// import {simple,simple2} from "./modsecond.mjs"  // for multiple imports  
import {simple2 as dimple} from "./modsecond.mjs"  
import {simple2} from "./modsecond.mjs"  
import trimple from "./modsecond.mjs"  // default will be imported  
// import {simple3} from "./modsecond.mjs" // don't import default by its name
// import {simple,simple2,simple3} from "./modsecond.mjs"  // don't import default by its name

// add "type":"module", in package.json to use ES6

import * as a from "./modsecond.mjs"// import all things
simple()
dimple()
trimple()

simple2()

console.log(a);
a.simple();
console.log(a.simple());
console.log(a.simple2());
a.default();
