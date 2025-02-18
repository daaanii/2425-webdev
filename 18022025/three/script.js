const min = document.querySelector("#min");
const max = document.querySelector("#max");
const minDelay = document.querySelector("#minDelay");
const maxDelay = document.querySelector("#maxDelay");
const button = document.querySelector("#button");

function generateNumber(min, max, minDelay, maxDelay) {
  return new Promise((resolve, reject) => {
    if (min < 10 || max > 100) {
      reject(new Error("I numeri devono essere compresi tra 10 e 100!"));
    }

    if (minDelay < 1000 || maxDelay > 4000) {
      reject(new Error("I ritardi devono essere compresi tra 1 e 4!"));
    }

    const number = Math.floor(Math.random() * (max - min + 1) + min);
    const delay = Math.floor(
      Math.random() * (maxDelay - minDelay + 1) + minDelay,
    );

    setTimeout(() => resolve(number), delay);
  });
}

button.addEventListener("click", () => {
  generateNumber(
    min.value,
    max.value,
    minDelay.value * 1000,
    maxDelay.value * 1000,
  )
    .then((result) => alert(result))
    .catch((error) => alert("Errore: " + error.message));
});
