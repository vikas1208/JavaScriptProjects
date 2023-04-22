(function(){
    var btn = document.querySelector('#btn');
    var totalAmt = document.querySelector('.amt');
    var noOFPeople = document.querySelector('.people');
    var service = document.querySelector('.service-tip');
    var tipdisplay =   document.querySelector('.tipdisplay');
    var totalAmtdisplay =   document.querySelector('.totalAmtdisplay');
    var sharedisplay =   document.querySelector('.sharedisplay');

    btn.addEventListener('click',function(e){
        var Amt = parseInt(totalAmt.value);  
        var people = parseInt( noOFPeople.value);  
        var serviceTip = parseInt(service.value);
        var tipAmt = (serviceTip/100)*Amt;
        tipdisplay.innerHTML=`Tip Amount:$${parseFloat(tipAmt).toFixed(2)}`;
        var totAmt = Amt+tipAmt;
        totalAmtdisplay.innerHTML = `Total Amount: $${parseFloat(totAmt).toFixed(2)}`;
        sharedisplay.innerHTML = `Each person owes: $${parseFloat(totAmt/people).toFixed(2)}`;
    })
})();