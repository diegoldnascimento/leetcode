/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function dfs(node, min, max) {
        if (!node) {
            return true;
        }

        if (min !== null && min >= node.val) {
            return false;
        }

        if (max !== null && max <= node.val) {
            return false;
        }

        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
    }

    return dfs(root, null, null)
};