let a = {
  name: 'A',
  func: function(){
    console.log(this.name)
  }
}

a.func()  // this === a,

a.func.call({name: 'B'})   // this === {name: 'B'}

let fn1 = a.func
fn1() // undefined or window in browser