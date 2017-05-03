// 使用队列实现的基数排序

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var Queue = require('./Queue.js');

function radixSort(arr) {
    var max = Math.max(arr);
    var length = max.toString().length;
    var bins = [];
    for (var i=0; i<10; i++) {
        bins.push(new Queue());
    }
    for (i=0; i<length; i++) {
        var radix = Math.pow(10, i);
        for (var j=0; j<arr.length; j++) {
            var index = Math.floor(arr[j] / radix) % 10;
            bins[index].enQueue(arr[j]);
        }
        arr.splice(0, arr.length);
        for (j=0; j<bins.length; j++) {
            while (bins[j].peekFront() || (bins[j].peekFront() === 0)) {
                arr.push(bins[j].deQueue());
            }
        }
    }
}

rl.on('line', function(line) {
    var arr = line.split(' ').map(function(value) {
        return parseInt(value);
    });
    radixSort(arr);
    console.info('After radixSort: ' + arr.join(' '));
    rl.close();
});