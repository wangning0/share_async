/**
 * Created by wangning on 16/5/9.
 */
var fs = require('fs');
function readFile(path, cb) {
    fs.readFile(path, {encoding: 'utf8'}, cb);
}

readFile('a.js', function (err, data) {
    console.log(data);
    readFile('a.js', function (err, data) {
        console.log(data);
        readFile('a.js', function (err, data) {
            console.log(data);
            readFile('a.js',function (err,data) {
                console.log(data);
                readFile('a.js',function (err,data) {
                    console.log(data)
                    readFile('a.js',function (err,data) {
                        console.log(data)
                        readFile('a.js',function (err,data) {
                            console.log(data)
                            readFile('a.js',function (err,data) {
                                console.log(data)
                                readFile('a.js',function (err,data) {
                                    console.log(data)
                                    readFile('a.js',function (err,data) {
                                        console.log(data)
                                        readFile('a.js',function (err,data) {
                                            console.log(data)
                                            readFile('a.js',function (err,data) {
                                                console.log(data)
                                                readFile('a.js',function (err,data) {
                                                    console.log(data)
                                                    readFile('a.js',function (err,data) {
                                                        console.log(data)
                                                        readFile('a.js',function (err,data) {
                                                            console.log(data)
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });
    });
});
