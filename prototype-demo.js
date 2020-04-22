let obj = {};
obj.a = 100;

var arr = [];
arr.a = 100;

function fu() {}
fu.a = 100;

// 所有的 reference type ([], {}, function) 都有一个__proto__ 属性
console.log(obj.__propto__);
console.log(arr.__propto__);
console.log(fu.__propto__);

// 所有的　function 都有一个proptotype属性
console.log(fu.prototype);


// obj = {} equals to obj = new Object()
// obj的__proto__ 属性, 指向它的构造器的proptotype属性
console.log(obj.__propto__ === Object.prototype);
