//通过栈来实现递归
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
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  let res = [];
  let stack = []; //队列数组,既是队列,也是数组;

  stack.push(root);
  if (root === null) {
    return res; //空的嘛
  }
  while (stack.length !== 0) {
    //记录并返回头部元素
    //let node = stack.shift();
    //注意这里是栈道,shitf()取头部元素,属于栈底部
    // ,应该用pop()方法取得栈顶元素

    let node = stack.pop();
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return res;
};
