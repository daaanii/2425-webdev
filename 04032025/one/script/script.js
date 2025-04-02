const numbersDiv = document.getElementById("numbers");
const confirmButton = document.getElementById("confirm");
const resetButton = document.getElementById("reset");
const countInput = document.getElementById("count");
const addButton = document.getElementById("add");

let array = [];

confirmButton.addEventListener("click", () => {
  localStorage.setItem("array", JSON.stringify(array));
  window.location.href = "stats.html";
});

resetButton.addEventListener("click", () => {
  array = [];
});

addButton.addEventListener("click", () => {
  for (let i = 1; i <= countInput.value; i++) {
    const newButton = document.createElement("button");
    newButton.innerText = i;

    newButton.addEventListener("click", () => {
      array.push(i);
    });

    numbersDiv.appendChild(newButton);
  }

  countInput.classList.add("hidden");
  addButton.classList.add("hidden");

  confirmButton.classList.remove("hidden");
  resetButton.classList.remove("hidden");
});