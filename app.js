const countEl = document.getElementById("count");
const saveStr = document.getElementById("save-string");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  saveStr.textContent += ` ${count} -`;
  countEl.textContent = 0;
  count = 0;
}
