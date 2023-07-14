// /* -------------------------------------------------------------------------- */
// /*                                    fetch                                   */
// /* -------------------------------------------------------------------------- */
// /* --------------- permet d'aller à une url (api par exemple) --------------- */


// const p = fetch('https://jsonplaceholder.typicode.com/posts')
// console.log(p);

// // quand on fetch il y a deux methode dispo 
// // le point then = en cas de réussite
// // le point catch = en cas d'échec

// // on va jsoniser l'info (res = response)
// p.then(res => res.json())

// // la promesse au dessus nous envoie des info. on va filtrer une fois de plus nos info avec une nouvelle promesse
// .then(res => {
//     console.log(res);
//     return generateTitle(res);
// })

// // function qui va recevoir des infos datas
// function generateTitle(datas){
//     for (let item of datas){
//         const li = document.createElement("li");
//         li.innerHTML = item.title;

//         // on invoque le ptit monstre qu'on a créé
//         document.querySelector("ul").appendChild(li)
//     }
// }



// /* --------------------- // créons notre propre promise --------------------- */

// // promise prend deux arguments (attention a l'emplacement. 1 = reussite, 2 = raté)
// const promesse = new Promise((resolve, reject) => {
//     const question = prompt("Entre votre âge");

//     setTimeout(function (){
//         if (question >= 18){
//             resolve("OK c'est bon")
//         } else {
//             reject(new Error("Non, t'as pas 18 ans"))
//         }
//     }, 2000); // je met du délais

// });

// promesse.then(res => console.log(res)).catch(err => console.error(err));

// console.log("le code continue de s'exécute")



/* ------------------------------ cas concrettt ----------------------------- */

const posts = [
    {title: "J'aime le pain", author: "Quentin Drragon", id:1},
    {title: "S'il pleut pas, c'est qu'il fera beau", author: "Sofiane Socrate", id:2},
    {title: "J'aime les gens ", author: "Mattéo Leroi", id:3},
]

const authors = [
    {name : "Quentin Drragon", twitter: "@QuentinMdr" , bio : "vive les morts"},
    {name : "Sofiane Socrate", twitter: "@Platon4Ever" , bio : "La philosophie ne nous sert à rien"},
    {name : "Mattéo Leroi", twitter: "@Mathias" , bio : "j'adore les gens !"},

]


// je recup les post par id 
function getPostById(id){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const post = posts.find(item => item.id === id); // méthode find pour trouver les post par les id
            // if(post){
            //     resolve(post)
            // }else {
            //     reject(new Error("post not found"));
            // }

            post ? resolve(post) : reject(new Error("post not found"));
            
        }, 500)
    })
}

function getAuthor(post){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const authorDetails = authors.find(item => item.name === post.author);
            if(authorDetails){
                post.author = authorDetails;
                resolve(post)
            }else{
                reject(new Error("author not found"))
            }
        }, 1000)
    })
}

// on fait une fonction getAuthor depuis un "post" qu'on lui envoie
// nouvelle promesse avec deux arguments, call back
// une promesse = un flux d'informations
// on met un timeout 
// cree une const qui va chercher dans les "authors" un item qui est comparé entre le nom et l'author de la var "post"

getPostById(2).then(res => getAuthor(res))
            .then(res => console.log(res))
            .catch(err => console.error(err));


/* ----------------------------------- exe ---------------------------------- */

// creer une fonction qui prend comme paramètre un nombre aléatoire entre 1 et 1000
// (généré en js)
// cette fonction retournera une promesse
// la promesse retournera un reject avec un message dans le cas où le nombre aléatoire est compris entre 200 et 450 inclus
// dans le cas contraire, attendre 2000 milisecondes pour resolve la promesse avec le message suivant : 
// "DRAGON"


// Math.round(math.random()*1000) arrondi un nbre 


// const nbrRandom = Math.round(Math.random()*1000);
// console.log(nbrRandom)




// function getNumber(nbr){
//     return new Promise((resolve, reject) => {
//         if (nbr >= 200 && nbr <= 450){
//             reject(new Error("Nope"))
//         }else {
//             setTimeout(function() {
//                 resolve("Dragon")    
//             }, 2000);
//         }              
//     })
// }


// getNumber(nbrRandom).then(res => console.log(res))
//             .catch(err => console.error(err));




// vous etes une équipe d'ingénieur et vous, venez de trouver un moyen révolutionnaire d'afficher 
// une addition avec une technologie proche de quantique : la promesse !!

// créer une fonction va prendre en paramètre qui est un nombre et qui retourne une promesse 
// si le nombre dépasse 50, la machine s'emballe et passe dans le reject directement 
// si le nombre est inférieur à 50, la machine prend 2 secondes (settimeout) pour effectuer le calcul incroyablement complexe de + 10
// le resultat de l'opération devra etre retourné dans le resolve et le reject

// cette opération devra etre effectué 5 fois de suite en partant de 20



function theQuanticCalculayte(nbr){
    return new Promise((resolve, reject) => {
        if (nbr > 50){
            reject(new Error(nbr + "BOOUUUUMMM c'est pétéééééé"))
        } else {
            setTimeout(() => {
                resolve(nbr + 10);
            }, 2000)
        }
    })
}


theQuanticCalculayte(20).then(res => {
    console.log(res);
    return theQuanticCalculayte(res)
}).then(res => {
    console.log(res);
    return theQuanticCalculayte(res)
}).then(res => {
    console.log(res);
    return theQuanticCalculayte(res)
}).then(res => {
    console.log(res);
    return theQuanticCalculayte(res)
})



let number = 20

  
  for (let i = 0; i < 5; i++) {
    theQuanticCalculayte(number)
      .then(res => {
            console.log(res);
            number = res
            return theQuanticCalculayte(res)
      })
      .catch(err => {
        console.error(err);
      });
  }
  





 