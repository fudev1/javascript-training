/* -------------------------------------------------------------------------- */
/*                                    find                                    */
/* -------------------------------------------------------------------------- */

const users = [
    {
        id: 1,
        name: "Quentin"
    },
    {
        id: 2,
        name: "thibo"
    },
    {
        id: 3,
        name: "vincen"
    },
    {
        id: 4,
        name: "Matteo"
    },
    {
        id: 5,
        name: "Chehbastien"
    }

]


/* -------------------------------------------------------------------------- */
/*                                méthode dino                                */
/* -------------------------------------------------------------------------- */


let user;

for (var i = 0; i < users.lenght; i++){
    if(users[i].name === "Chehbastien"){
        user = users[i]
        break;
    }
}


/* -------------------------------------------------------------------------- */
/*                                 new methode                                */
/* -------------------------------------------------------------------------- */
// return l'objet dont le nom = matteo et tous ces attributs


let user2 = users.find(function(user){
    return user.name === "Matteo"
})

console.log(user2)


/* -------------------------------- findIndex ------------------------------- */
// return le vrai ID d'un element 

let userIndex = users.findIndex(function(user){
    return user.name === "Matteo"
})

console.log(userIndex)