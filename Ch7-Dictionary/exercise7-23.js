// 使用Dictionary类写一个程序，该程序用来存储一段文本中各个单词出现的次数。
// 该程序显示每个单词出现的次数，但每个单词只显示一次。
// 比如下面一段话"the brown fox jumped over the blue fox"，程序的输出应为：
// the: 2
// brown: 1
// fox: 2
// jumped: 1
// over: 1
// blue: 1

// 使单词按字母顺序显示

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});
var Dictionary = require('./Dictionary.js');
Dictionary.prototype.output = function() {
    var keys = Object.keys(this.datastore);
    for (var i=0; i<keys.length; i++) {
        console.log(keys[i] + ': ' + this.datastore[keys[i]]);
    }
};
Dictionary.prototype.outputInOrder = function() {
    var keys = Object.keys(this.datastore).sort();
    for (var i=0; i<keys.length; i++) {
        console.log(keys[i] + ': ' + this.datastore[keys[i]]);
    }
};

var dicIns = new Dictionary();
console.log('please input text:');
rl.on('line', function(line) {
    var words = line.split(' ');
    for (var i=0; i<words.length; i++) {
        var curWord = words[i];
        var curValue = dicIns.get(curWord);
        if (curValue) {
            dicIns.set(curWord, curValue + 1);
        } else {
            dicIns.set(curWord, 1);
        }
    }
    console.log('word count result:');
    dicIns.output();
    console.log('word count result in order:');
    dicIns.outputInOrder();
    rl.close();
});