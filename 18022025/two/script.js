function calcolaFattoriale(n) {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(
        new Error("Impossibile calcolare il fattoriale di un numero negativo!"),
      );
    } else if (n === 0) {
      resolve(1);
    } else {
      calcolaFattoriale(n - 1).then((result) => {
        resolve(n * result);
      });
    }
  });
}

calcolaFattoriale(5).then((result) => alert(result));

calcolaFattoriale(-1)
  .then((result) => alert(result))
  .catch((error) => alert("Errore: " + error.message));
