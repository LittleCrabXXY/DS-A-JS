// 简单测试CLinkedList

var CLinkedList = require('./CLinkedList.js');

var cLinkedListIns = new CLinkedList();
cLinkedListIns.insert(1);
cLinkedListIns.insert(2);
cLinkedListIns.insert(3);
cLinkedListIns.insert(4, 2);
console.log('[info] after insert:');
cLinkedListIns.output();
var el = cLinkedListIns.remove(2);
console.log('[info] after remove:');
cLinkedListIns.output();
console.log('[info] the removed element: ' + el.element);