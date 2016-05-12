/**
 * Created by wangning on 16/5/12.
 */
var fs = require('fs');

function Event() {};

Event.prototype._events = {};

Event.prototype.on = function(type, listener) {
    if (this._events[type]) {
        this._events[type].push(listener);
    } else {
        this._events[type] = [listener];
    }
}

Event.prototype.emit = function(type) {
    var args = Array.prototype.slice.call(arguments, 1);
    var that = this;
    this._events[type].forEach(function(item, index) {
        item.apply(that, args);
    })
};

var e = new Event();

e.on('init',function () {
    console.log('init');
    setTimeout(function () {
        e.emit('ACompleted');
    },1000)
});
e.on('ACompleted',function(){
    console.log('a');
    setTimeout(function () {
        e.emit('BCompleted');
    },1000)
});
e.on('BCompleted',function(){
    console.log('b');
    setTimeout(function () {
        e.emit('CCompleted');
    },1000)
});
e.on('CCompleted',function () {
    console.log('c');
    console.log('done');
});
e.on('error',function () {
    console.log('err');
});

fs.readFile('./co.js','utf8',function (err,data) {
    if(err)
        e.emit('error');
    else {
        console.log(data);
        e.emit('init');
    }
})