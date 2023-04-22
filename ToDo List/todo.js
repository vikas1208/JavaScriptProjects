
var btn = document.querySelector('.additem');
var inputbox = document.querySelector('#store-item');
var storeItems = document.querySelector('.store-items');

btn.addEventListener('click',function(){
    var storeItem = inputbox.value;
    storeItems.insertBefore(' ')
})