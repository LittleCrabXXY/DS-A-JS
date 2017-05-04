// 简单测试PriorityQueue

var PriorityQueue = require('./PriorityQueue.js');

function Obj(value, pri) {
    this.value = value;
    this.priority = pri;
}

var priQIns = new PriorityQueue();
priQIns.enQueue(new Obj('Amy', 7));
priQIns.enQueue(new Obj('Sam', 5));
priQIns.enQueue(new Obj('Lily'));
priQIns.enQueue(new Obj('Rose', 3));
console.info('After enQueue:');
for (var i=0; i<priQIns.values.length; i++) {
    var current = priQIns.values[i];
    console.info(current.value + ' ' + current.priority);
}
priQIns.deQueue();
console.info('After deQueue:');
for (i=0; i<priQIns.values.length; i++) {
    current = priQIns.values[i];
    console.info(current.value + ' ' + current.priority);
}
var front = priQIns.peekFront();
console.info('peekFront: ' + front.value + ' ' + front.priority);
var back = priQIns.peekBack();
console.info('peekEnd: ' + back.value + ' ' + back.priority);