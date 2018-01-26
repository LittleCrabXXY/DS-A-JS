// 写一个程序，该程序从一个文本文件中读入名字和电话号码，然后将其存入一个字典。
// 该程序需包含如下功能：
// 显示单个电话号码、显示所有电话号码、增加新电话号码、删除电话号码、清空所有电话号码。

var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Dictionary = require('./Dictionary.js');

var tel = fs.readFileSync('./Ch7-Dictionary/tel.txt');
tel = tel.toString().split('\r\n');
tel.pop();
var dicIns = new Dictionary();
while (tel.length) {
    var curTel = tel[0].split(' ');
    if (!dicIns.get(curTel[0])) {
        dicIns.set(curTel[0], curTel[1]);
    }
    tel.shift();
}

function write(ins) {
    var file = '';
    var keys = Object.keys(ins.datastore);
    while (keys.length) {
        file += (keys[0] + ' ' + ins.get(keys[0]) + '\r\n');
        keys.shift();
    }
    fs.writeFileSync('./Ch7-Dictionary/tel.txt', file);
}

var menu = '1.查询  2.显示所有  3.新增  4.删除  5.清空\r\n';
rl.question(menu, function(ans) {
    switch (+ans) {
        case 1: // 查询
        rl.question('查询姓名：', function(name) {
            console.log(name + ' -> ' + dicIns.get(name));
            rl.close();
        });
        break;
        case 2: // 显示所有
        dicIns.output();
        rl.close();
        break;
        case 3: // 新增
        rl.question('新增姓名：', function(name) {
            rl.question('新增号码：', function(number) {
                dicIns.set(name, number);
                write(dicIns);
                console.log('已新增');
                rl.close();
            });
        });
        break;
        case 4: // 删除
        rl.question('删除姓名：', function(name) {
            dicIns.remove(name);
            write(dicIns);
            console.log('已删除');
            rl.close();
        });
        break;
        case 5: // 清空
        dicIns.clear();
        write(dicIns);
        console.log('已清空');
        rl.close();
        break;
        default:
        rl.close();
    }
});