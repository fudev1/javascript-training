
// récupérer le texte
// cmt récupérer la balise id "myText" 

// step 1 : get element id > myText
const text = document.getElementById("myText")
console.log(text)

// step 2 : un attribut au p
text.style.marginTop = "200px";

// mauvaise manière de faire ::: !!!! a ne pas reproduire
text.setAttribute("style", "margin-top:300px", "font-size:24px");

// ajouter une class "burly" à la var text qui cible le p
text.classList.add("burly")

// retirer la classe
text.classList.remove("burly")

// si j ai la clase "burly", je retire. Si j'ai pas, je met la classe
// principe interrupteur
text.classList.toggle("burly")

// en gros ça fait cette fonction ::: 

// if(text.classList === "burly"){
//     text.classList.remove("burly")
// }else{
//     text.classList.add("burly")
// }