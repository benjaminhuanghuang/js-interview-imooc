
// Constructor
function Foo(name, age){
  this.name = name
}

Foo.prototype.alertName = function (){
  console.log(this.name);      // this is the object calling this function
}

// Create new instance
let f = new Foo('ZhangSan')

f.printName = function(){
  console.log(this.name)
}

f.printName();
f.alertName();