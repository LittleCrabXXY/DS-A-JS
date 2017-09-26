// 简单测试DLinkedList

var DLinkedList = require('./DLinkedList.js');

var dLinkedListIns = new DLinkedList();
dLinkedListIns.insert(1);
dLinkedListIns.insert(2);
dLinkedListIns.insert(3);
dLinkedListIns.insert(4, 2);
console.log('[info] after insert:');
dLinkedListIns.output();
var el = dLinkedListIns.remove(2);
console.log('[info] after remove:');
dLinkedListIns.output();
console.log('[info] the removed element: ' + el.element);
console.log('[info] reversed:');
dLinkedListIns.output(true);