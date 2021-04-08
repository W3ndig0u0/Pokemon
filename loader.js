
var loader = document.querySelector(".loader");


document.addEventListener('readystatechange', event => { 

  if (event.target.readyState === "complete") {
  // !starta när allt är redo
  loader.className += " hidden";
  console.log("Start");
}
});