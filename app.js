//global scope vs local scope
//any variable outside code block {} is said to be in global scope
//can be access anywhere int the program
//Gotchas : name collisions, modify by mistake

let name = 'bobo';

function calculate() {
  const name = 'john';
  const age = 25;
  //code goes here
}
console.log(age);
calculate();

if (true) {
  const name = 'john';
}
console.log(`my name is ${name} and I'm awesome`);
