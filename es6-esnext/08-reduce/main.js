const numbers = [10, 20, 30];
let somme = 0;

for (let i = 0; i < numbers.length; i++){
    somme += numbers[i];
}

console.log(somme);


const somme2 = numbers.reduce((total, nbr) => {
    return total + nbr 
}, 0)


// const listNames = friends.reduce((list, friend) => {
//     list.push(friend.name);
//     return list
// }, [])


const fruits = ["Banane", "Cerise", "Pomme", "Orange", "Pomme", "Ananas", "Banane", "Cerise", "Melon", "Pomme", "Pomme", "Figue"];

// output : {"banane" : 2, "cerise : 2 ....."}

const resume = fruits.reduce((panier, fruit) => {
    // if(panier[fruit]){
    //     panier[fruit] ++
    // }else {
    //     panier[fruit] = 1
    // }
    // return panier

    panier[fruit] ? panier[fruit] ++ : panier[fruit] = 1;
    return panier

}, {}) // > je defini que mon point de départ est un objet (on definit tjrs le point de départ ici 0, [], ..)


console.log(resume);