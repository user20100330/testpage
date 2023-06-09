function generate(){
  let el = document.getElementById("number");
  const randmun = Math.floor(Math.random() * 37);
  el.innerHTML = randmun;
  let li = document.getElementById("list");
  //let newli = document.createElement('li');
  li.innerHTML = li.innerHTML + randmun + "&#13;";
  //li.appendChild(newli);
}

function arrayShuffle(array) {
  for(let i = (array.length - 1); 0 < i; i--){

    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}
function init() {
  for(let i = 1;i < 37;i++){
    let li = document.getElementById("list")
    li.innerHTML = li.innerHTML + i + "&#13;";
  }
}
