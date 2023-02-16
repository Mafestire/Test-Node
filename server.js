// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   console.log('Express Node Tutorial using GET');
//   res.send('<html><body><h2><USING GET<h2><body><html>');
// })

// app.post('/', function(req, res){
//   console.log('Express Node Tutorial using POST');
//   res.send('USING POST')
// })

// app.delete('/del_user', function(req, res){
//   console.log('Requesting a to DELETE for /del_user')
//     res.send('USING DELETE');
// })



// var server = app.listen(4000, () => {
//   console.log('server is listening to you on this port');
// });

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.html', function (req, res){
  res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function(req, res){
  response = {
    firstName:req.body.firstName,
    lastName:req.body.lastName
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port);
})