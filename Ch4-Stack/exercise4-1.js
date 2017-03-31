/**
 * 栈可以用来判断一个算术表达式的括号是否匹配。
 * 编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。
 */

var readline = require('readline');
var Stack = require('./Stack.js');

function isSymmetrical(exp) {
    var stackIns = new Stack();
    var expArr = exp.split('');
    for (var i=0; i<expArr.length; i++) {
        if (expArr[i] === '(') {
            stackIns.push(expArr[i]);
        }
        if (expArr[i] === ')') {
            stackIns.pop();
        }
    }
    if (stackIns.top === -1) {
        return true;
    } else {
        return false;
    }
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {
    var result = isSymmetrical(line);
    if (result) {
        console.log(line + ' is symmetrical.');
    } else {
        console.log(line + ' is not symmetrical.');
    }
    rl.close();
});