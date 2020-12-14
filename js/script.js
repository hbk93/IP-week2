var akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getAkanName() {
  var currentDate = new Date();
  var date = document.getElementById("date").value;
  var gender = document.getElementsByName("gender").value;
  var d = date.getDay();
  var month = date.getMonth();
  var year = date.getYear();
  var day = date.getDate();
  if (date > currentDate) {
    alert("Enter valid Date.");
  }
  else if (month < 0 || month > 11) {
    alert("Enter valid Month.");
  }
  else if (day < 1 || day > 31) {
    alert("Enter valid Day")
  }
  else if (gender === "Male") {
    alert("Your Akan name is " + akanMaleName[d])
  }
  else if (gender === "Female") {
    alert("Your Akan name is " + akanFemaleName[d])
  }
  else {
    alert("Do fill in the blanks");
  }
}


