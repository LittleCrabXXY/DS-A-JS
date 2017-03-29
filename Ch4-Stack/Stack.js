// 使用数组实现的Stack

module.exports = Stack;

function Stack() {
    this.values = [];
    this.top = -1;      // top指向栈顶元素
}

Stack.prototype = {
    constructor: Stack,
    push: function(value) {
        this.values[++this.top] = value;
    },
    pop: function() {
        var value = this.values[this.top];
        this.top--;
        return value;
    },
    peek: function() {
        return this.values[this.top];
    },
    clear: function() {
        this.values = [];
        this.top = -1;
    }
};