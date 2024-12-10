const container = document.getElementById("contenitore-liste");

for (let i = 1; i <= 10; i++) {
    const newP = document.createElement("p");
    newP.textContent = "Paragrafo " + i;

    const newUL = document.createElement("ul");

    for (let j = 1; j <= i; j++) {
        const newLI = document.createElement("li");
        newLI.textContent = "Item " + j;

        newUL.appendChild(newLI);
    }

    container.appendChild(newP);
    container.appendChild(newUL);
}