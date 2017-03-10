// 简单测试List

var List = require('./List.js');

var listIns = new List();
for (var i=3; i<8; i++) {
    listIns.append(i);
}
console.log('after append: ' + listIns.values);
listIns.insert(10, 2);
console.log('after insert: ' + listIns.values);
listIns.remove(5);
console.log('after remove: ' + listIns.values);
var result = listIns.search(7);
console.log('search result: ' + result);
result = listIns.search(0);
console.log('search result: ' + result);
listIns.clear();
console.log('after clear, is empty: ' + listIns.isEmpty());