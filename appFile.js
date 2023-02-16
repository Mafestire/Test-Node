var file = require('fs');

// file.readFile('test.txt', function(err, data){
//     if (err)
//     throw err;
//     console.log(data.toString());
// });

var data = fs.file.readFileSync('test.txt', 'utf8');
console.log(data);