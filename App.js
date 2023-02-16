// console.log('Hello World');

// var time = 0;
// setInterval(() => {
//     time += 2;
//     console.log(time + 'seconds passed');
// }, 2000);

// var http = require('http');
// // console.log(http);

// var server = http.createServer(function(req, res){

//   //write code here


// });

// server.listen(5000); 

        // LOCAL MODULE
// var logOut = require('./log.js');

//  logOut.error('This is the error');

        // STRING LITERALLS
// var mgs = require('./message.js');
// console.log(mgs.simpleMessage);

// var mgs = require('./log.js');
// mgs.log('Hey There');

// let data = require('./data.js');
// console.log(data.firstName + ' ' + data.lastName);
// this.ProdID = ('#254', '#572', '#784'),
// this.ProdName = ('Soccer Boot', 'Track Top', 'Track Bottom'),
// this.ProdPrice = ('R647', 'R562', 'R500'),
// this.Description = ('Nike, Black and White', 'Red with (Nike) white strips', 'Nike Red' ),
// this.ProdSize = ('7.5', 'Medium', 32)


        // CLASS 
// var prods = require('./class.js');

// var pro1 = new prods(
//   '#254',
//   'Soccer Boot',
//   'R647',
//   'Nike, Black and White',
//   '7.5'
// );
// var pro2 = new prods(
//   '#572',
//   'Track Top',
//   'R562',
//   'Red with (Nike) white strips',
//   'Medium'
// );
// var pro3 = new prods(
//   '#784',
//   'Track Bottom',
//   'R562',
//   'Nike Red',
//   '32'
// );
// console.log(pro1.allDetails());
// console.log(pro2.allDetails());
// console.log(pro3.allDetails());


          // OPEN FILE
// var openFile = require('fs');

// openFile.open('test.txt', 'r', function(err, data){
//   if(err){
//     return console.error(err);
//   }

//   var buffer = new Buffer.alloc(50);

//   openFile.read(data, buffer, 0, buffer.length, 0, function(err, bytes){
//     if(err) throw err;

//             // Print only read bytes to avoid junk
//     if (bytes > 0){
//       console.log(buffer.slice(0, bytes).toString());
//     }

//             // close file
//     openFile.close(data, function (err){
//       if (err) throw err;
//     });
//   });

// });

          // SERVER
// const http = require('http');

// const server = http.createServer(function(req, res){
//     res.setHeader('Content-type', 'application/json');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.writeHead(200);

//     //let dataObj = {id: 123, name: 'Bob', surname: 'Builder', email: 'bobbuild@work.org'};
//     //let data = JSON.stringify(dataObj);
//     res.end(data);
// });

// server.listen(1234, function(){
//   console.log('Listening on port 1234');
// })

            //COLLECT DATABASE AND SHOW DATA
const { createPool } = require('mysql');

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Employees',
  connectionLimit: 30
});

pool.query('SELECT * FROM Employees', (err, result, fields) => {
  if(err) {
    return console.error(err);
  }
  return console.log(result);
});