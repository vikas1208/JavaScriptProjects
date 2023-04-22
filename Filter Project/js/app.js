// (function(){
//    var btns = document.querySelectorAll('.filter-btn');
//    var storeItems = document.querySelectorAll('.store-item');

//         btns.forEach(function(button){
//             button.addEventListener('click',function(e){
//                     e.preventDefault();
//                     var filterVal = e.target.dataset.filter;
//                     if(filterVal==='all'){
//                         storeItems.forEach(function(item){
//                             item.style.display = 'block';
//                         })
//                     }else if(filterVal ==='cakes'){
//                         storeItems.forEach(function(item){
//                             if(item.target.dataset.filter===filterVal){
//                                 item.style.display = 'block';
//                             }else{
//                                 item.style.display = 'none';
//                             }
                            
//                         })
//                     }else if(filterVal ==='cupcakes'){
//                         storeItems.forEach(function(item){
//                             if(item.target.dataset.filter===filterVal){
//                                 item.style.display = 'block';
//                             }else{
//                                 item.style.display = 'none';
//                             }
                            
//                         })
//                     }else if(filterVal ==='sweets'){
//                         storeItems.forEach(function(item){
//                             if(item.target.dataset.filter===filterVal){
//                                 item.style.display = 'block';
//                             }else{
//                                 item.style.display = 'none';
//                             }
                            
//                         })
//                     }else if(filterVal ==='doughnuts'){
//                         storeItems.forEach(function(item){
//                             if(item.target.dataset.filter===filterVal){
//                                 item.style.display = 'block';
//                             }else{
//                                 item.style.display = 'none';
//                             }
                            
//                         })
//                     }
//             })
//         })

// })();

(function(){
    const buttons = document.querySelectorAll('.btn');
    const storeItems = document.querySelectorAll('.store-item');

    buttons.forEach(function(button){
            button.addEventListener('click',function(e){
                e.preventDefault();
                var filterVal = e.target.dataset.filter;

                storeItems.forEach(function(item){
                    if(filterVal==='all'){
                        item.style.display = 'block';
                    }else{
                        if(item.classList.contains(filterVal)){
                            item.style.display = 'block';
                        }else{
                            item.style.display = 'none';
                        }
                    }
                })
            })
    })


       
            
})();


(function(){
    var searchBox = document.querySelector('#search-item');
    const storeItems = document.querySelectorAll('.store-item');

    searchBox.addEventListener('keyup',function(e){
        var searchVal = e.target.value.toLowerCase().trim();
        storeItems.forEach(function(item){
            if(item.textContent.includes(searchVal)){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        })

    })
})();