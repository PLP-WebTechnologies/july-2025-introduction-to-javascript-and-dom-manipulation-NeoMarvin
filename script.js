// ================================
// Part 1: JavaScript Basics
// ================================
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult.";
  } else {
    document.getElementById("ageResult").textContent = "You are a minor.";
  }
});

// ================================
// Part 2: Functions
// ================================
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("totalResult").textContent = "Total = $" + total;
}

function formatString(text) {
  let formatted = text.toUpperCase();
  document.getElementById("stringResult").textContent = "Formatted: " + formatted;
}

// ================================
// Part 3: Loops
// ================================
document.getElementById("countdownBtn").addEventListener("click", function () {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear before restart
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

document.getElementById("listFruitsBtn").addEventListener("click", function () {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let list = document.getElementById("fruitsList");
  list.innerHTML = ""; // clear before restart

  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
});

// ================================
// Part 4: DOM Manipulation
// ================================
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("textElement").textContent = "The text has been changed!";
});

document.getElementById("toggleClassBtn").addEventListener("click", function () {
  document.getElementById("highlightElement").classList.toggle("highlight");
});

document.getElementById("createItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item Added!";
  document.getElementById("dynamicList").appendChild(newItem);
});
