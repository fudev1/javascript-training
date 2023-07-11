const myBtn = document.getElementById("btn");

const box = document.getElementById("box");

let isVisible = true;


// prend 2 valeur 
// 1 = type action
// 2 = ce qu'il fait lorsqu'on déclenche
myBtn.addEventListener("click", function(){

    if(isVisible){
        box.style.display = "none";
        isVisible = false;
    }else{
        box.style.display = "block";
        isVisible = true;
    }

    // si on a pas envie de s'emmerder
    // on assigne l'inverse de lui même
    // isVisible != isVisible

})


// fonction qui écoute si on copie un élement et envoie un log dans la console
box.addEventListener("copy", messageAfterCopy);

function messageAfterCopy(event){
    console.log(event.target);
    box.removeEventListener("copy", messageAfterCopy);
}
