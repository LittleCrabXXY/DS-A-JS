// 简单测试Queue

var Queue = require('./Queue.js');

var queueIns = new Queue();
queueIns.enQueue(1);
queueIns.enQueue(2);
queueIns.enQueue(3);
queueIns.enQueue(4);
queueIns.enQueue(5);
console.log('after enQueue: ' + queueIns.values);
queueIns.deQueue();
console.log('after deQueue: ' + queueIns.values);
console.log('front element: ' + queueIns.peekFront());
console.log('back element: ' + queueIns.peekBack());
queueIns.clear();
console.log('after clear: ' + queueIns.values);