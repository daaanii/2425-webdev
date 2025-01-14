const container = document.getElementById("contenitore-tabella-mult");

const newTable = document.createElement("table");

for (let x = 1; x <= 10; x++) {
  const newRow = document.createElement("tr");

  for (let y = 1; y <= 10; y++) {
    const newCell = document.createElement("td");
    newCell.textContent = x * y;
    newRow.appendChild(newCell);
  }

  newTable.appendChild(newRow);
}

container.appendChild(newTable);
