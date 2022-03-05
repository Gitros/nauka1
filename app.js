//global scope vs local scope
//any variable outside code block {} is said to be in global scope
//can be access anywhere int the program
//Gotchas : name collisions, modify by mistake

let name = 'bobo';
name = 'peter';

function calculate() {
  console.log(name);
  name = 'orange';
}
calculate();

if (true) {
  console.log(name);
  name = 'pants';
}
console.log(`my name is ${name} and I'm awesome`);
