## JS 中使用typeof能得到哪些类型
6 种
```
  typeof undefined   // undefined

  typeof 'abc'       // string

  typeof 123         // number

  typeof true        // boolean

  typeof {}          // object
  typeof []          // object
  typeof null        // object

  typeof console.log // function

```
## 强制类型转换
- 字符串拼接
```
  var a = 100 + 10    // 110
  var b = 100 + '10'  // '10010'
```
- == 运算符
```
  100 == '100'         // true
  0 == ''              // true
  null == undefined    // true
```
判断属性是否存在
```
  let obj = {}

  if(obj.a == null)   // Equals to obj.a === null || obj.a === undefined
```


- if语句
```
  let b = 100
  if (b)


  let c = ''
  if (c)
```


- 逻辑运算
```
  console.log(10 && 0)          // 0
  console.log('' || 'abc')      // 'abc'
  console.log(!window.abc)      // true

  console.log(!!100)            // true
```

