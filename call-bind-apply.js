function fun1(name, age){
  console.log(this)
}

fun1.call({x:100}, "zhangsan", 20)    // {x: 100}


var fun2 = function(name, age){
  console.log(this)
}.bind({y:200})

fun2("zhangsan", 20)