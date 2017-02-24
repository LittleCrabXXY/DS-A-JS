/**
 * 创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词。
 */

function ToWord() {
    this.chars = [];
    for (var i=0; i<arguments.length; i++) {
        this.chars.push(arguments[i]);
    }
}

ToWord.prototype = {
    constructor : ToWord,
    toWord : function() {
        var word = this.chars.join('');
        console.log('the word is: ' + word);
    }
};

var test = new ToWord('t', 'e', 's', 't');
test.toWord();