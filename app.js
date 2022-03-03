let names = ['john', 'bobo', 'barry', 'olga', 'ben', 2, 3, 4];

// length

console.log(names.length);
console.log(names[names.length - 1]);

//concat

const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);
//reverse
console.log(allNames.reverse());

//unshift

allNames.unshift('susy');
allNames.unshift('anna');
console.log(allNames);

//shift
allNames.shift('susy');
allNames.shift('anna');
console.log(allNames);

//push
allNames.push('susy');
allNames.push('anna');
console.log(allNames);

//pop
allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);

//splice - mutates original array

const specificNames = allNames.splice(2, 1);

console.log(specificNames);
console.log(allNames);
