var button=document.querySelector('button');
var body = document.querySelector('body');

var colors = ['red','green','yellow','orange'];
button.addEventListener('click',function(){
    var idx=parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[idx] ;
})