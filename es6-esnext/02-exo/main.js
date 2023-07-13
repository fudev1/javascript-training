// Exo 

// créer un nouvel array se nommant heights et qui ne contiendra que les hauteurs de chaque objet de images
//expectation : ["34px", "76px", "3px", "94px"]



const images = [
    {height: "34px", width: "45px", color: "chartreuse"},
    {height: "76px", width: "20px", color: "burlywood"},
    {height: "3px", width: "47px", color: "red"},
    {height: "94px", width: "43px", color: "yellow"},
];



const heights = images.map(function(image){
    return image.height
})

console.log(heights);