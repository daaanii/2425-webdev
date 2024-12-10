const list = document.getElementById("lista");

for (let i = 1; i <= 3; i++) {
    const newElement = document.createElement("li");
    newElement.textContent = "Item " + i;
    list.appendChild(newElement);
}