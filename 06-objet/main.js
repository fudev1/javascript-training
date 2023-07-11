// let personnage1 = {}

// personnage1.firstname = "Vincent"
// personnage1.lastname = "Lechat"
// personnage1.age = 32
// personnage1.job = "Avocat"


const personnage1 = {
    "fisrtname" : "Michel",
    "lastname" : "Carbonara",
    "age" :854,
    "job" : "Dieu"

}

const personnage2 = {
    "fisrtname" : "Kentin",
    "lastname" : "Leroi",
    "age" : 54,
    "job" : "Prof"

}
 
const personnages = [personnage1, personnage2];
  
// for (let mdr in personnages) {
//     const titre = "Personnage " + (parseInt(mdr) + 1)
//     console.log(titre)

//     const personnage = personnages[mdr]
//     for (let key in personnage) {
//         console.log(key + " : " + personnage[key]);
//     }
//     console.log(""); 
// }


for (let perso of personnages){
    
    for(let info in perso){
        console.log(info + " : " + perso[info])
    }
    console.log(""); 
}



  



// // Méthode pour chercher un élement d'un objet
// console.log(personnage1.firstname)

// // Méthode utilisée et OBLIGATOIRE pour chercher l'info dans une Boucle
// console.log(personnage1["firstname"])


// const personnage2 = {
//     "fisrtname" : "Kentin",
//     "lastname" : "Leroi",
//     "age" : 54,
//     "job" : "Prof"

// }

// for IN (méthode ES6)
// permet de boucler à l'interieur d'un tableau

// pour chaque élément tu vas me donner le nom de la clé dans personnage2
// et me donner la valeur de la clé

// for(let mdr in personnage2){
//     console.log(mdr + " " + personnage2[mdr])
// }




// // for OF

// const myArray = ["Kev", "Sof", "Houss", "Nic"]

// for(let dude of myArray){
//     console.log(dude)
// }


// // pour disposer d'un id

// for (let [dudeId, dude] of myArray.entries()){
//     console.log(dudeId, dude)
// }


// const amis = []
// amis.push("vincent")
// amis[1] = "Nico"
// amis[2] = "Tibo"
// amis[3] = "Sofiane"

// const ennemis = []
// ennemis[0] = "Matteo"
// ennemis[1] = "Seb"
// ennemis[2] = "kentin"

// const gens = [amis, ennemis]

// for(let [humanGroup] of gens){
//     for (let dude of humanGroup)
//     console.log(dude)
// }





// via un prompt, demande de choisir parmit l'un des trucs (afficher les trucs dans le prompt)
// et logger "le prix de truc est de prix"
// const trucs = ["Tables", "Chaises", "Buffet", "Vitrine", "Drogue"]
// const prix = [250, 70, 460, 700, 100000000]

// const choix = prompt("quel est ton choix ?")



// for (let [itemId, item] of trucs.entries()) {
//   if (item === choix) {
//     console.log("Le prix de " + choix + " est de " + prix[itemId]);
//     break;
//   }
// }









