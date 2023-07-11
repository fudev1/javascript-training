
const amis = []
amis.push("vincent")
amis[1] = "Nico"
amis[2] = "Tibo"
amis[3] = "Sofiane"



const enemis = []
enemis[0] = "Matteo"
enemis[1] = "Seb"
enemis[2] = "kentin"

const pause = []
pause[0] = "Franc"



const gens = [amis, enemis]

console.log(gens[0][1])


// [Obsidian Note]
// La boucle externe for itère sur les éléments de gens 
// boucle for interne itère sur les éléments de chaque tableau contenu dans gens

for (let i = 0; i < gens.length; i++) {     // boucle externe 1er tableau
  for (let j = 0; j < gens[i].length; j++) {    // boucle interne 2nd tableau
    console.log(gens[i][j]);
  }
}
