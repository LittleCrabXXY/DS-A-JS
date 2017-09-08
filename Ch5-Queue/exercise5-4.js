/**
 * 修改候诊室程序，使得候诊室内的活动可以被控制。
 * 写一个类似菜单系统，让用户可以进行如下选择：
 * a.患者进入候诊室；
 * b.患者就诊；
 * c.显示等待就诊患者名单。
 */

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var PriorityQueue = require('./PriorityQueue.js');
function Patient(name, pri) {
    this.name = name;
    this.priority = pri;
}

var patientQueue = new PriorityQueue();
var menuText = '请选择：\na.患者进入候诊室\nb.患者就诊\nc.显示等待就诊患者名单\nd.退出\n';
function activity(ans) {
    switch (ans) {
        case 'a':
            rl.question('患者姓名：', function(name) {
                rl.question('优先级：', function(priority) {
                    patientQueue.enQueue(new Patient(name, priority));
                    console.log('[info] ' + patientQueue.peekFront().name + '进入候诊室');
                    rl.question(menuText, function(answer) {
                        activity(answer);
                    });
                });
            });
            break;
        case 'b':
            var seen = patientQueue.deQueue();
            if (seen) {
                console.log('[info] ' + seen.name + '就诊');
            } else {
                console.log('[info] 没有等待就诊的患者');
            }
            rl.question(menuText, function(answer) {
                activity(answer);
            });
            break;
        case 'c':
            console.log('----- 等待就诊患者名单 -----');
            for (var i=0; i<patientQueue.values.length; i++) {
                console.log(patientQueue.values[i].name + ': ' + patientQueue.values[i].priority);
            }
            console.log('---------------------------');
            rl.question(menuText, function(answer) {
                activity(answer);
            });
            break;
        default:
            rl.close();
    }
}
rl.question(menuText, function(answer) {
    activity(answer);
});