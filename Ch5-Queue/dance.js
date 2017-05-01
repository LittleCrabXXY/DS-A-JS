// 模拟方块舞

var fs = require('fs');

var Queue = require('./Queue.js');
Queue.prototype.count = function() {
    return this.values.length;
};

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(filepath) {
    var male = new Queue();
    var female = new Queue();
    var file = fs.readFileSync(filepath);
    var dancers = file.toString().split('\r\n');
    for (var i=0; i<dancers.length; i++) {
        var dancer = dancers[i].split(' ');
        if (dancer[0].toUpperCase() === 'M') {
            male.enQueue(new Dancer(dancer[1], dancer[0]));
        } else if (dancer[0].toUpperCase() === 'F') {
            female.enQueue(new Dancer(dancer[1], dancer[0]));
        }
    }
    return {
        male: male,
        female: female
    };
}

function dance(dancers) {
    console.info('[info] The dance partners are:');
    while (dancers.male.peekFront() && dancers.female.peekFront()) {
        var maleDancer = dancers.male.deQueue();
        var femaleDancer = dancers.female.deQueue();
        console.info('Female dancer is ' + femaleDancer.name + ' and male dancer is ' + maleDancer.name + '.');
    }
    if (dancers.male.peekFront()) {
        console.info('[info] There are ' + dancers.male.count() + ' male dancers waiting to dance.');
    }
    if (dancers.female.peekFront()) {
        console.info('[info] There are ' + dancers.female.count() + ' female dancers waiting to dance.');
    }
}

var dancers = getDancers('./Ch5-Queue/dancers.txt');
dance(dancers);