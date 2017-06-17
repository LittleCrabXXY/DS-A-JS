/**
 * 修改优先队列，使得优先级高的元素优先码大（即优先码1的优先权最低）。
 * 写一段程序测试改动。
 */

var Queue = require('./Queue.js');

function PriorityQueue() {
    Queue.apply(this);
}
PriorityQueue.prototype = new Queue();
PriorityQueue.prototype.constructor = PriorityQueue;
PriorityQueue.prototype.enQueue = function(value) {
    // value：一个指定priority属性的对象，不指定时默认priority值为1
    if (typeof value !== 'object') {
        console.error('[err] Each item of PriorityQueue should be an Object.');
        return;
    }
    if (!value.priority) {
        value.priority = 1;
    }
    this.values.push(value);
};
PriorityQueue.prototype.deQueue = function() {
    var index = 0;
    for (var i=1; i<this.values.length; i++) {
        if (this.values[i].priority > this.values[index].priority) {
            index = i;
        }
    }
    return this.values.splice(index, 1);
};

// 测试
function Obj(value, pri) {
    this.value = value;
    this.priority = pri;
}

var priQIns = new PriorityQueue();
priQIns.enQueue(new Obj('first'));
priQIns.enQueue(new Obj('second', 5));
priQIns.enQueue(new Obj('third', 4));
console.log('After enQueue:');
for (var i=0; i<priQIns.values.length; i++) {
    var cur = priQIns.values[i];
    console.log(cur.value + ' ' + cur.priority);
}
priQIns.deQueue();
console.log('After deQueue:');
for (i=0; i<priQIns.values.length; i++) {
    cur = priQIns.values[i];
    console.log(cur.value + ' ' + cur.priority);
}