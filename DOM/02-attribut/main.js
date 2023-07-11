// créer une variable pour cibler tous les elements

const demo = document.getElementById("demo");
const img = document.getElementById("myImg");
const input = document.getElementById("goatInput");

// récupère la valeur alt de l'img pour l'assigner à l'input
input.value = img.alt

// setter des attribut à des elements

//      solution 1
img.setAttribute("Width", 200)

//      solution 2
// img.width = 200

