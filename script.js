const counter = document.getElementById("value");
const button = document.getElementById("generate");

button.addEventListener("click", () => {
  counter.innerHTML = Math.floor(Math.random() * 100);
});
