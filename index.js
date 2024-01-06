let count = 0;
let total;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let saveCount = count + " - ";
    saveEl.textContent = saveEl.textContent + saveCount;
    countEl.textContent = 0;
    count = 0;
}