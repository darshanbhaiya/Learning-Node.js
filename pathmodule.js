const path = require('node:path');

const a=path.basename('C:\\temp\\myfile.html');
const c=path.dirname('C:\\temp\\myfile.html');
// Returns: 'myfile.html'  // myfile.html is base name of path

console.log(a);

const b=path.dirname('/foo/bar/baz/asdf/quux');
// Returns: '/foo/bar/baz/asdf'
console.log(b);
console.log(c);


const d=path.extname('index.html'); // returns extension of file
// Returns: '.html'
console.log(d);


path.extname('index.coffee.md');
// Returns: '.md'

path.extname('index.');
// Returns: '.'

path.extname('index');
// Returns: ''

path.extname('.index');
// Returns: ''

path.extname('.index.md');
// Returns: '.md'


console.log(__filename) // path of current file name
console.log(path.extname(__filename)) // extension of current file name