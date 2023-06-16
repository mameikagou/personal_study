//for of 遍历数组,一般不用来遍历对象

//for in 遍历对象,会遍历到对象的所有可枚举属性;
var xx = [1, 2, "qeq", 3, 4, "weqw"];

xx.ilove = "";//这里面啥都行,重点是对象,属性
xx.babiqla = '';

for (var a in xx) {
  console.log(a);
}//因为遍历对象的索引被视为属性名称,所以实际上遍历的是索引;
//后续再研究
