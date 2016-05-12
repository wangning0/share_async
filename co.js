/**
 * Created by wangning on 16/5/9.
 */

var fs = require('fs');
var co = require('co');

function readFile(path) {
    return function (cb) {
        fs.readFile(path,'utf-8',cb);
    }
}

co(function *() {
    var dataA = yield readFile('co.js');
    console.log(dataA);
    var dataB = yield readFile('co.js');
    console.log(dataB);
    var dataB = yield readFile('co.js');
    console.log(dataB);
}).then(function () {
    console.log(1);
}).catch(function (err) {
    console.log(err);
});