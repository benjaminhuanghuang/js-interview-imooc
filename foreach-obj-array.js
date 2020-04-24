function forEach(obj, fn) {
  if (obj instanceof Array){
    obj.forEach(function(item, index){
      fn(index, item)
    })
  }
  else{
    for (key in obj){
      fn(key, obj[key])
    }
  }
}


let arr = [1, 2, 3]
forEach(arr, (index, item)=>{
  console.log(index, item)
})

let obj ={x:100, y:200}
forEach(obj, (key, val)=>{
  console.log(key, val)
})