// module wrapper function => when a module runs in node.js before that node.js wrap it in this function automatically

// (function(exports,require,module,__filename,__dirname){


harry = {
  name: "harry",
  favNum: 3,
  developer:true
}

console.log(exports,require,module,__filename,__dirname)
module.exports=harry;

// this import system is called common js modules

// })