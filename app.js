function greetMorning(name) {
  const myName = 'john';
  console.log(`Good morning ${name}, my name is ${myName}`);
}
function greetAfternoon(name) {
  const myName = 'john';
  console.log(`Good afternoon ${name}, my name is ${myName}`);
}

greetMorning('bobo');
greetAfternoon('peter');

//callback functions higher order functions functions as first class objects/ citizens

//function are first class objects - stored in a variable passed as an argument to another function return form the function

//higher order function - accepts another function as an argument or returns another function as a result

// callback function - passed to a another function as an an argomuent and executed inside that function
