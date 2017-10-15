// 传说在公园1世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的40个同胞被罗马士兵包围。
// 犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。他们围城一个圈，从一个人开始，
// 数到第三个人时将第三个人杀死，然后再数，直到杀光所有人。约瑟夫和另外一个人决定不参加这个
// 疯狂的游戏，他们快速地计算出了两个位置，站在那里得以幸存。
// 写一段程序将n个人围城一圈，并且第m个人会被杀掉，计算一圈人中哪两个人最后会存活。使用循环
// 链表解决该问题。

var CLinkedList = require('./CLinkedList.js');
CLinkedList.prototype.advance = function advance(n) {
    // n小于0不合法，返回false
    if (n < 0) {
        return false;
    }
    // this.current不存在时初始化
    if (typeof this.current === 'undefined') {
        this.current = this.head;
    }
    // 向前移动
    while (n--) {
        this.current = this.current.next;
        if (this.current.element === null) {
            this.current = this.head.next;
        }
    }

    return true;
};
CLinkedList.prototype.show = function show() {
    var currentEl = null;
    if (this.current) {
        currentEl = this.current.element;
    }
    
    return currentEl;
};


var cLinkedListIns = new CLinkedList();
var n = 10,
    m = 3;
for(var i=1; i<=n; i++) {
    cLinkedListIns.insert(i);
}
// kill
cLinkedListIns.advance(1);
while (n > 2) {
    if (m - 1 > 0) {
        cLinkedListIns.advance(m - 1);
    }
    var currentEl = cLinkedListIns.show();
    cLinkedListIns.advance(1);
    cLinkedListIns.remove(currentEl);
    n--;
}
// survive
console.log('[info] survive:');
cLinkedListIns.output();