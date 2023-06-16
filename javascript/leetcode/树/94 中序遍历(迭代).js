/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }**/

var inorderTraversal = function(root) {
    let res = [];
    const stack = [];

   // stack.push(root);
   //这一行导致放了两遍;
    if(root===null) return res;
    let cur = root;
    while (stack.length || cur){
        //这里注意不仅仅是栈非空,有指针也行;
        if(cur){
            //stack.push(cur.left);
            //放了再往左走,一直走到底;
            stack.push(cur);
            cur = cur.left;
        }else{
            cur = stack.pop();
            res.push(cur.val);
            cur = cur.right;
        }
    };
    return res;
};