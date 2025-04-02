const countElement = document.getElementById("count");
const sumElement = document.getElementById("sum");
const averageElement = document.getElementById("average");
const minElement = document.getElementById("min");
const maxElement = document.getElementById("max");

const array = JSON.parse(localStorage.getItem("array"));

const sum = array.reduce((item, current) => item + current, 0);
const average = sum / array.length;
const min = Math.min(...array);
const max = Math.max(...array);

countElement.innerText = "Numero elementi selezioni: " + array.length;
sumElement.innerText = "Somma: " + sum;
averageElement.innerText = "Media: " + average;
minElement.innerText = "Valore min: " + min;
maxElement.innerText = "Valore max: " + max;
