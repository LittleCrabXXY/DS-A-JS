/**
 * 增加一个向列表中插入元素的方法，该方法只在待插入元素大于列表中的所有元素时才执行插入操作。
 * 这里的大于有多重含义，对于数字，它是指数值上的大小；对于字母，它是指在字母表中出现的先后顺序。
 */

var List = require('./List.js');

List.prototype.insertMax = function(value, index) {
    if (typeof value !== 'number' && typeof value !== 'string') {
        console.error('[err] List.insertMax(): invalid arg 0');
        return false;
    }
    var isMax = this.values.every(function(item) {
        return value > item;
    });
    if (isMax) {
        return this.insert(value, index);
    } else {
        return false;
    }
};

var listIns = new List();
for (var i=3; i<8; i++) {
    listIns.append(i);
}
console.log('after append: ' + listIns.values);
var result = listIns.insertMax(4, 0);
console.log('insert result: ' + result + '\nafter insertMax: ' + listIns.values);
result = listIns.insertMax(10, 0);
console.log('insert result: ' + result + '\nafter insertMax: ' + listIns.values);