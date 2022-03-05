//global scope vs local scope
//any variable outside code block {} is said to be in global scope
//can be access anywhere int the program
//Gotchas : name collisions, modify by mistake

let name = 'bobo';

function calculate() {}
calculate();

if (true) {
}
console.log(`my name is ${name} and I'm awesome`);
