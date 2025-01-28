/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    var visited = new Set();

    while(head) {
        if (visited.has(head)) {
            return true;
        }
        visited.add(head)

        if (!head.next) {
            break;
        }

        head = head.next;
    }

    return false;
};