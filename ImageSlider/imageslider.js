var leftbtn = document.querySelector(".leftnav");
var rightbtn = document.querySelector(".rightnav");
var target = document.querySelector(".container");

leftbtn.addEventListener('click',displayImages);

rightbtn.addEventListener('click',displayImages);


function displayImages(){
    var images = ["Image1.jpeg","Image2.jpeg","Image3.jpeg","Image4.jpeg"];

    var imgName = target.src ; 
    console.log(imgName); //http://127.0.0.1:5500/node_modules/JS%20Projects//ImageSlider/Image1.jpeg

    var idx =(parseInt(Math.random()*10))% images.length;
    console.log('idx',idx)
    var newImage =`url('./${images[idx]}')`;
    console.log(newImage)
    target.style.backgroundImage=newImage;

}

