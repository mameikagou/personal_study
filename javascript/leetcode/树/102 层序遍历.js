

// 定义一个结果函数,使用一个队列
// 记录队列长度,然后一个一个加里面去,再弹出

var levelOrder = function(root){

    let res = [];
    let queue = [];//队列数组,既是队列,也是数组;

    queue.push(root);
    if(root === null){
        return res;//空的嘛
    }

    //这里是一层一层往里面放吗?
    //不全是,while表示元素不断被放进去
    while (queue.length !== 0){
        //记录长度,方便后续一个一个往外取出
        let len = queue.length;
        //存储每一层的节点,之后再添加到数组中去;
        let curLevel = [];
        //js可以直接获取,
        for ( let i = 0;i < len; i++ ){
            //记录并返回头部元素
            let node = queue.shift();
            //存入当前层的;
            curLevel.push(node.val);

            //存入下一层的;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            //这里推进去之后,继续循环,实现下一层的下一层;
        }
        res.push(curLevel);
    }
    return res;
    //如果是107.二叉树的层次遍历II(从底层开始遍历)
    //改成return res.reserve();即可
};