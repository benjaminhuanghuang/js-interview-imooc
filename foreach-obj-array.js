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