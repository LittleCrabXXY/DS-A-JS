/**
 * 修改Queue类，形成一个Deque类。
 * 这是一个和队列类似的数据结构，允许从队列两端添加和删除元素，因此也叫双向队列。
 * 写一段测试程序测试该类。
 */

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

// testDeque
var dequeIns = new Deque();
dequeIns.enQueue(1);
dequeIns.enQueue(2);
dequeIns.enQueue(3);
console.log('after enQueue: ' + dequeIns.values);
dequeIns.enQueueFront(4);
dequeIns.enQueueFront(5);
dequeIns.enQueueFront(6);
console.log('after enQueueFront: ' + dequeIns.values);
dequeIns.deQueue();
console.log('after deQueue: ' + dequeIns.values);
dequeIns.deQueueBack();
console.log('after deQueueBack: ' + dequeIns.values);