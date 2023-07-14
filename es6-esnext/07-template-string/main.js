const nom = "Nicolas";
const habitation = "grotte";

// ancienne méthodes
console.log("Bonjour, je suis " + nom + " et j'habite dans une " + habitation);

// méthode string
console.log(`Bonjour, je suis ${nom} et j'habite dans une ${habitation}`);


// on peut integrer de l'html grâce aux marqueur
const user = {
    firstName : "Quentin",
    job : "Boulanger",
    city : "Madrid",
    bio : "S'il pleut pas, c'est qu'il fera beau"

}

const markup = `
    <h1>
        ${user.firstName}
        <em>${user.city}</em>
    </h1>
    <p class="toto">
        ${user.job} 
    </p>
    <p>
        ${user.bio}
    </p>
`;

// document.getElementById("output").innerHTML = markup;


const computers = [
    {name : "Asus", ram : 16},
    {name : "Atari", ram : 1},
    {name : "IBM", ram : 2}
]


// le .join transforme le array en chaine de caractère
// .map return un array
//  on rentre dans la var computer
const list = `
    <ul>
        ${computers.map(pc => `<li>${pc.name} - ${pc.ram}</li>`).join(" ")}
    </ul>

`



const songs = [
    {
        name : "Thriller",
        artist : "Michael Jackson",
    },
    {
        name : "Under pressur",
        artist : "Queen",
        featuring : "David Bowie",
    },
    {
        name : "My heart will go on",
        artist : "Metalica",
    },
    {
        name : "Thriller",
        artist : "Michael Jackson",
    },
    {
        name : "Dying to live",
        artist : "2pac",
        featuring : "Biggie Small",
    },
    {
        name : "Baby",
        artist : "Justin Bieber",
    },

];

// dans html 
// output : 

// SI featuring alors : 
// Under Pressure - Queen (featuring : David Bowie)
// SINON
// Thriller - Michael Jackson

const listSong = `
    <ul>
    ${songs.map(music => `<li>${music.name} - ${music.artist} ${music.featuring ? ` (featuring: ${music.featuring})` : ''}</li>`).join(" ")}
    </ul>
`

// j'itère sur "SONGS" en disant que ce sont des musiques 
// Je demande de faire un LI (html)
// Je transforme en JS et je vais chercher l'attribut name et artist
// condition ternaire "Est ce qu'il y a featuring ?"
// si oui alors je html featuring et je vais chercher l'attribut
// si non alors je html du vide
// je join pour chaine de caractère
document.getElementById("listSong").innerHTML = listSong;



