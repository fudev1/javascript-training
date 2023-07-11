// function sayHello(){
//     console.log("salut")
// }

// sayHello();

// methode Iife (Immediatly Invoked Function Expression)

// (function sayHello2(){
//     console.log("salut")
// })();


function saySomething(chose){
    console.log(chose)
    chose = chose.toUpperCase();
    console.log(chose)
}

saySomething("Bonjour Saad");


const listInvite = ["Anthman", "Saad", "Sofiane", "Quentin"];
const present = []

function checkPeople(dude){
    if(dude === "Quentin"){
        console.log("La sortie est par là, vile raclure " + dude)
    }else {
        console.log("welcome " + dude)
        present.push(dude)
    }
}


for (let people of listInvite){
    checkPeople(people)
}

console.log(present)




// fonction qui retourne qqchose 
function calcule(mdr, mdr2){
    return mdr + mdr2;
}

console.log(calcule(10, 4))

// via 3 prompt
// retourner la moyenne de ces 3 derniers dans la console grâce à une fonction





// function calculeMoy(mdr, mdr2, mdr3){
//     return (mdr + mdr2 + mdr3) / 3
// }

// const mdr = +(prompt("Premier nbr"));
// const mdr2 = +(prompt("Snd nbr"));
// const mdr3 = +(prompt("3rd nbr"))


// console.log(calculeMoy(mdr, mdr2, mdr3))








// function calculerMoyenne(a, b, c) {
//     const somme = a + b + c;
//     const moyenne = somme / 3;
//     return moyenne;
// }
  
// const nbr = +(prompt("donne un 1st nbr :"));
// const nbr2 = +(prompt("donne un 2nd nbr :"));
// const nbr3 = +(prompt("donne un 3rd nbr :"));


// const moyenne = calculerMoyenne(nbr, nbr2, nbr3);

// console.log("La moyenne est : " + moyenne);


// via 3 prompt
// demander 2 nombre et un opérateur 
// retourner le résultat de l'opération
// crée moi la fonction




function calculayte(nbr1, operateur, nbr2) {
    switch (operateur) {
      case "+":
        resultat = nbr1 + nbr2;
        break;
      case "-":
        resultat = nbr1 - nbr2;
        break;
      case "*":
        resultat = nbr1 * nbr2;
        break;
      case "/":
        resultat = nbr1 / nbr2;
        break;
      default:
        console.log("nope Michel, c'est cassay");
        return;
    }
  
    return resultat
  }
  
const nombre1 = +(prompt("nombre 1:"));
const operateur = prompt("(+, -, *, /) :");1
const nombre2 = +(prompt("nombre 2 :"));


console.log(calculayte(nombre1, operateur, nombre2))

