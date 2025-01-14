const counter = document.getElementById("counter");
const button = document.getElementById("button");

let count = 0;
let isDown = false;
let timeout;

button.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  if (count > 0) {
    count -= 1;
    counter.textContent = count;
  }
});

button.addEventListener("mousedown", () => {
  isDown = false;
  timeout = setTimeout(() => {
    isDown = true;
  }, 1000);
});

button.addEventListener("mouseup", () => {
  clearTimeout(timeout);

  if (isDown) {
    count = 0;
    counter.textContent = count;
  } else {
    if (count < 20) {
      count += 1;
      counter.textContent = count;
    }
  }
});
