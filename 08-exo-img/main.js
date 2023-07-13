

const datas = [
    {
        "src" : "images/monstre1.jpg",
        "title" : "Boule verte",
        "alt" : "Monstre poilu vert"
    },
    {
        "src" : "images/monstre2.jpg",
        "title" : "Tentaculos",
        "alt" : "Pieuvre bleue à rayures"
    },
    {
        "src" : "images/monstre3.jpg",
        "title" : "Monstre à sucette",
        "alt" : "Monstre à sucette"
    },
    {
        "src" : "images/monstre4.jpg",
        "title" : "Triglobuleux",
        "alt" : "Monstre à 3 zieux"
    },
    {
        "src" : "images/monstre5.jpg",
        "title" : "Diablotin",
        "alt" : "Diable rouge"
    },
    {
        "src" : "images/monstre6.jpg",
        "title" : "Chewbacca rose",
        "alt" : "Monstre poilu rose"
    }
];


const displayedImage = document.querySelector(".displayedImg"); 
// console.log(displayedImage)
const thumbBar = document.getElementById("thumbBar"); 
// console.log(thumbBar)
const btn = document.getElementById("btn_close"); 





for (const data of datas) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", data.src);
    newImage.setAttribute("alt", data.alt);

    const monsterName = document.createElement("span");
    monsterName.textContent = data.title;

    // thumbBar.appendChild(monsterName);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
        closeButton.style.display = "block";
        displayedImage.style.display = "block";
    });
}





// Bouton Close
const closeButton = document.createElement("button");
closeButton.textContent = "Oh yaah, close me";

// Insertion Bouton Close + attribution class "btn_burly"
const previewContainer = document.getElementById("preview");
previewContainer.appendChild(closeButton);
closeButton.classList.add("btn_burly")


// Event (click > remove balise img)
closeButton.addEventListener('click', () => {
    const preview = document.getElementById("preview");
    const displayedImage = preview.querySelector("img");
    if (displayedImage) {
        displayedImage.style.display = "none";
        closeButton.style.display = "none";
    }
});

