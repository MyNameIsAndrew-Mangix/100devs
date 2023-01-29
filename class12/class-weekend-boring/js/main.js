document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();
  const response = document.querySelector('#placeToSee');

  if (day === 'tuesday' || day === 'thursday') {
    console.log("YOU HAVE CLASS");
    response.textContent = "You Have Class";
  } else if(day === "saturday" || day === "sunday") {
    response.textContent = "It's the weekend"
  }
  else {
    response.textContent = "BORING";
  }
}
