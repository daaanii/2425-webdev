const number = prompt("Enter a number: ");

const element = document.getElementById("output");

for (let i = 1; i <= 10; i++) {
  element.textContent += number * i;
  if (i < 10) {
    element.textContent += ", ";
  }
}
