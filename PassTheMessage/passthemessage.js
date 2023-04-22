var inpmsg = document.querySelector('.inputmsg');
var btn = document.querySelector('button');
var disp = document.querySelector('span');

btn.addEventListener('click',displayData);

function displayData(){
    var textmsg = inpmsg.value;
    if(!textmsg){
        alert('Please enter some message!!!')
    }
    console.log(textmsg);
    disp.textContent =textmsg;
    inpmsg.value ='';

}