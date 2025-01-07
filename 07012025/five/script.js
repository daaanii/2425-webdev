const item = document.getElementById("item");

let count = 10;

const interval = setInterval(() => {
    count -= 1;

    if (count == 0) {
        item.textContent = "Tempo esaurito!";
        clearInterval(interval);
    } else {
        item.textContent = count;
    }
}, 1000);
