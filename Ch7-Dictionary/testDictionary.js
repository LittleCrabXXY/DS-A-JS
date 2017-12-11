// 简单测试Dictionary

var Dictionary = require('./Dictionary.js');

var dicIns = new Dictionary();
dicIns.set('Mike', 11);
dicIns.set('Lucy', 12);
dicIns.set('Bob', 80);
dicIns.set('Tom', 4);
console.log('the number of properties: ' + dicIns.count());
console.log('Lucy: ' + dicIns.get('Lucy'));
console.log('the dicIns:');
dicIns.output();
dicIns.remove('Mike');
console.log('after remove(), the dicIns in order:');
dicIns.outputInOrder();
dicIns.clear();
console.log('after clear(), the number of properties: ' + dicIns.count());