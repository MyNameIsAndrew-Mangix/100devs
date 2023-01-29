document.getElementById('purple').onclick = partyPurple;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('orange').onclick = partyOrange;

function partyPurple() {
  document.body.style.backgroundColor = '#f13ff7';
}

function partyGreen() {
  document.body.style.backgroundColor = '#00fd51';
}

function partyBlue() {
  document.body.style.backgroundColor = '#00feff';
} 

function partyOrange() {
  document.body.style.backgroundColor = '#ff8334';
}