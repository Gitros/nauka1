//variable lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  const result = num1 + num2 + globalNumber;
  return result;
}

console.log(add(3, 4));
