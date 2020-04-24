// 判断一个函数是否是一个变量的构造函数
function Foo(name, age){
  this.name = name
}


let arr = []   // equals to new Array()
console.log(arr instanceof Array)

console.log(typeof arr)   // object