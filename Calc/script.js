const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");

let currentInput = "";

// Update display function
const updateDisplay = (value) => {
  display.textContent = value || "0";
};

//event listener for buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (!value) return;
    
    currentInput += value;
    updateDisplay(currentInput);
  });
});

// Reset
clearButton.addEventListener("click", () => {
  currentInput = "";
  updateDisplay("0");
});

//calculation
equalButton.addEventListener("click", () => {
  try {
    const result = eval(currentInput);
    updateDisplay(result);
    currentInput = result.toString();
  } catch (error) {
    updateDisplay("Error");
    currentInput = "";
  }
});
