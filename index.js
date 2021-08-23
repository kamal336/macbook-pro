// memory event handler starts from here
document.getElementById('general-memory').addEventListener('click',function(){

    memoryField.innerText = '0';
    updateTotal();
})
 
 document.getElementById('extra-memory').addEventListener('click',function(){

    memoryField.innerText = '180';
    updateTotal();
});
 
// SSD storage event handler starts from here
    document.getElementById('general-storage').addEventListener('click',function(){
    
       storageField.innerText = '0'
       updateTotal();
    });
    
    document.getElementById('medium-storage').addEventListener('click',function(){

       storageField.innerText = '100'
       updateTotal();
    });
    
    document.getElementById('large-storage').addEventListener('click',function(){

       storageField.innerText = '180'
       updateTotal();
    });
    
    // delivery charge event handler starts from here
    document.getElementById('general-charge').addEventListener('click',function(){

       deliveryField.innerText = '0'
       updateTotal();
    });
    
    document.getElementById('extra-charge').addEventListener('click',function(){

       deliveryField.innerText = '20'
       updateTotal();
    });
     
    // field id select here 
    const generalField = document.getElementById('general-price');
    const memoryField = document.getElementById('memory-price');
    const storageField = document.getElementById('storage-price');
    const deliveryField = document.getElementById('delivery-charge');
    
    // update total productPrice function
    function updateTotal(){

    const memoryPrice = parseInt(memoryField.innerText);
    const storagePrice = parseInt(storageField.innerText);
    const deliveryPrice = parseInt(deliveryField.innerText);
 
    generalField.innerText = '1299';
    const basePrice = parseInt(generalField.innerText);
 
    const subTotal = memoryPrice + storagePrice + deliveryPrice + basePrice;

    const grandTotalField = document.getElementById('grand-total');
      grandTotalField.innerHTML = subTotal ;

    const finalTotalField = document.getElementById('final-total');
       finalTotalField.innerHTML = subTotal ; 
    
    //    discount calculate 
    const discount = (subTotal * 20) / 100;
    const finalTotal = subTotal - discount;
    console.log(finalTotal)

           
    document.getElementById('apply').addEventListener('click',function(){
        const inputField  = document.getElementById('input-field');
        const inputFieldValue = inputField.value;
        
        if(inputFieldValue == 'stevekaku'){
         document.getElementById('final-total').innerHTML = finalTotal;
        }
        inputField.value = '';
     });
     
   
    }
 
 