// 判断给定的字符串是否是回文

var Stack = require('./Stack.js');

function isPalindrome(str) {
    var reverseStr = '';
    // reverseStr = str.split('').reverse().join('');   // 不使用栈
    /* 使用栈 - 以下 */
    var stackIns = new Stack();
    for (var i=0; i<str.length; i++) {
        stackIns.push(str.charAt(i));
    }
    while (stackIns.peek()) {
        reverseStr += stackIns.pop();
    }
    /* 使用栈 - 以上*/
    if (reverseStr === str) {
        return true;
    } else {
        return false;
    }
}

var testStr = 'racecar';
var result = isPalindrome(testStr);
if (result) {
    console.log(testStr + ' is a palindrome.');
} else {
    console.log(testStr + ' is not a palindrome.');
}