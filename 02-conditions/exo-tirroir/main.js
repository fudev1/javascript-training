// Exo meuble à tiroir
// choisir un tiroir via un prompt
// si 1 : ce tiroir contient des vêtements
// si 2 : ce tiroir est fermé à clé
// si 3 : ce tiroir est vide
// si 4 : ce tiroir contient des chaussetters

// resoudre cet exo avec le switch case



let choiceTiroir = +prompt("quel tiroir ? 1. 2. 3 ou 4 ?🔫")



switch(choiceTiroir) {
    case 1:
        console.log("Trop de vêtements la dedans, ça doit être le tiroir d'Hanaid")
        break;
    case 2:
        console.log("Merde c'est fermé, Michel. T'as mis où la clé?")
        break;
    case 3:
        console.log("Y'a kedal. Comme ce qu'il y a dans mon estomac")
        break;
    case 4:
        console.log("chaussettes. Chaussettes ? Le nain gagne un niveau ?")
        break;
    default:
        console.log("t'as pas rentré ce qu'il faut, hein. 1 2 3 ou 4?")
}


