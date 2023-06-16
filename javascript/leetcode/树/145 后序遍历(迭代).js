
//前序遍历是 中左右
//因为栈的特性,要写成中右左

// 后序遍历是左右中

//因此根据栈的特性写成 中左右
// 再翻转就是左右中了

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const postorderTraversal = function(root){
    let res = [];
    let stack = [];

    stack.push(root);
    if(!root) return res;

    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
    return res.reverse();
}