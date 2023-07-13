const square = document.getElementById("square");
const reset = document.getElementById("reset");

// event
square.addEventListener("click", createSquare);


// event btn box
function createSquare(){
    // je crée un element qui sera un div
    let box = document.createElement("div");

    // je stylise la box
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.backgroundColor = "chartreuse";
    box.style.marginTop = "20px";

    document.getElementById("preview").appendChild(box);
}


// btn reset
    reset.addEventListener("click", function(){
    document.getElementById("preview").innerHTML = ""
})