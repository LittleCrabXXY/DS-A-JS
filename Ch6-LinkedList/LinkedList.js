// 链表的实现

/**
 * 【数组 vs 链表】
 *              优点                          缺点
 * 
 * 数组       随机访问                    一般：增删不便
 *                                       js中：数组被实现成了对象，效率很低
 * 
 * 链表       一般：增删方便              随机访问不便
 *           js中：相对数组效率可高
 * -----------------------------------------------------------------------
 * 【头结点】
 * 方便在链表首增删节点，使得能够与其他情况统一处理
 * -----------------------------------------------------------------------
 */

module.exports = LinkedList;

// 节点
function Node(element) {
    this.element = element;
    this.next = null;
}

// 链表
function LinkedList() {
    this.head = new Node(null);   // 链表头
}
LinkedList.prototype = {
    constructor: LinkedList,
    insert: function(el, preEl) {   // 插入
        var preElNode = this.head;
        if (!preEl) {   // 未指定参考前项，默认为链表尾
            while (preElNode.next) {
                preElNode = preElNode.next;
            }
        } else {    // 指定参考前项，查找该项
            preElNode = this.search(preEl);
        }
        var result = false; // insert结果
        if (preElNode) {    // 有参考前项
            var newNode = new Node(el);
            newNode.next = preElNode.next;
            preElNode.next = newNode;
            result = true;
        }

        return result;
    },
    remove: function(el) {  // 删除
        // 找出待删除节点的前一项
        var preNode = this.head;
        var curNode = preNode.next;
        while (curNode && curNode.element !== el) {
            preNode = curNode;
            curNode = curNode.next;
        }
        // 有则删除节点
        if (curNode) {
            preNode.next = curNode.next;
            curNode.next = null;
        }

        return curNode;
    },
    search: function(el) {  // 查找
        var curNode = this.head.next;
        while (curNode && curNode.element !== el) {
            curNode = curNode.next;
        }

        return curNode;
    },
    output: function() {    // 输出链表
        var curNode = this.head.next;
        while (curNode) {
            console.log(curNode.element);
            curNode = curNode.next;
        }
    }
};