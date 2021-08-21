// memory starts from here 
document.getElementById('general-memory').addEventListener('click',function(){

const productPrice = getProductPrice ('memory-price','0');
updateTotal(productPrice);

});
document.getElementById('extra-memory').addEventListener('click',function(){

    const productPrice = getProductPrice ('memory-price','100');
    updateTotal(productPrice);
});

// SSD storage start from here 
document.getElementById('general-storage').addEventListener('click',function(){

const productPrice = getProductPrice ('storage-price','0');
updateTotal(productPrice)
});

document.getElementById('medium-storage').addEventListener('click',function(){

    const productPrice = getProductPrice ('storage-price','80');
    updateTotal(productPrice)
});

document.getElementById('large-storage').addEventListener('click',function(){

    const productPrice = getProductPrice ('storage-price','130');
    updateTotal(productPrice)
});

// delivery charge 
document.getElementById('general-charge').addEventListener('click',function(){
    const productPrice = getProductPrice ('delivery-charge','0');
    updateTotal(productPrice)
});

document.getElementById('extra-charge').addEventListener('click',function(){
    const productPrice = getProductPrice ('delivery-charge','20');
    updateTotal(productPrice)
});

// get product price function 
function getProductPrice (id,price){
const getPrice = document.getElementById(id);
getPrice.innerText = price;
const getPriceTotal = parseInt(getPrice.innerText);
return getPriceTotal;
}

// update total productPrice function
function updateTotal(productPrice){
const storagePrice = document.getElementById('grand-total');
storagePrice.innerText = '1299';
const storageAmount = parseInt(storagePrice.innerText);
const totalStoragePrice = storageAmount + productPrice;

storagePrice.innerText = totalStoragePrice;

// get final total price 
const finalTotalField = document.getElementById('final-total');
 finalTotalField.innerHTML = totalStoragePrice; 
// get total price after 20% discount
const discount = totalStoragePrice / 20;
const finalTotal = totalStoragePrice - discount;

document.getElementById('apply').addEventListener('click',function(){
   const inputField  = document.getElementById('input-field');
   const inputFieldValue = inputField.value;
   if(inputFieldValue == 'stevekaku'){
    document.getElementById('final-total').innerHTML = finalTotal;
   }
   inputField.value = '';
});

}
