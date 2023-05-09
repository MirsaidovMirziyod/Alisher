let elResult = document.querySelector('h1')

let money = +prompt("Son kiriting!");
let plainCost = 500;
let hotelCost = 250;
let enternaimentCost = 120;

plainCost = 500 * 11000.34;
hotelCost = 250 * 11000.34;
enternaimentCost = 120 * 12354.34;

let all = plainCost + plainCost + enternaimentCost;

if (money - all > 0) {
  console.log("Oq yo'l Alisher");
  elResult.textContent = "Oq yo'l Alisher"
} else {
  console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan");
  elResult.textContent = "Alisher, ozgina sabr qilish kerak bo'lar ekan"
}
