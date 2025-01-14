const item = document.getElementById("item");

document.addEventListener("keydown", (event) => {
  item.textContent = event.key;
});
