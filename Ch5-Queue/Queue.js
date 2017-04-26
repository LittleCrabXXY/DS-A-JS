// 使用数组实现的Queue

module.exports = Queue;

function Queue() {
    this.values = [];
}

Queue.prototype = {
    constructor: Queue,
    enQueue: function(value) {
        this.values.push(value);
    },
    deQueue: function() {
        return this.values.shift();
    },
    peekFront: function() {
        return this.values[0];
    },
    peekBack: function() {
        return this.values[this.values.length - 1];
    },
    clear: function() {
        this.values = [];
    }
};