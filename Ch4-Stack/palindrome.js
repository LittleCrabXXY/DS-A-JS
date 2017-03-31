// 判断给定的字符串是否是回文

var Stack = require('./Stack.js');

function isPalindrome(str) {
    var stackIns = new Stack();
    var reverseStr = str.split('').reverse().join('');
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