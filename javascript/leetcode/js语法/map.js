

//就一道哈希表,键值对;

// 构造函数
// Map()
// 创建 Map 对象。

// 静态属性
// get Map[@@species]
// 用于创建派生对象的构造函数。

// 实例属性
// Map.prototype.size
// 返回 Map 对象中的键值对数量。

// 实例方法
// Map.prototype.clear()
// 移除 Map 对象中所有的键值对。

// Map.prototype.delete()
// 移除 Map 对象中指定的键值对，如果键值对存在并成功被移除，返回 true，否则返回 false。调用 delete 后再调用 map.has(key) 将返回 false。

// Map.prototype.get()
// 返回与指定的键 key 关联的值，若不存在关联的值，则返回 undefined。

// Map.prototype.has()
// 返回一个布尔值，用来表明 Map 对象中是否存在与指定的键 key 关联的值。

// Map.prototype.set()
// 在 Map 对象中设置与指定的键 key 关联的值，并返回 Map 对象。

// Map.prototype[@@iterator]()
// 返回一个新的迭代对象，其为一个包含 Map 对象中所有键值对的 [key, value] 数组，并以插入 Map 对象的顺序排列。

// Map.prototype.keys()
// 返回一个新的迭代对象，其中包含 Map 对象中所有的键，并以插入 Map 对象的顺序排列。

// Map.prototype.values()
// 返回一个新的迭代对象，其中包含 Map 对象中所有的值，并以插入 Map 对象的顺序排列。

// Map.prototype.entries()
// 返回一个新的迭代对象，其为一个包含 Map 对象中所有键值对的 [key, value] 数组，并以插入 Map 对象的顺序排列。

// Map.prototype.forEach()
// 以插入的顺序对 Map 对象中存在的键值对分别调用一次 callbackFn。如果给定了 thisArg 参数，这个参数将会是回调函数中 this 的值。


const myMap = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = function() {};

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键 keyObj 关联的值");
myMap.set(keyFunc, "和键 keyFunc 关联的值");

console.log(myMap.size); // 3

// 读取值
console.log(myMap.get(keyString)); // "和键'a string'关联的值"
console.log(myMap.get(keyObj)); // "和键 keyObj 关联的值"
console.log(myMap.get(keyFunc)); // "和键 keyFunc 关联的值"

console.log(myMap.get('a string')); // "和键'a string'关联的值"，因为 keyString === 'a string'
console.log(myMap.get({})); // undefined，因为 keyObj !== {}
console.log(myMap.get(function() {})); // undefined，因为 keyFunc !== function () {}

// NaN 也可以作为 Map 对象的键。
//虽然 NaN 与任何值甚至与自己都不相等（NaN !== NaN 返回 true），
//但是因为所有的 NaN 的值都是无法区分的，所以下面的例子成立：

const myMap2 = new Map();
myMap2.set(NaN, 'not a number');

myMap2.get(NaN);
// "not a number"

const otherNaN = Number('foo');
myMap2.get(otherNaN);
// "not a number"

