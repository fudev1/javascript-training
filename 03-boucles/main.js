// // comment se comporte une boucle while? 

// while(condition){
//     // code qui va s'exécute en boucle tant que condition n'est pas remplie
// }



// let count = 0

// while(count < 100){
//     // ici est le code qui va se repeat tant que la cond est true
//     console.log(count)
//     count++
//     // count += 1
//     // count = count + 1
// }


// let prenoms = prompt("entrez un prenom")

// while(prenoms !=""){
//     console.log("bonjour " + prenoms)
//     prenoms = prompt("entrez un prénom")
// }


// // for
// // utilisé pour un compteur généralement

// for(compteur; compteur = 0 ; compteur < 100){
//     // le code qui va s'exé en boucle
// }


// for(let i = 0; i < 100; i++){
//     console.log(i)

// }


// avec une boucle for ou while  en js: 
// logger les nombres de 1 à 100 et preciser à coté s'il s'agit d'un nombre pair ou impair

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i + " est un number paiiwr")
//     }else
//         console.log(i + " is a number impaaiiiwr")
// }


// logger les nombres de 1 à 100 et préciser s'ils sont des multiple de 4.
// Si ils sont des multiples de 7 et si ils sont des multiples de 4 ET de 7







// for(let i = 1; i <= 100; i++){
//     let msg = i + " is not a multiple de 4, de 7 ni de 4 ET 7 comme il a demandé le monsieur"

//     if (i % 4 === 0){
//          msg = i + " est mult de 4"
        
//         if (i % 7 === 0){
//             msg += " Niko reçoit un multiple de 7 vies"
//         }
//     } else if (i % 7 === 0){
//         msg = i + " is a multiple de 7"
//     }

// //     console.log(msg)
// // }

// // générer une chaine de caractère qui contient les nombre de 1 à 500 grâce à une boucle

// // la chaine de caractère doit finir comme ça par exemple : 1234567891011121314151617...499500




let maChiaineDeCaractair = ""
for (let i = 1; i <= 500; i++){
    maChiaineDeCaractair += i
}

console.log(maChiaineDeCaractair)