/**
 * 一个算术表达式的后缀表达式形式如下：
 * op1 op2 operator
 * 使用两个栈，一个用来存储操作数，另外一个用来存储操作符，
 * 设计并实现一个JavaScript函数，使该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。
 */

/**
 * 说明：以算术表达式合法为前提，且不考虑操作数为负数的情况
 */

var readline = require('readline');
var Stack = require('./Stack.js');

function infixToSuffix(exp) {
    var expArr = parse(exp);    // 中缀表达式
    var stackOp = new Stack();
    var suffix = [];    // 后缀表达式
    for (var i=0; i<expArr.length; i++) {       // 依次扫描中缀表达式的每一项
        if (typeof expArr[i] === 'number') {    // 遇到操作数，直接输出
            suffix.push(expArr[i]);
            continue;
        }
        switch (expArr[i]) {    // 遇到操作符
            case '(':   // 左括号
                stackOp.push(expArr[i]);    // 直接压栈
                break;
            case ')':   // 右括号
                while (stackOp.peek() !== '(') {    // 出栈，直至遇到左括号
                    suffix.push(stackOp.pop());
                }
                stackOp.pop();      // 左括号出栈
                break;
            case '+':   // 加法，同减法
            case '-':   // 减法
                while (stackOp.top > -1 && stackOp.peek() !== '(') {    // 出栈，直至遇到左括号，或者栈为空
                    suffix.push(stackOp.pop());
                }
                stackOp.push(expArr[i]);    // 将当前操作符压栈
                break;
            case '*':   // 乘法，同除法
            case '/':   // 除法
                while (stackOp.top > -1 && stackOp.peek() !== '(' && stackOp.peek() !== '+' && stackOp.peek() !== '-') {    // 出栈，直至遇到左括号/+/-，或者栈为空
                    suffix.push(stackOp.pop());
                }
                stackOp.push(expArr[i]);    // 将当前操作符压栈
                break;
            default:    // 非法的操作符
                console.log('[err]' + expArr[i] + 'is invalid.');
                return;
        }
    }
    while (stackOp.top > -1) {
        suffix.push(stackOp.pop());
    }

    var stackDigit = new Stack();
    for (i=0; i<suffix.length; i++) {   // 依次扫描后缀表达式的每一项
        if (typeof suffix[i] === 'number') {    // 遇到操作数，直接压栈
            stackDigit.push(suffix[i]);
            continue;
        }
        var second = stackDigit.pop();
        var first = stackDigit.pop();
        switch (suffix[i]) {    // 遇到操作符，进行对应计算，将计算结果压栈
            case '+':
                stackDigit.push(first + second);
                break;
            case '-':
                stackDigit.push(first - second);
                break;
            case '*':
                stackDigit.push(first * second);
                break;
            case '/':
                stackDigit.push(first / second);
                break;
            default:
                // nothing to do
        }
    }
    return {
        suffix: suffix.join(''),    // 后缀表达式
        calcu: stackDigit.peek()   // 计算结果
    };
}

function parse(str) {
    var arr = [];
    var digitStr = '';
    for (var i=0; i<str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9' || str[i] === '.') {
            digitStr += str[i];
        } else {
            if (digitStr !== '') {
                arr.push(Number(digitStr));
                digitStr = '';
            }
            arr.push(str[i]);
        }
    }
    if (digitStr !== '') {
        arr.push(Number(digitStr));
    }
    return arr;
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line) {
    var result = infixToSuffix(line);
    console.log('suffix: ' + result.suffix);
    console.log('calcu: ' + result.calcu);
    rl.close();
});