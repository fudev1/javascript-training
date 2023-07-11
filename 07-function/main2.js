// let isContinue = true; 

// while(isContinue){

//     for(){
//         if(comparer){

//         }else if (monPrompt === ""){
//             isContinue = false;
//         }else {
//             erreur
//         }
//         console.log();
//     }
// }

// sur base de ceci, je veux creer un compteur de points. 
// via un prompt, je peu ajouter un point à une personne
// dans le prompt; afficher la liste des personne dans le tableau 
// afficher la nouvelle liste avec les points mis à jour


const badPeoples = [
    {
      "name": "Quentin",
      "compteur": 0
    },
    {
      "name": "Houssine",
      "compteur": 0
    },
    {
      "name": "Nicolas",
      "compteur": 0
    },
    {
      "name": "Vincent",
      "compteur": 0
    },
    {
      "name": "Matteo",
      "compteur": 0
    },
    {
      "name": "Seb",
      "compteur": 0
    },
    {
      "name": "Sofiane",
      "compteur": 0
    },
    {
      "name": "Saad",
      "compteur": 0
    },
    {
      "name": "Athmann",
      "compteur": 0
    }
];
  

let isContinue = true;

while (isContinue){
    // step 1 : prompt pour entrer le choix ou enter pour quitter
    let choix = prompt("qui a marqué un point ?")
    console.clear();
    // itérer sur tous les elements de badPeople
    for (let guy of badPeoples){
        // comparer question à réponse dans le prompt
        if (choix === guy.name){
            guy.compteur ++;
            
        }else if (choix === ""){
            isContinue = false
        }else{
            console.log("ce no n'est pas dans la liste")
        }
        
        console.log(guy.name + " - Points : " + guy.compteur);


    }

}
    

