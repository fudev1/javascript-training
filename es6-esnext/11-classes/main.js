
// par convention 
// une class = Majuscule

class Chieng{
    constructor(nom, race, age){
        this.nom = nom;
        this.race = race;
        this.age = age;
    }

    aboyer(){
        console.log(`LE chieng ${this.nom} est en train d'aboyer`);
    }

    caliner(){
        console.log("votre chien vous adore")
        this.aboyer()
    }

    get surnom(){
        return this.nick;
    }

    set surnom(value){
        this.nick = value;
    }
}

const rex = new Chieng("Rex", "bichong", 10);

console.log(rex)

rex.aboyer()


rex.surnom = "dog water"

console.log(rex.surnom)


