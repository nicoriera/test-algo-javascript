const elementBinaryResult = document.getElementById("binaryResult");
const inputDecimalNumber = document.getElementById("decimalInput");

const convertToBinary = (number) => {
  if (number === 0) {
    elementBinaryResult.innerHTML = "0";
    return;
  }

  let binaryNumber = "";
  while (number > 0) {
    binaryNumber = (number % 2) + binaryNumber;
    number = Math.floor(number / 2);
  }
  elementBinaryResult.innerHTML = binaryNumber;
};

const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", () => {
  const inputValue = inputDecimalNumber.value.trim();
  const numberToConvert = Number(inputValue);

  if (isNaN(numberToConvert) || !Number.isInteger(numberToConvert)) {
    elementBinaryResult.innerHTML = "";
  } else {
    convertToBinary(numberToConvert);
  }
});
