function dropDown() {
  document.getElementById("dropdown").classList.toggle("show")
}

window.onclick = function(e) {
  if(!e.target.matches('.my-button')) {
    let drop = document.getElementsByClassName("dropdown-content");
    for(let i=0; i<drop.length; i++){
      if(drop[i].classList.contains('show')) {
        drop[i].classList.remove('show')
      }
    }
   
  }
}