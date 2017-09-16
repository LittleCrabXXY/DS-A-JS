// 简单测试LinkedList

var LinkedList = require('./LinkedList.js');

var linkedListIns = new LinkedList();
linkedListIns.insert(1);
linkedListIns.insert(2);
linkedListIns.insert(3);
linkedListIns.insert(4, 2);
console.log('[info] after insert:');
linkedListIns.output();
var el = linkedListIns.remove(2);
console.log('[info] after remove:');
linkedListIns.output();
console.log('[info] the removed element: ' + el.element);