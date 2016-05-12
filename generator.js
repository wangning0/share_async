/**
 * Created by wangning on 16/5/12.
 */
/*
*   thunk函数可以作为generator函数的自动化管理
*
* */

/*var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

var gen = function* (){
    var r1 = yield readFile('/etc/mongodb.conf');
    console.log(r1.toString());
    var r2 = yield readFile('/etc/shells');
    console.log(r2.toString());
};*/

/*
* yield命令用于将程序的执行权移出Generator函数,那么就需要一种方法
* 将执行权再交还给Generator函数.
*
* 这种方法就是Thunk函数,因为它可以在回调函数里面,将执行权交还给Generator
* 函数.
* */

//举个例子

/*var g = gen();
var r1 = g.next();
r1.value(function (err,data) {
    if(err) throw err;
    var r2 = g.next(data);
    r2.value(function (err,data) {
        if(err) throw err;
        g.next(data);
    })
});*/

/*
*  变量g是Generator函数的内部指针,表示目前执行到哪一步,
*  next方法负责将指针移动到下一步,并返回该步的信息(value属性和done属性)
*
* Thunk函数真正的威力,在于自动执行Generator函数
*/

//基于Thunk函数的Generator执行器

/*function run(fn) {
    var gen = fn();
    
    function next(err,data) {
        var result = gen.next(data);
        if( result.done ) return ;
        result.value(next);
    }
    next();
}
run(gen);*/

//基于Promise对象的Generator自动执行
var fs = require('fs');
var readFile = function (fileName) {
    return new Promise(function (resolve,reject) {
        fs.readFile(fileName,'utf8',function (err,data) {
            if(err) reject(err);
            resolve(data);
        })
    })
};

var gen = function *() {
    var r1 = yield readFile('/etc/mongodb.conf');
    var r2 = yield readFile('/etc/shells');
    console.log(r1.toString());
    console.log(r2.toString());
}

function run(gen) {
    var g = gen();
    
    function next(data) {
        var result = g.next(data);
        if( result.done ) return result.value;
        result.value.then(function (data) {
            next(data);
        })
    }
    next();
}
run(gen);



