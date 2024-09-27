const displayNumber = document.getElementById("display");

const appendToDisplay = (number) => {
  displayNumber.value += number;
};

const clearDisplay = () => {
  displayNumber.value = "";
};

const calculateResult = () => {
  try {
    if (displayNumber.value.includes("/0")) {
      displayNumber.value = "Division by zero is not allowed";
    } else {
      displayNumber.value = new Function("return " + displayNumber.value)();
    }
  } catch (error) {
    displayNumber.value = "Erreur";
  }
};
