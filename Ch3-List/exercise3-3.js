/**
 * 创建Person类，该类用于保存人的姓名和性别信息。创建一个至少包含10个Person对象的列表。写一个函数显示列表中所有拥有相同性别的人。
 */

var List = require('./List.js');

function Person(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getSex(people, sex) {
    if (sex !== 'male' && sex !== 'female') {
        console.error('[err] getSex(): invalid arg 1');
    } else {
        people.values.forEach(function(item) {
            if (item.sex === sex) {
                console.log(item.name);
            }
        });
    }
}

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
getSex(listIns, 'male');
console.log('===== people whose sex is female =====');
getSex(listIns, 'female');