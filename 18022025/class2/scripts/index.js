const button = document.querySelector("#get");
const out = document.querySelector("#out");

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.random();

      if (result > 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data!"));
      }
    }, 2000);
  });
}

button.addEventListener("click", () => {
  out.textContent = "Fetching data...";

  fetchData()
    .then((data) => {
      out.textContent = data;
    })
    .catch((error) => {
      console.log("Errore:", error.message);
    });
});
