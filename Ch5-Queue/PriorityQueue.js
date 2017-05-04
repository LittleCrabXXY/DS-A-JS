// 优先队列
// 约定：优先权为正整数，且1的优先权最高

module.exports = PriorityQueue;

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
        if (this.values[i].priority < this.values[index].priority) {
            index = i;
        }
    }
    return this.values.splice(index, 1);
};