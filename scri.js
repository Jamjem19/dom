/*const button = document.getElementsByClassName("changecolor1");
console.log(button);
button.addEventListener("click",function(){
    button.classList.toggle("toggle")
})*/ // function changecolor() {
//   var elem = document.getElementsByClassName('coeur');
//   elem.classList.toggle("color");
// }
const hearts = document.querySelectorAll(".heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    this.classList.toggle("color");
  });
}
const plus = document.getElementsByClassName("plus");
const moin = document.getElementsByClassName("moin");
const quantité = document.getElementsByClassName("quantité");
const ar3 = document.getElementsByClassName("n1");
const number = document.getElementsByClassName("number");
const delet = document.getElementsByClassName("delete");
const btn = document.getElementsByClassName("btn")
const pricetotal = document.getElementsByClassName("pricetotal")
var x=0
for (let i = 0; i < plus.length; i++)
  plus[i].addEventListener("click", function () {
    quantité[i].value++;
   x= ar3[i].value = Number(ar3[i].value)+ Number(number[i].innerText);
  });
for (let i = 0; i < moin.length; i++)
  moin[i].addEventListener("click", function () {
    quantité[i].value--;
    ar3[i].value = Number(ar3[i].value)- Number(number[i].innerText);
  });



  btn.addEventListener("click", function()
  {
    for (let i = 0; i < ar3.length; i++)
     pricetotal[i].value = Number(pricetotal[i].value)+Number(ar3[i].value) ;
  });
  