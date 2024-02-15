let count = 1;
let sum = 0;
const card = document.querySelectorAll('.card');
// console.log(card);
for (let i = 0; i < card.length; i++) {
    const element = card[i];
    // console.log(element);
    element.addEventListener('click', function(){
        // console.log('clicked succesfully');
        // show product name 
        const cardProductName = element.querySelector('h3').innerText

        const showProductName = document.getElementById('title-container');
        const p = document.createElement('p')
        // showProductName.document.createElement('p')
        p.innerText = count + "." + cardProductName ;
        showProductName.appendChild( p);
        count++;
        // show product price
        const cardPrice = parseFloat(element.querySelector('span').innerText.split(" ")[1]);
      

        sum= sum+cardPrice;
        const price = document.getElementById('totalPrice');
        price.innerText= sum
    })

}
document.getElementById('apply-btn').addEventListener('click', function(){
    const inputText = document.getElementById('input-field');
    const inputField = inputText.value.split(' ').join('').toUpperCase();
    if(sum>=200){
        if(inputField === SELL200){
            const discount = document.getElementById('discountPrice');
            discount.innerText = sum*0.2;
        }
    }else{
       alert('mammu minium 200$ bey korte hobe....!')
    }
    console.log(inputField);
})

