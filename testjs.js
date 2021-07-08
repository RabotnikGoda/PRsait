var btn = document.getElementById('buton');
var toggle = false;

btn.addEventListener('click', function(){
  var items = document.querySelectorAll('.appartments-item');
  var parent = document.getElementById('parent');
var SortElements = new Object();
items.forEach(function(item, indx){
  var itemValue = parseInt(item.querySelector('.appartments-item__price').textContent.replace('руб', '').replace(/\s+/g, ''));
  SortElements[itemValue] = {'element': item, 'index': indx} ;
});
var keys = Object.keys(SortElements);
function compareNumeric1(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (a < b) return 1;
  if (a > b) return -1;
}
  function compareNumeric2(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (a > b) return 1;
  if (a < b) return -1;
}
if(toggle === false){
  keys.sort(compareNumeric1);
  toggle = !toggle;
} else {
  keys.sort(compareNumeric2);
  toggle = !toggle;
}

keys.map(function(key, indx){
  parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
  SortElements[key]['index'] = indx;
});
  return toggle;
}, toggle);