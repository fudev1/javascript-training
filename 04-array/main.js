// let noms = ["Jean", "Sacha"]

// // ajouter un element à la fin d'un array 
// noms.push("Charly")

// // ajouter un element au début d'un array
// noms.unshift("Louis")

// // retirer un element à la fin d'un array
// noms.pop()

// // retirer un element au début d'un array
// noms.shift()
// console.log(noms);




const mesNomsPref = ["Jean", "Sacha", "Louis", "Tobaux", "Kentin"]


// // retirer un element à un emplacement donné
// // va à l'index 2 et supprime Louis
// mesNomsPref.splice(2, 1)

// // ajouter un element à un emplacement donné
// mesNomsPref.splice(2, 0, "Matth")

// // remplace un element à un emplacement donné
// // remplace l'element index 2 = Louis pat matt
// mesNomsPref.splice(2,1,"matt")



// va à l'index 2 et supprime les 2 elements pour les remplace e
// mesNomsPref.splice(2,2,"franc")

// console.log(mesNomsPref);




// let line = "vincent le chat"
// // transforme une chaine en tableau 
// // defini le sep du tableau par "espace"
// const myArray = line.split(" ")

// console.log(myArray);

// // reconverti un tableau en chaine grâce à un -
// let newLine = myArray.join("-")
// console.log(newLine)


// const classes = ["Sorcier", "Féticheur", "Chasseur", "Moine", "Guerrier"]

// affiche le contenu de l'array sous cette forme :

// class n°1 : Sorcier 
// class n°2 : Féticheur
// etc


// const classes = ["Sorcier", "Féticheur", "Chasseur", "Moine", "Guerrier"]

// console.log("Classe nbr 1 : " + classes[0]);
// console.log("Classe nbr 2 : " + classes[1]); 
// console.log("Classe nbr 3 : " + classes[2]); 
// console.log("Classe nbr 4 : " + classes[3]); 
// console.log("Classe nbr 5 : " + classes[4]); 
// console.log("")

// console.log("🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅")
// console.log("METHODE BAGUETTE CHINOISE :::")
           

// const newClass = ["Sorcier", "Féticheur", "Chasseur", "Moine", "Guerrier"];

// for (let i = 0; i < newClass.length; i++) {
//     console.log("class n°" + (i + 1) + " : " + newClass[i]);
//   }

//   console.log("🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅")



// via un prompt, demande de choisir parmit l'un des trucs (afficher les trucs dans le prompt)
// et logger "le prix de truc est de prix"
const trucs = ["Tables", "Chaises", "Buffet", "Vitrine", "Drogue"]
const prix = [250, 70, 460, 700, 100000000]

let choixTruc = prompt("Qu'est ce que tu veux Michel ? " + trucs.join(", ") + " ?")

// let i = trucs.indexOf(choixTruc)
// if (i !== -1){
//     console.log("le prix de " + choixTruc + " est de " + prix[i])
// }else{
//     alert("Nope, y'a pas ça dans la boutique Michel")
// }

for(let i = 0; i < trucs.length; i++){
    if(choixTruc === trucs[i]){
        console.log("le prix de " + choixTruc + " est de " + prix[i])
        break;
    }else{
        console.log("Nope, y'a pas ça dans la boutique Michel")
        break;
    }
    
}

