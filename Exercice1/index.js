const pairNumbers = (min, max) => {
  const pairNumbers = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      pairNumbers.push(i);
    }
  }
  return pairNumbers.join(",");
};

console.log(pairNumbers(1, 10)); // "2,4,6,8,10"

export default pairNumbers;
