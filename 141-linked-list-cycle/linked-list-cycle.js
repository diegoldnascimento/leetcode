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
    if (!head || !head.next) {
        return false;
    }

    var slow = head;
    var fast = head.next;

    console.log({ slow })

    while (slow) {
        if (slow == fast) {
            return true;
        }

        slow = slow.next
        fast = fast?.next?.next


    }

    return false;
};