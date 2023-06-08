function generate(){
  let el = document.getElementById("number");
  const randmun = Math.floor(Math.random() * 37);
  el.innerHTML = randmun;
}
