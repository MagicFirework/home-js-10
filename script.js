"use strict";
const elem = document.querySelectorAll(".book");
const body = document.querySelector("body");
const elem4 = elem[4].querySelector("h2 > a");
const delAdv = document.querySelectorAll(".adv");
const book2 = elem[0].querySelectorAll("li");
const book5 = elem[5].querySelectorAll("li");
const book6 = elem[2].querySelectorAll("li");
const newElem = document.createElement("li"); // создали новый элемент верстки

elem[0].before(elem[1]);
elem[5].after(elem[2]);
elem[3].before(elem[4]);
book2[9].after(book2[2]);
book2[8].after(book2[4]);
book2[4].after(book2[5]);
book2[9].before(book2[7]);
book5[1].after(book5[9]);
book5[4].after(book5[2]);
book5[7].after(book5[5]);
book6[8].after(newElem);

newElem.textContent = "Глава 8: За пределами ES6"; // добавили текст

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg";
elem4.textContent = "Книга 3. this и Прототипы Объектов";

delAdv.forEach((child) => {
  child.remove();
});

console.log(newElem);
console.log(book6);
