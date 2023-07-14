function breathe(timing){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timing < 500){
                reject(new Error("Attention t'es mort..."))
            }else {
                resolve(`respiration ${timing}`)
            }
        }, timing)
    })
};

// breathe(900).then(res => {
//     console.log(res)
//     return breathe(1000)
// }).then(res => {
//     console.log(res)
//     return breathe(700)
// }).then(res => {
//     console.log(res)
//     return breathe(1333)
// }).then(res => {
//     console.log(res)
//     return breathe(600)
// }).then(res => {
//     console.log(res)
//     return breathe(300)
// }).catch(err => console.error(err))


// Iife
(async function go(){
    try{
        console.log(await breathe(600));
        console.log(await breathe(1600));
        console.log(await breathe(700));
        console.log(await breathe(800));
        console.log(await breathe(1000));
        console.log(await breathe(200));
        console.log(await breathe(900));

    }catch(err){
        console.error(err);
    }
}) ();

//go

function showImg(){
    return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.src = "https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x5400x2700.png"
        img.alt = "photo de la nasa"
        document.getElementById("output").appendChild(img);

        img.onload = () => resolve("OK c'est bon")
        img.onerror = () => reject(new Error ("problème img"))
    })
};

(async function showImgSize(){
    try{
        await showImg();
        console.log(document.querySelector("img").height);
        console.log(document.querySelector("img").width);
    }catch(err){
        console.error(err)
    }
})();