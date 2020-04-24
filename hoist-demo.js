console.log(a); // undefine
var a = 100;

//console.log(b)   // error
let b = 100;

func("zhangsan");

function func(name) {
  age = 20;
  console.log(name, age);
  var age;
}


// 
func2("Lisi");

function func2(name) {
  age = 20; // error
  console.log(name, age);
  let age;
}
