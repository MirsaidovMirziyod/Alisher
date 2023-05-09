let elResult = document.querySelector("h1");

let money = +prompt("Son kiriting!");
let plainCost = 500;
let hotelCost = 250;
let funCost = 120;

let dollar = 11000.34;
let euro = 12354.34;

plainCost = plainCost * dollar;
hotelCost = hotelCost * dollar;
funCost = funCost * euro;

let all = plainCost + plainCost + funCost;
let notEnough = all - money;

if (money - all > 0) {
  console.log("Oq yo'l Alisher");
  elResult.textContent = "Oq yo'l Alisher";
} else {
  console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan");
  console.log("sanga " + Math.round(notEnough) + " so'm yetmayabdi");
  elResult.textContent = "Alisher, ozgina sabr qilish kerak bo'lar ekan";
}
