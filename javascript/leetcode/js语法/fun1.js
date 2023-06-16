//split()函数
//它有两个参数,第一个表示遇到什么就分割,第二个表示分割的次数
const str = " what do you fxxk saying?  ";
const words = str.split();
console.log(words);//整个数组

const string = str.split(" ");

for (var vs in string) {
    console.log(vs+":"+string[vs]);//会存储每个空格和空格前后的词
}
  

const char = str.split("");
for (var v in char) {
  console.log(v+":"+char[v]);//说明分割完之后,空格也算
}


//来看第二个参数;
const sec = str.split("",3);
for (var d in sec) {
  console.log(d+":"+char[d]);//只看前三个;
}
