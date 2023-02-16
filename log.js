// var log = {
//     error: function(error){
//         console.log('error! ' + error);
//     },
//     warning: function(warning){
//         console.log('Warning' + warning);
//     },
//     info: function(info){
//         console.log('Info' + info);
//     }
// };

// module.exports= log;

module.exports.log = function (msg){
    console.log(msg);
}
exports.simpleMessage = 'Siba';