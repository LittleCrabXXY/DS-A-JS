/**
 * 使用exercise5-1中完成的Deque类来判断一个给定单词是否为回文。
 */

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var Queue = require('./Queue.js');
function Deque() {
    Queue.apply(this);
}
Deque.prototype = new Queue();
Deque.prototype.constructor = Deque;
Deque.prototype.enQueueFront = function(value) {
    this.values.unshift(value);
};
Deque.prototype.deQueueBack = function() {
    return this.values.pop();
};

var dequeIns = new Deque();

rl.on('line', function(line) {
    var chars = line.split('');
    for (var i=0; i<chars.length; i++) {
        dequeIns.enQueue(chars[i]);
    }
    var len = dequeIns.values.length;
    if (len % 2 === 1) {
        console.log('[info] ' + line + ' is not a palindrome.');
    } else {
        for (i=0; i<Math.floor(len / 2); i++) {
            var front = dequeIns.deQueue();
            var back = dequeIns.deQueueBack();
            if (front !== back) {
                console.log('[info] ' + line + ' is not a palindrome.');
                break;
            }
        }
        if (i >= Math.floor(len / 2)) {
            console.log('[info] ' + line + ' is a palindrome.');
        }
    }
    rl.close();
});