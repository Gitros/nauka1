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
