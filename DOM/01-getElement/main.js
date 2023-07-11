// selectionner la div TOTO
// le js pref selectionner des element par ID
// le css pref selectionner des element pas CLASS

const div = document.getElementById("toto");
console.log(div)

div.innerText = "Saludos";
div.innerHTML = "<h1>Saludos</h1>"

div.style.color = "chartreuse"
div.style.backgroundColor = "burlywood"

div.classList.add("errors");


// get un element p et le transforme en tableau
const pArray = document.getElementsByTagName("p");
console.log(pArray)

// ca marche pas car on ne peut pas mettre un BC sur un tableau
// p.style.backgroundColor = "chartreuse"


for (let p of pArray){
    p.style.backgroundColor = "chartreuse"
}

const classes = document.getElementsByClassName("test");

console.log(classes);

for (let item of classes){
    item.style.color = "red"
}


// permet de récup un element sans préciser de quel type il est
const goat = document.querySelector(".goat");
console.log(goat)


// return un array
// à utiliser avec parsimonie car plus lourd à charger
// il va chercher tout 
// elementByID sait qu'il doit direct chercher un ID
const link = document.querySelectorAll("nav > ul > li .link")

