/**
 * Created by wangning on 16/5/12.
 */
var x = 1;

function f(m) {
    return m * 2;
}

f(x + 5);

/*
* 1.传值调用
*   在进入函数体之前,就计算x+5的值
* 2.传名调用
*   将表达式x+5传入函数体,用到它的时候求值
*
* 编译器的"传名调用"实现,往往是将参数放到一个临时函数之中,再将这个临时函数传入函数体,这个临时函数就是Thunk函数
* */

// ====>

var thunk = function () {
    return x + 5 ;
};
function fas(thunk) {
    return thunk() * 2;
}

/*
* JavaScript 是传值调用
*
* */

//正常的readFile
fs.readFile(fileName,callback);
//Thunk版本的readFile
var Thunk = function (fileName) {
    return function (callback) {
        fs.readFile(fileName,callback);
    }
};

var readFileThunk = Thunk(fileName);
readFileThunk(callback);

//抽离出公共部分,则可以写成一个能将一个函数变成thunk版本的函数
function Thunk(fn){
    return function () {
        var args = Array.prototype.slice(arguments);
        return function (callback) {
            args.push(callback);
            return fn.apply(this,args);
        }
    }
}

