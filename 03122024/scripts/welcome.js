alert("Welcome!");

const username = prompt("What is your name?");

if (username) {
  document.getElementById("name").innerHTML = "Welcome, " + username + "!";
} else {
  alert("Provide a name");
}

let i = 0;

while (i < 3) {
  alert("Numero: " + i);
  i++;
}

