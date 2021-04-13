function timer() {
 document.querySelector("body").classList.toggle("active");
 var myVar = setTimeout(showPage, 3500);
}

function showPage() {
  document.querySelector("body").classList.toggle("active");
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("footer").style.display = "block";
}