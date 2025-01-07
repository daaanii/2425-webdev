const list = document.getElementById("list");
const name = document.getElementById("name");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    const content = name.value;

    if (content.length == 0) {
        return;
    }

    const newItem = document.createElement("li");
    newItem.textContent = content;

    const newButton = document.createElement("input");
    newButton.type = "button";
    newButton.value = "Delete";

    newButton.addEventListener("click", () => {
        list.removeChild(newDiv);
    });

    const newDiv = document.createElement("div");
    newDiv.appendChild(newItem);
    newDiv.appendChild(newButton);

    list.appendChild(newDiv);

    name.value = "";
});
