function generate(){
  let el = document.getElementById("display");
  const randmun = Math.floor(Math.random() * 37);
  el.innerHTML = randmun;
}
