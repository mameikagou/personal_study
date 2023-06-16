 
 
 function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var root = new TreeNode;

function postorderTraversal(root) {
    //创建结果数组
    let res = [];

    const dfs = function (root) {
        //确定边界
        if (root === null)
            return;

        dfs(root.left);
        dfs(root.right);
        res.push(root.val);
    };
    //启动
    dfs(root);
    return res;
}

var roott = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(postorderTraversal(roott));