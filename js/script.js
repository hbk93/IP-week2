let akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let akanfemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function calculateBirthday() {
  let date = parseInt(document.getElementById('day').value);
  let month = parseInt(document.getElementById('month').value);
  let year = document.getElementById('year').value;
  let gender = document.getElementById('gender').value;
  let CC = year.slice(0, 2);
  let YY = year.slice(2, 4);
 
  if (date === "" || date < 0 || date > 31) {
    alert ("Enter valid date")
  }
  else if (month === "" || month < 1 || month > 12) {
    alert ("Enter valid month")
  }
  else if (year === "" || year < 1900 || year.length > 4) {
    alert ("Enter valid year")
  }
  else {
    var days = Math.floor((((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + ((26 * (month + 1) / 10)) + date) % 7);
  }


  if (gender === 'male') {
    document.getElementById('yourName').innerHTML = ("Your name is " + akanMaleName[days] + " and you were born on " + daysOfTheWeek[days]);

  } else if (gender === 'female') {
    document.getElementById('yourName').innerHTML = ("Your name is " + akanfemaleName[days-1] + " and you were born on " + daysOfTheWeek[days]);

  } else {
    alert("Please make sure you've choosen your gender!!");
  }
}