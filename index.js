let sum = 0;
let cart = [];
const card = document.querySelectorAll(".card");
// console.log(card);
for (let i = 0; i < card.length; i++) {
  const element = card[i];
  // console.log(element);
  element.addEventListener("click", function () {
    // show product name
    const cardProductName = element.querySelector("h3").innerText;
    cart.push(cardProductName);
    console.log(cart);
    let counterObject = {};
    for (const titleName of cart) {
      if (counterObject[titleName]) {
        counterObject[titleName]++;
      } else {
        counterObject[titleName] = 1;
      }
    }
    console.log(counterObject);
    console.log(Object.entries(counterObject));
    const showProductName = document.getElementById("title-container");
    showProductName.innerHTML=" ";
    for (const key in counterObject) {
      const element = counterObject[key];
      console.log(element, key);
    
      const p = document.createElement("p");
      p.innerText = showProductName.childElementCount +1 + "." + key + element;
      showProductName.appendChild(p);
    }
    // showProductName

    // show product price
    const cardPrice = parseFloat(
      element.querySelector("span").innerText.split(" ")[1]
    );
    sum = sum + cardPrice;
    const price = document.getElementById("totalPrice");
    price.innerText = sum;
  });
}
document.getElementById("apply-btn").addEventListener("click", function () {
  const inputText = document.getElementById("input-field");
  const inputField = inputText.value.split(" ").join("").toUpperCase();
  if (sum >= 200) {
    if (inputField === "SELL200") {
      const discount = document.getElementById("discountPrice");
      // const p = document.createElement('p');
      // p.innerText = sum*0.2;
      // discount.appendChild(p)
      const discountAmount = sum * 0.2;
      discount.innerText = discountAmount.toFixed(2);

      const total = document.getElementById("total");
      const setTotalPrice = sum - discountAmount.toFixed(2);
      total.innerText = setTotalPrice;
      inputText.value = " ";
    } else {
      alert("mammu thiktahk likho");
      inputText.value = " ";
    }
  } else {
    alert("mammu minium 200$ bey korte hobe....!");
    inputText.value = " ";
  }
  // console.log(inputField);
});

const getBey = document.getElementById("Btn-purcase");
getBey.addEventListener("click", function () {
  document.getElementById("title-container").innerText = " ";
  count = 1;
  document.getElementById("totalPrice").innerText = " ";
  document.getElementById("discountPrice").innerText = " ";
  document.getElementById("total").innerText = " ";
});

const hide = document.getElementsByClassName("btn btn-wide");
// console.log(hide.classList);
