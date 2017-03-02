/**
 * 修改本章前面出现过的weeklyTemps对象，使它可以使用一个二维数组来存储每月的有用数据。
 * 增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。
 */

function MonthData() {
    this.dataStore = [];
}

MonthData.prototype = {
    constructor: MonthData,
    addWeekly: function() {
        var weekData = [];
        for (var i=0; i<arguments.length; i++) {
            weekData.push(arguments[i]);
        }
        this.dataStore.push(weekData);
    },
    aveMonth: function() {
        var data = this.dataStore;
        var total = 0,
            count = 0;
        for (var i=0; i<data.length; i++) {
            for (var j=0; j<data[i].length; j++) {
                total += data[i][j];
                count++;
            }
        }
        var average = (total / count).toFixed(2);
        console.log('average of month: ' + average);
    },
    aveOneWeek: function(index) {
        var data = this.dataStore[index - 1];
        var total = 0;
        for (var i=0; i<data.length; i++) {
            total += data[i];
        }
        var average = (total / data.length).toFixed(2);
        console.log('average of week ' + index + ': ' + average);
    },
    aveEveryWeek: function() {
        console.log('=== average of all weeks ===');
        for (var i=0; i<this.dataStore.length; i++) {
            this.aveOneWeek(i + 1);
        }
    }
};

var month = new MonthData();
month.addWeekly(12,15);
month.addWeekly(14,13,16,18,22,21,21);
month.addWeekly(17,15,16,16,17,15,15);
month.addWeekly(16,18,18,20,22,22,23);
month.addWeekly(22,21,21,19,18,20,21);
month.addWeekly(22);
month.aveMonth();
month.aveOneWeek(2);    // 第2周的平均值
month.aveEveryWeek();