var fs = require('fs');

var adder = function (a, b) {
    return `The sum of the two numbers is ${a + b}`;
};

var counter = function(arr){
    return `The length of the array is ${arr.length}`;
}

var readMe = function(file){
    return `${fs.readFileSync(file, 'utf8')}`;
};

var writeMe = function(file, source){
    fs.readFile(source, 'utf8', function(err, data){
        fs.writeFile(file, data)
    }); 
};

var delFile = function(file){
    fs.unlink(file, function(err, data){
        return data;
    })
};

var makeDir = function(dir){
    fs.mkdir(dir, function(err, data){
        return data;
    })
};

var removeDir = function (dir) {
    fs.rmdir(dir, function (err, data) {
        return data;
    })
};

module.exports = {
    adder: adder,
    counter: counter,
    readMe: readMe,
    writeMe: writeMe,
    delFile: delFile,
    makeDir: makeDir,
    removeDir: removeDir,
}

