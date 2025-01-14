const button = document.getElementById("button");

function generateColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener("click", () => {
  const newColor = generateColor();

  document.body.style.backgroundColor = newColor;
});
