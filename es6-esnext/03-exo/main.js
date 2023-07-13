// Exo 

// créer un nouvel array se nommant heights et qui ne contiendra que les hauteurs de chaque objet de images
//expectation : ["34px", "76px", "3px", "94px"]



const images = [
    {height: "34px", width: "45px", color: "chartreuse"},
    {height: "76px", width: "20px", color: "burlywood"},
    {height: "3px", width: "47px", color: "red"},
    {height: "94px", width: "43px", color: "yellow"},
];



// console.log(swapWorld("Bonjour je suis Herve et je mange du pain"))
// console.log(swapWorld("BONJOUR J AIME LE PAIN"))

function swapWorld(maSuperFrase) { // fonction qui reprend une phrase loguée dans la const plus bas "maSuperFrase"
    const tousMesMots = maSuperFrase.split(' ');  // je split mon tableau en disant que j'utilise l'espace comme séparateur
    
    const transMot = tousMesMots.map((leMot, index) => { // j'use map pour itérer sur chaque mot et je stock ça dans une new var
        if (index % 2 === 0) {    // je viens checker l'index, si il est pair ou impair
            return leMot.toUpperCase(); // si pair je trans mon mot en UPP
        } else {
            return leMot.toLowerCase(); // sinon je retourne le mot normal
        }
    });

    return transMot.join(' '); // à la fin je regroupe tout mon tableau avec un espace
}

const maSuperFrase = "Bonjour je suis Herve et je mange du pain"; // ma super variable qui contient ma phrase
console.log(swapWorld(maSuperFrase)); 
  

/* -------------------------------------------------------------------------- */
/*                   autre manière de faire avec le ternaire                  */
/* -------------------------------------------------------------------------- */


function swapWord(line){
    return line.split(" ").map(function(word, index){
        return index % 2 ? word.toUpperCase() : word.toLowerCase();
    }).join("");
}

/* -------------------------------------------------------------------------- */
/*                   autre manière de faire avec le ternaire                  */
/* -------------------------------------------------------------------------- */


function swapWord(line){
    return line.split(" ").map((word, index) => index % 2 ? word.toUpperCase() : word.toLowerCase().join(" "));
}


/* -------------------------------------------------------------------------- */
/*                   autre manière de faire nazisme pcq pratiquement plus lisible     */
/* -------------------------------------------------------------------------- */

const swapWord = (line) => line.split(" ").map((word, index) => index % 2 ? word.toUpperCase() : word.toLowerCase()).join(" ");