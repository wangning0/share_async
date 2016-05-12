/**
 * Created by wangning on 16/5/12.
 */
/*
*   Generator函数是一个普通函数,但是有两个特征:
*       1.function 命令与函数名之间有一个星号
*       2.函数体内部使用yield语句定义不同的内部状态
* */

var gen = function *() {
    yield console.log('hello');
    yield console.log('world');
    yield console.log('!');
};
var g = gen();
g.next();
g.next();
g.next();

var gen1 = function* () {
    yield 'hello';
    yield 'world';
};
var g1 = gen1();
console.log(g1.next());
console.log(g1.next());

var gen2 = function *(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y/3);
    return (x+y+z);
};
var g2 = gen2(5);

console.log(g2.next());
console.log(g2.next(12));
console.log(g2.next(13));

