function Animal(){
  this.eat = function(){
    console.log('animal eat')
  }
}


function Dob(){
  this.bark = function(){
    console.log('dog bark')
  }
}

Dog.prototype = new Animal();

let dog = new Dog()

