/**
 * 现实生活中栈的一个例子是佩兹糖果盒。
 * 想象一下你有一盒佩兹糖果盒，里面塞满了红色、黄色和白色的糖果，但是你不喜欢黄色的糖果。
 * 使用栈（有可能用到多个栈）写一段程序，在不改变盒内其他糖果放置顺序的基础上，将黄色糖果移出。
 */

var Stack = require('./Stack.js');

function removeYellow(candy) {
    var stackTmp = new Stack();
    var pattern = /^yellow/;
    while (candy.top > -1) {
        var current = candy.pop();
        if (!pattern.test(current)) {
            stackTmp.push(current);
        }
    }
    var stackLeft = new Stack();
    while (stackTmp.top > -1) {
        stackLeft.push(stackTmp.pop());
    }
    return stackLeft;
}

var stackCandy = new Stack();
stackCandy.push('red1');
stackCandy.push('red2');
stackCandy.push('yellow1');
stackCandy.push('white1');
stackCandy.push('yellow2');
stackCandy.push('red3');
stackCandy.push('white2');
stackCandy.push('white3');
stackCandy.push('yellow3');
stackCandy.push('yellow4');
console.log('origin candy: ' + stackCandy.values);
var left = removeYellow(stackCandy);
console.log('left candy: ' + left.values);