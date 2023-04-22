var target = document.querySelector('span');
var reduceCt = document.querySelector('.dec');
var increaseCt = document.querySelector('.inc');

reduceCt.addEventListener('click',decrementCount);
increaseCt.addEventListener('click',incrementCount);

function decrementCount(){
        var val = Number(target.textContent);
        target.textContent =val-1;
}

function incrementCount(){
    var val = Number(target.textContent);
    target.textContent =val+1;
}
