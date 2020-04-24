for (let i=0; i< 10 ;i++){
  (function(i){
    var a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function(e){
      e.preventDefault();
      alert(i)
    })
  })(i)
}