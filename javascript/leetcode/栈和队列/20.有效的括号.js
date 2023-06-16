

// 这个题目你做过一次;
// 考虑的情况无非是几种
// 左符号入栈,右符号出栈;
// 如果入栈再出栈之后有剩余元素,说明右边少东西了,报错;
// 如果有不匹配的,报错;
// 如果在入栈出栈的过程中,栈提前空了,说明左边少了,报错;

/**
 * @param {string} s
 * @return {boolean}
 */

//有个巨方便的使用map的写法;
//其实是名字叫map的对象写法;
s = "()[]{}";
var isValid = function(s) {
    const stack = [],
    map = {
        "(":")",
        "[":"]",
        "{":"}",
    };
    //遍历s
    for(const x of s){
        //筛出x
        if(x in map){
            stack.push(x);
            // continue;
        }
        else {
            if(map[stack.pop()] !== x) return false;;
        }
        //这一行同时满足了左右次数相同且类型相等的条件;
        // if(map[stack.pop()] !== x) return false;;
    }
    return stack.length === 0;
};
console.log(isValid(s));