let total = 0;
const pumpkin = document.getElementById('pumpkin');
const dominosPizza = document.getElementById('dominosPizza');
const zebra = document.getElementById('zebra');
const cantThinkOfAnything = document.getElementById('cantThinkOfAnything');
const placeToPutResult = document.getElementById('placeToPutResult');

pumpkin.addEventListener('click', make0);
dominosPizza.addEventListener('click', add3);
zebra.addEventListener('click', add9);
cantThinkOfAnything.addEventListener('click', sub2);

function make0() {
  total = 0;
  changeResult();
}

function add3() {
  total +=3;
  changeResult();
}

function add9() {
  total +=9;
  changeResult();
}

function sub2() {
  total -=2;
  changeResult();
}

function changeResult() {
  placeToPutResult.textContent = total;
}