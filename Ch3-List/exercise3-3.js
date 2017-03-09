/**
 * 创建Person类，该类用于保存人的姓名和性别信息。创建一个至少包含10个Person对象的列表。写一个函数显示列表中所有拥有相同性别的人。
 */

function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}

var List = require('./List.js');

List.prototype.getSex = function(sex) {
    if (sex !== 'male' && sex !== 'female') {
        console.error('[err] List.getSex(): invalid arg 0');
    } else {
        this.values.forEach(function(item) {
            if (item.sex === sex) {
                console.log(item.name);
            }
        });
    }
};

var listIns = new List();
listIns.append(new Person('Tom', 'male'));
listIns.append(new Person('Kitty', 'female'));
listIns.append(new Person('Tony', 'male'));
listIns.append(new Person('Alice', 'female'));
listIns.append(new Person('Amy', 'female'));
listIns.append(new Person('John', 'male'));
listIns.append(new Person('Mary', 'female'));
listIns.append(new Person('David', 'male'));
listIns.append(new Person('James', 'male'));
listIns.append(new Person('Lily', 'female'));
console.log('===== people whose sex is male =====');
listIns.getSex('male');
console.log('===== people whose sex is female =====');
listIns.getSex('female');