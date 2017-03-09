/**
 * 增加一个向列表中插入元素的方法，该方法只在待插元素小于列表中的所有元素时才执行插入操作。
 */

var List = require('./List.js');

List.prototype.insertMin = function(value, index) {
    if (typeof value !== 'number' && typeof value !== 'string') {
        console.error('[err] List.insertMin(): invalid arg 0');
        return false;
    }
    var isMin = this.values.every(function(item) {
        return value < item;
    });
    if (isMin) {
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
var result = listIns.insertMin(4, 0);
console.log('insert result: ' + result + '\nafter insertMin: ' + listIns.values);
result = listIns.insertMin(0, 0);
console.log('insert result: ' + result + '\nafter insertMin: ' + listIns.values);