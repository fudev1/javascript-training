const ages = [15, 25, 35, 45, 55, 65, 75, 84];

const filteredAges = [];

/* -------------------------------------------------------------------------- */
/*                              Ancienne méthode                              */
/* -------------------------------------------------------------------------- */
/* ------------- je veux mettre dans le nouveau tab les age > 58 ------------ */

for (var i = 0; i < ages.length; i++){
    if (ages[i] > 66){
        filteredAges.push(ages[i]);
    }
}


/* ---------------------------- méthode de bogoss --------------------------- */

const filteredAges2 = ages.filter(function(age){
    return age > 66;
})

console.log(filteredAges2);


/* ----------------------------------- exo ---------------------------------- */

const numbers = [12, 4589, 113, 542, 43, 22, 18, 34, 2];

// filter les nbres paires

const filteredNbrPair = numbers.filter(function(nbr){
    return nbr  % 2 === 0
})

// const filteredNbrPair = numbers.filter(function(nbr){
//     return !(nbr%2)
// })

console.log(filteredNbrPair)

