function timer() {
  document.querySelector("body").classList.toggle("active");
 var myVar = setTimeout(showPage, 3500);
}

function showPage() {
  console.log("Start");  
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.querySelector("body").classList.toggle("active");

}