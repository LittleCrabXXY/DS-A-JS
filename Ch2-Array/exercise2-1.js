/**
 * 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
 */

function Grade() {
    this.grades = [];
}

Grade.prototype = {
    constructor: Grade,
    addGrade: function(newGrade) {
        this.grades.push(newGrade);
    },
    average: function() {
        var grades = this.grades;
        var total = 0;
        for (var i=0; i<grades.length; i++) {
            total += grades[i];
        }
        var ave = (total / grades.length).toFixed(2);
        console.log('average grade: ' + ave);
    }
};

var test = new Grade();
test.addGrade(70);
test.addGrade(80);
test.addGrade(90);
test.average();