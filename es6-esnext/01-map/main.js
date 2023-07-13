/* -------------------------------------------------------------------------- */
/*                               alt + shift + x                              */
/* -------------------------------------------------------------------------- */

/* --------------------------------- alt + x -------------------------------- */

// alt + y
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                            méthode de dinosaure                            */
/* -------------------------------------------------------------------------- */

// const numbers = [2, 4, 5, 7, 9, 3];
// const doubleNumbers = [];

// for(var i = 0; i < numbers.length, i++){
//     doubleNumbers.push(numbers[i] * 2)
// }

// console.log(doubleNumbers);


/* -------------------------------------------------------------------------- */
/*                            méthode de super hero                           */
/* -------------------------------------------------------------------------- */

const numbers1 = [2, 4, 5, 7, 9, 3];

const doubleNumbers2 = numbers1.map(function(nbr){
    return nbr*2;
})

// map crée un nouveau tableau 
// on va lui dire qu'il est = à l'ancien tableau
// .map itère sur chaque index
// on lui demande de faire un * 2 avant de mettre dans le nouveau tableau

console.log(doubleNumbers2);





/* -------------------------------------------------------------------------- */
/*                            méthode de dinosaure                            */
/* -------------------------------------------------------------------------- */

// const names = ["Rachida", "Saad", "Sofiane", "Houssine", "Anahid"];
// const fullName = [];

// for (let name of names){
//     fullName.push(name + " Berzouk");
// }

// count = 0;

// while(count < names.length){
//     fullName.push(names[count]);
//     count = count + 1;
// }

// console.log(fullName)


/* -------------------------------------------------------------------------- */
/*                            méthode de super passionné                      */
/* -------------------------------------------------------------------------- */

const names2 = ["Rachida", "Saad", "Sofiane", "Houssine", "Anahid"];

const fullName2 = names2.map(function(name){
    return names2 + " Berzouk"
})

console.log(fullName2)