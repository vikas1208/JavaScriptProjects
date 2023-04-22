(function(){
    var numbers = document.querySelectorAll('.btn');
    var equal = document.querySelector('.btn-equal');
    var clear = document.querySelector('.btn-clear');
    var screen = document.querySelector('.screen');
   

    numbers.forEach(function(number){
        number.addEventListener('click',function(e){
               var val= e.target.dataset.num;
               screen.value += val ;
        })
    });

    equal.addEventListener('click',function(e){
        if(screen.value===''){
            alert('Please enter some value.....');
        }else{
           
           var answer = eval(screen.value);
           screen.value = answer;
        }
    });

    clear.addEventListener('click',function(e){
        screen.value = '';
    })
    

})();


