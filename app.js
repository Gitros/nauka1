//global scope vs local scope
//any variable outside code block {} is said to be in global scope
//can be access anywhere int the program
//Gotchas : name collisions, modify by mistake

let name = 'bobo';

function calculate() {
  const name = 'john';
  const age = 25;
  //code goes here
  becomesGlobal = 'global variable';
}
console.log(becomesGlobal);
// calculate();

if (true) {
  const name = 'john';
}

{
  const name = 'john';
  const special = 'special';
}
console.log(special);
console.log(`my name is ${name} and I'm awesome`);
