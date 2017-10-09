// 使用单向链表写一段程序，记录用户输入的一组测验成绩。

var LinkedList = require('./LinkedList.js');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var linkedListIns = new LinkedList();
console.log('please input scores:');
rl.on('line', function(line) {
    var scores = line.split(' ');
    scores.forEach(function(score) {
        score = +score;
        linkedListIns.insert(score);
    });

    console.log('recorded scores:');
    linkedListIns.output();
    rl.close();
});