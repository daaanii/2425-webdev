const goto = document.getElementById("goto");

const PRODUCTS = [
  {
    name: "Item 1",
    price: 1
  },
  {
    name: "Item 2",
    price: 2
  },
  {
    name: "Item 3",
    price: 3
  },
  {
    name: "Item 4",
    price: 4
  },
  {
    name: "Item 5",
    price: 5
  }
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];

for (const item of PRODUCTS) {

  const button = document.createElement("button");
  button.innerText = "Add to cart";

  const nameP = document.createElement("p");
  nameP.innerText = item.name;

  const div = document.createElement("div");
  div.appendChild(nameP);
  div.appendChild(button);

  document.body.appendChild(div);

  button.addEventListener("click", () => {
    cart.push(item);
  });
}

goto.addEventListener("click", () => {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
});