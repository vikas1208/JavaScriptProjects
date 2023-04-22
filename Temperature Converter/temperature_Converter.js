// This is a single line comment
/*
    This is
    a multi-line comment.
*/


let cel = document.getElementById('cel');
let fah = document.getElementById('fah');

cel.addEventListener('input',function(){
    let c = this.value;
    let f = (9/5)*c +32;
    fah.value =f.toFixed(2);
});

fah.addEventListener('input',function(){
    let f = this.value;
    let c = (f-32)*5/9;
    cel.value=c.toFixed(2);
});

