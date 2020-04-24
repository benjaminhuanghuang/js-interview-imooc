## Constructor
构造函数 函数名要大写开头
```
  function Foo(name, age) {
    this.name = name;
    this.age = age;
    this.class = 'c1';
    // return this;        // 默认会执行这一行
  }
```
## new
- create new object
- this opint to this new object
- Execute the constructor
- return this


## instanceof 
判断一个函数是否是一个变量的构造函数, 即一个object有哪个构造函数
```
```
判断 object Is Array
```

```
## prototype
- 所有的 reference type ([], {}, function) 都有一个__proto__ 属性, 指向它的构造器的proptotype属性

- 所有的　function 都有一个proptotype属性

- 当试图访问一个object的某个属性时，如果这个object本身没有这个属性，那么回去它的__proto__(即它的构造器的protoytype)中寻找


```

```

## this 的用法
- constructor
- object
- use in function
- call, apply, bind

## this vs prototype


## prototyp inherit






