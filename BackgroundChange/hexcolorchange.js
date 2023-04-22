var btn = document.querySelector('button');
var body = document.querySelector('body');



btn.addEventListener('click', colorChange);

function colorChange(){
    var hexcode='#'
    var idx =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    for(let i=0;i<6;i++){
        var randNum = parseInt(Math.random()*100)%16;
        hexcode =hexcode.concat(idx[randNum]);
    }
    body.style.backgroundColor=hexcode;

}

