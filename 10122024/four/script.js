const list = document.getElementById("lista-elementi");

for (const item of list.children) {
  item.classList.add("evidenziato");
}
