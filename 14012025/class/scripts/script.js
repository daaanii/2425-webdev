const form = document.getElementById("form");
const username = document.querySelector("#username");
const error = document.getElementById("error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = username.value;

  let isValid = true;

  if (value.length < 3 || value.length > 20) {
    isValid = false;
  }

  for (const char of value) {
    if (!((char >= "A" && char <= "Z") || (char >= "a" && char <= "z"))) {
      isValid = false;
      break;
    }
  }

  if (!isValid) {
    //alert("Invalid username");

    username.focus();
    username.value = "";

    error.style.display = "block";
  } else {
    sessionStorage.setItem("username", value);
    //alert("Session started");

    error.style.display = "none";

    window.location.href = "success.html";
  }
});
