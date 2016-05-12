/**
 * Created by wangning on 16/5/12.
 */
var fs = require('fs');

function readFile(path) {
    return new Promise(function (resolve,reject) {
        fs.readFile(path,'utf8',function (err,data) {
            if(err){
                reject(err);
            }else {
                resolve(data);
            }
        })
    })
}

readFile('./co.js').then(function(data){
    console.log(data);
}).then(function () {
    console.log(1);
}).then(function () {
    console.log(2);
}).then(function () {
    console.log(3);
}).catch(function (err) {
    console.log(err);
})