// 字典的实现 Dictionary

module.exports = Dictionary;

function Dictionary() {
    this.datastore = {};
}
Dictionary.prototype = {
    constructor: Dictionary,
    set: function (key, value) {
        this.datastore[key] = value;
    },
    get: function (key) {
        return this.datastore[key];
    },
    remove: function (key) {
        delete this.datastore[key];
    },
    output: function () {
        var keys = Object.keys(this.datastore);
        for (var i=0; i<keys.length; i++) {
            console.log(keys[i] + ' -> ' + this.datastore[keys[i]]);
        }
    },
    outputInOrder: function () {
        var keys = Object.keys(this.datastore).sort();
        for (var i=0; i<keys.length; i++) {
            console.log(keys[i] + ' -> ' + this.datastore[keys[i]]);
        }
    },
    count: function () {
        var keys = Object.keys(this.datastore);
        return keys.length;
    },
    clear: function () {
        var keys = Object.keys(this.datastore);
        for (var i=0; i<keys.length; i++) {
            delete this.datastore[keys[i]];
        }
    }
};