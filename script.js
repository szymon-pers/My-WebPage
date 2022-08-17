//console.log("GOTOWY");

//var name = "User";

//console.log(name);

//if (name=="User") {
    console.log("Witaj");
//} else{
  //  console.log("Nie znam Cię")
//}
// let tylko w klamrach for a var wszedzie
//for (let index = 0; index < 3; index++) {
  //  console.log(index);
//}
//w nawiasach na dole deklarujemy funkcje
//function changeFontColor(){
  //  var features = document.getElementById('features');
    //features.style.color = 'green';
//}

document.getElementById("btn").addEventListener("click", addParagraph);

function addParagraph(){
    var text = document.getElementById('text');
    var p = document.createElement("p");
    var textNode = document.createTextNode("To jest paragraf");
    p.appendChild(textNode);
    text.appendChild(p);
}
