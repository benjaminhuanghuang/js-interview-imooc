// Constructor
function Foo(name, age){
  this.name = name
}

Foo.prototype.alertName = function (){
  console.log(this.name);      // this is the object calling this function
}

let f = new Foo('ZhangSan')

// latest js engine 已经在for in中屏蔽了来自prototype的属性
for(let item in f){
  if(f.hasOwnProperty(item)){
    console.log(item)
  }
}