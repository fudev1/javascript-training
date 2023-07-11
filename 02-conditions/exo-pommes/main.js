// créer une condition

// if(condition){
//     // si la condition est remplie
//     var toto
// }


// let et le const
// ce sont des var temporaire
// les var temp ne sont accessible que dans le scope où elles sont déclarées et leur enfants

// le const est une var temp qu'on ne peut pas réasigner

// = // assignation
// == // égale > je compare la valeur
// // 3 == "3" => True
// === // je viens comparer la valeur et le type
// // 3 === "3" => False
// // méthode la plus souvent utilisée

// let name = "Saib"

// if(name === "Saib"){
//     console.log("Salut Saib");

// }else{
//     console.log("qui es tu ?")
// }




// let age = +prompt("quel âge as-tu ?")

// // condition qui vérifie si la valeur est un nombre ou pas
// if(isNaN(age)){
//     console.log("j'ai demandé un nombre")
// }else{
//     if(age > 100){
//         alert("sale menteur")
//     }else if(age >= 18){
//         console.log("tu es majeur")
//     }else{
//         console.log("tu es un petit caca")
//     }
// }


// exo
// cmb de pommes avez vous récoltées ?
// si + de 35
// demander via un prompt de quelle couleur sont les pommes
// Si pomme sont rouge : console log "bj j'aime le red"
// si pomme verte : console log "c pas mal mais j'voulais des red"
// si c'est une autre couleur : console log "couleur n'est pas une couleur"
// si - de 35 pommes : console log retourne travailler
// bonus :: 
// faire en sorte que votre algo, comprenne si j'écris ROUGE
// si j'écris rouge, rouges ou des pommes rouges

let nbrePomme = +prompt("Combien de pommes as-tu?")

if(isNaN(nbrePomme)){
    // console.log("j'ai demandé un nombre")
    console.log("j'ai demandé un nombre")
}else{  

    if(nbrePomme > 35){
        let couleurPomme = prompt("Ah ouais ? Et quelle couleur ?")
    
        if(typeof(couleurPomme) === string){

            if(couleurPomme.toLowerCase().includes("rouge")){
                console.log("Bo goss, j'aime le red")
            }
            else if (couleurPomme.toLowerCase().includes("vert")){
                console.log("Beyyyk j'aime pas le vert. Je veux des rouges")
            }
            else{
                console.log(couleurPomme + ", c'est pas une couleur de pomme ducon")
            }

        }else{
            console.log("Ecrit en fr concon")
        }
        
    } else{
        console.log("Va bosser ptit con")
    }
}





  
