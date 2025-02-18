function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("Questo alert appare dopo 3 secondi!"));
