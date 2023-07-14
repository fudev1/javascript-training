const prenoms = ["matteo", "thibo", "sofiane", "quentin"]


// const fullPrenoms = prenoms.map(function(prenom){
//     return prenom + "Van Lerberg"
// });

// nouvelle méthode avec arrow function. Si une seule instruction on est pas obligé de mettre plusieurs accolade.
// si plusieurs, oui

const fullPrenoms = prenoms.map(prenom => prenom + "Van Denberg");


const fullPrenoms2 = prenoms.map(prenom => {
    return prenom + "Dupont"
})

