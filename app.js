const person = {
  name: 'john',
  lastName: 'peters',
  age: 40,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting: function () {
    console.log('hello my name is john');
  },
};
const age = person.age;
console.log(age);
person.name = 'bob';

console.log(person.name);
console.log(person.siblings[2]);
console.log(person.married);
person.greeting();
