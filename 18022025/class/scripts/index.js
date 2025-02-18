const button = document.querySelector("#start");
const out = document.querySelector("#out");

function getMessageWithDelay() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Risultato dopo due secondi"), 2000);
  });
}

button.addEventListener("click", () => {
  out.textContent = "Wait...";

  getMessageWithDelay().then((message) => {
    out.textContent = message;
  });
});
