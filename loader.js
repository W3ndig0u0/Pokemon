function timer() {
 var myVar = setTimeout(showPage, 3000);
}

function showPage() {
  console.log("Start");  
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("footer").style.display = "block";
}