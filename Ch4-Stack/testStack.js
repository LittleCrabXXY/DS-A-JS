// 简单测试Stack

var Stack = require('./Stack.js');

var stackIns = new Stack();
stackIns.push(4);
stackIns.push(5);
stackIns.push(6);
console.log('after push: ' + stackIns.values);
stackIns.pop();
console.log('after pop, the top value is: ' + stackIns.peek());
stackIns.clear();
console.log('after clear, the top value is: ' + stackIns.peek());