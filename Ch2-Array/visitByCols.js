// 第29页计算“各test均分”的code，个人认为应当编写如下

var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0;
for (var col=0; col<grades[0].length; ++col) {
    for (var row=0; row<grades.length; ++row) {
        total += grades[row][col];
    }
    average = total / grades.length;
    console.log('test ' + parseInt(col + 1) + ' average: ' + average.toFixed(2));
    total = 0;
    average = 0;
}