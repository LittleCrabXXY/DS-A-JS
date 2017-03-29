// 数制转换：将一个十进制数转换成一个二至九进数

var Stack = require('./Stack.js');

function convert(value, radix) {
    var stackIns = new Stack();
    do {
        stackIns.push(value % radix);
        value = Math.floor(value / radix);
    } while (value !== 0);
    var converted = '';
    while (stackIns.top > -1) {
        converted += stackIns.pop();
    }
    return converted;
}

var test = 10;
console.log(test + ' is converted to ' + convert(test, 2) + ' with base 2');
console.log(test + ' is converted to ' + convert(test, 8) + ' with base 8');