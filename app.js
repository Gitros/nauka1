const wallHeight = 80;

function calculate(value) {
  console.log('The value in cm is : ' + value * 2.54 + ' cm');
  return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);
const dafs = calculate(wallHeight) + 10;
const dimensions = [width, height, dafs];

console.log(width);
console.log(dimensions);

function multiply(var1, var2) {
  return var1 * var2;
}

const var1 = multiply(100, 200);
console.log(var1);
