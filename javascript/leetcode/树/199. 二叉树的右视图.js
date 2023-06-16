

//这个题仅仅要求输出最右边的节点而已

var rightSideView = function(root) {
    let res = [] , queue = [];

    
    queue.push(root);

    if(root === null) return res;

    while ( queue.length !== 0 ){
        let len = queue.length;

        let curLevel = []; 
        for ( let i = 0; i < len; i++){
            let node = queue.shift();

            //这里是放入文件到数组的,只放最右边的;
            if(i==len-1) curLevel.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(curLevel);
    }
    return res;
}