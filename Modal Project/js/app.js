(function(){
    var lightbox = document.querySelector('.lightbox-container');
    var storeitems     = document.querySelectorAll('.store-item');
    var storeimages  = document.querySelectorAll('.store-img');
    var lightBoxItem     =     document.querySelector('.lightbox-item');
    var  closebtn  =  document.querySelector('.lightbox-close');

    var images = [];

    storeimages.forEach(function(image){
        images.push(image.src);
    })

    storeitems.forEach(function(item){
          item.addEventListener('click',function(e){
            lightbox.classList.add('show');
          })  
    })


    var leftBtn = document.querySelector('.btnLeft');
    var rightBtn = document.querySelector('.btnRight');

    leftBtn.addEventListener('click',displayImage);
    rightBtn.addEventListener('click',displayImage);

    function displayImage(){
     var idx = parseInt((Math.random()*100)%images.length);
     lightBoxItem.style.backgroundImage =`url(${images[idx]})`;
    }

    closebtn.addEventListener('click',function(){
      lightbox.classList.remove('show');
    })

})();