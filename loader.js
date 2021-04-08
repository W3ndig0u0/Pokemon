var loader = document.querySelector(".loader");
var myVar;

function timer() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  console.log("Start");  
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("footer").style.display = "block";
}