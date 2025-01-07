const selection = document.getElementById("selection");

selection.addEventListener("change", () => {
    document.body.style.backgroundColor = selection.value;
});
