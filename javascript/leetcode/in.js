
//尝试
const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
// Expected output: true

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);
// Expected output: "Suzuki"


// 如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true。
//属性和对象

// 数组
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees        // 返回 true
3 in trees        // 返回 true(3是length属性)
6 in trees        // 返回 false
"bay" in trees    // 返回 false (必须使用索引号，而不是数组元素的值)

"length" in trees // 返回 true (length 是一个数组属性)

Symbol.iterator in trees // 返回 true (数组可迭代，只在 ES2015+ 上有效)


// 内置对象
"PI" in Math          // 返回 true

// 自定义对象
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // 返回 true
"model" in mycar // 返回 true


// in右操作数必须是一个对象值。
// 例如，你可以指定使用String构造函数创建的字符串，
// 但不能指定字符串文字。
var color1 = new String("green");
"length" in color1 // 返回 true
var color2 = "coral";
"length" in color2 // 报错 (color2 不是对象)

