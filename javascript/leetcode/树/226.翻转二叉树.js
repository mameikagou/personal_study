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
 * @return {TreeNode}
 */


var invertTree = function(root) {

    const re = function(root,left,right){
        let temp = left;
        left = right;
        right = temp;

        root.left = left;
        root.right = right;
    }
    const st = [];
    st.push(root);
    //if(root===null) return root;
    while (st.length&&root) {
        let node = st.pop();
        if(node){
        node.right && st.push(node.right);
        node.left && st.push(node.left);
        st.push(node);
        st.push(null);
        }else {
            node = st.pop();
            re(node,node.left,node.right);
        }
    }
    return root;
};