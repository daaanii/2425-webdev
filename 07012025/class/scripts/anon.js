let f = () => alert("Hello!");
f();

const counter = document.getElementById("counter");
let c = 0;

function updateText() {
  c += 1;
  counter.textContent = c;

  if (c >= 5) {
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(updateText, 1000);

const button = document.getElementById("button");

button.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  button.value = "Clicked!";
});
