let junban
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
  junban = [...Array(37)].map((_, i) => i + 1)
  junban = arrayShuffle(junban);
  let li = document.getElementById("list");
  li.innerHTML = "";
}
window.onload = function(){
  init() //ページロード時にリストを初期化
}
function generate(){
  if(junban.length == 0){
    init();
  }
  let el = document.getElementById("number");
  let keta = 0;
  let count = 0;
  const rand = () =>{
    keta =  Math.floor(Math.random() * 37);
    el.innerHTML = keta;
    count++;
  }
  const intervalId = setInterval(() =>{rand();
  if(count > 20){　
    clearInterval(intervalId);
  }}, 50);
  let num = junban.shift();
  let li = document.getElementById("list");
  el.innerHTML = ('00' + num).slice(-2);
  li.innerHTML = li.innerHTML + ('00' + num).slice(-2) + "\n";
}
function reset(){
  let ans = window.confirm("リセットしますか？");
  if(ans){
    init();
  }
}
function animation(){
  let el = document.getElementById("number");

}
