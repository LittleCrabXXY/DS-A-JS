// 使用数组实现的List，事实上应该是个SeqList或者ArrayList？

module.exports = List;

function List() {
    this.values = [];
}

List.prototype = {
    constructor: List,
    isEmpty: function() {
        return this.values.length === 0;
    },
    append: function(value) {
        this.values[this.values.length] = value;
    },
    insert: function(value, index) {
        if (typeof index !== 'number' || index < 0) {
            console.error('[err] List.insert(): invalid arg 1');
            return false;
        } else {
            this.values.splice(index, 0, value);
            return true;
        }
    },
    remove: function(value) {
        var index = this.search(value);
        if (index === -1) {
            return false;
        }
        this.values.splice(index, 1);
        return true;
    },
    clear: function() {
        this.values = [];
    },
    search: function(value) {
        return this.values.indexOf(value);
    }
};