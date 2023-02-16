let delFile = require('fs');

delFile.unlink('test.txt', function(){
    console.log('File deleted succesfuly');
});