let input=document.getElementById('inp');
let charNode=document.getElementById('char');
let wordNode=document.getElementById('word');

input.addEventListener('input',function(){
    let text=this.value;
    let charLen = text.length;
    text=text.trim();
    charNode.innerHTML= charLen;
    let words=text.split(' ');
    let clearedLists=words.filter(function(e){
            return e!="";
    })
    wordNode.innerHTML = clearedLists.length;
})
