const DIList = {
    "stagiaires":[
        {
            "firstname":"Kentin",
            "lastname":"Esgain",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"THibau",
            "lastname":"Vandenbussche",
            "age":24,
            "city":"Houthem"
        },
        {
            "firstname":"Houcin",
            "lastname":"Flament",
            "age":26,
            "city":"Cuesmes"
        },
        {
            "firstname":"Nkko",
            "lastname":"Verde",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"20 100",
            "lastname":"Lagast",
            "age":36,
            "city":"Mons"
        },
        {
            "firstname":"Math hé ho",
            "lastname":"Wrincq",
            "age":53,
            "city":"Quaregnon"
        },
        {
            "firstname":"Shaib",
            "lastname":"Davin",
            "age":30,
            "city":"Braine L'Alleud"
        },
        {
            "firstname":"Souf",
            "lastname":"Danzin",
            "age":40,
            "city":"Saint-Symphorien"
        },
        {
            "firstname":"Rachida",
            "lastname":"Delaunoy",
            "age":20,
            "city":"Charleroi"
        }
    ],
    "formateurs":[
        {
            "firstname":"Max",
            "lastname":"Chartreuse",
            "age":28,
            "city":"Mons"
        },
        {
            "firstname":"Sebastien",
            "lastname":"Cardon", 
            "age":34,
            "city":"Ghlin"
        },
        {
            "firstname":"Gilles",
            "lastname":"Bertrand",
            "age":35,
            "city":"Hyon"
        }
    ]
};

// for (const stagiaire of DIList.stagiaires){

//     console.log(stagiaire.firstname + " " + stagiaire.lastname)
// }

// console.log(" ")

// for(let [stagiaireId, stagiaire] of DIList.stagiaires.entries()){
//     const titre = "Stagiaire " + (stagiaireId + 1)
//     const fullName = stagiaire.firstname + " " + stagiaire.lastname

//     console.log(titre + ": " + fullName)
// }



// logger les stagiares
// step 2 = afficher le nom 

// step 1 = boucler sur les stagiaires
for (let stagiaire of DIList.stagiaires) {

    // step 3 = condition si le prénom commence par T, S ou H
    let initiale = stagiaire.firstname.charAt(0);
    if (initiale === "T" || initiale === "H" || initiale === "S") {
        
        // affiche le nom puis (le prenom pour checker que la cond est OK)
        console.log("♦️ " + stagiaire.lastname);
        console.log("------> " + stagiaire.firstname)

    }
  }


console.log("")


var uneChaîne = "Coucou tout le monde";

console.log("La caractère d'indice 0 est '" + uneChaîne.charAt(0)   + "'");
console.log("La caractère d'indice 1 est '" + uneChaîne.charAt(1)   + "'");
console.log("La caractère d'indice 2 est '" + uneChaîne.charAt(2)   + "'");
console.log("La caractère d'indice 3 est '" + uneChaîne.charAt(3)   + "'");
console.log("La caractère d'indice 4 est '" + uneChaîne.charAt(4)   + "'");
console.log("La caractère d'indice 999 est '" + uneChaîne.charAt(999) + "'");

// La caractère d'indice 0 est 'C'
// La caractère d'indice 1 est 'o'
// La caractère d'indice 2 est 'u'
// La caractère d'indice 3 est 'c'
// La caractère d'indice 4 est 'o'
// La caractère d'indice 999 est ''

for (const stag of DIList.stagiaires){
    let initiales = stag.firstname.substring(0,1)
    if(
        initiales ==="T"||initiales==="H"||initiales==="S")
    
    console.log(stag.lastname +" "+ stag.firstname)
}
