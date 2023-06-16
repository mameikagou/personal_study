
//  function TreeNode(val, left, right) {
//         this.val = (val===undefined ? 0 : val)
//          this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }

var preorderTraversal = function(root){
    //声明一个空数组,来储存结果
    let res = [];
    //声明一个空对象
    //let res = {};

    // 设置递归函数
    const dfs = function(root){
        //表示边界条件
        if(root===null) return;
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }

    //触发递归函数
    dfs(root);
    return res;
}