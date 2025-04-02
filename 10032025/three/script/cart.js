const back = document.getElementById("back");
const total = document.getElementById("total");

const items = JSON.parse(localStorage.getItem("cart"));

for (const item of items) {
  const nameP = document.createElement("p");
  nameP.innerText = item.name;
  const priceP = document.createElement("p");
  priceP.innerText = item.price;

  const button = document.createElement("button");
  button.innerText = "Remove from cart";

  button.addEventListener("click", () => {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(items));
      window.location.reload();
    }
  });

  const div = document.createElement("div");
  div.appendChild(nameP);
  div.appendChild(priceP);
  div.appendChild(button);

  document.body.appendChild(div);
}

let totalPrice = 0;
for (const item of items) {
  totalPrice += item.price;
}
total.innerText = `Total: ${totalPrice}`;

back.addEventListener("click", () => {
  window.location.href = "index.html";
});
