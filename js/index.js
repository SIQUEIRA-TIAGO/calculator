const input = document.getElementById("input");
const theme = document.getElementById("toggleTheme")
const allowedKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  " ",
];

function calculate() {
  const result = eval(input.value);
  input.value = result;
}
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

document.getElementById("del").addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
  input.focus();
});

document.getElementById("equal").addEventListener("click", function () {
  calculate();
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

theme.addEventListener("click", function(){
  document.body.classList.toggle("lightMode")
  document.body.classList.toggle("darkMode")
  document.getElementById("bodyCalc").classList.toggle("bodyL")
  document.getElementById("bodyCalc").classList.toggle("bodyD")
  document.getElementById("input").classList.toggle("inputL")
  document.getElementById("input").classList.toggle("inputD")
  document.getElementById("upper").classList.toggle("upperL")
  document.getElementById("upper").classList.toggle("upperD")
  document.getElementById("equal").classList.toggle("equalL")
  document.getElementById("equal").classList.toggle("equalD")
  document.querySelectorAll(".number").forEach(function(element){
    element.classList.toggle("numberL")
    element.classList.toggle("numberD")
  })
  document.querySelectorAll(".spec").forEach(function(element){
    element.classList.toggle("specL")
    element.classList.toggle("specD")
  })
})