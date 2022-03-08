//map
//does not return new array
//does not change size of original array
//uses values from original array when making new one

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
];

const ages = people.map(function (person) {
  console.log(person);
  return 'hello world';
});
console.log(ages);
