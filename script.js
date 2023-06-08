function generate(){
  let el = document.querySelector(".number");
  const randmun = Math.floor(Math.random() * 37);
  el.innerHTML = randmun;
}
