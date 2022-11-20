
// 任意のhtml要素を探すことができるquerySelector()
// https://magazine.techacademy.jp/magazine/28581
// https://shanabrian.com/web/javascript/table-insertrow.php#:~:text=table%E8%A6%81%E7%B4%A0%E3%81%AB%E8%A1%8C%EF%BC%88tr%E8%A6%81%E7%B4%A0%EF%BC%89%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B%E3%81%AB,%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%82%82%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82

const addMemo = document.querySelector('.add_memo');
addMemo.addEventListener('click',function() {
  const newmemoInput = document.querySelector('.new_memo');

  const newMemo = document.createElement('li');
  newMemo.textContent = newmemoInput.value;

  const memolist = document.querySelector('.memolist')
  memolist.append(newMemo);

  newmemoInput.value = '';

});

const addTr = document.querySelector('.add_tr');
addTr.addEventListener('click',function() {
  var tableElem = document.getElementById('sample-table');
// tbody要素にtr要素（行）を最後に追加
  var trElem = tableElem.tBodies[0].insertRow(-1);
// td要素を追加
  var cellElem = trElem.insertCell(-1);
  var newTrInput = document.querySelector('.new_tr');
// td要素にテキストを追加
  cellElem.appendChild(document.createTextNode(newTrInput.value));

  newTrInput.value = '';

  // const str=document.querySelector('.test');
  // str.textContent="更に入力してください";

  cellElem = trElem.insertCell(-1);
  cellElem.appendChild(document.createTextNode("hello"));

  newTrInput.value = '';
});

$(function(){

  $(document).ready(function(){
  $("h1").css("color","red");
  });
  
  });
