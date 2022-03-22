// JSON.stringify(), JSON.parse()

const friends = ['john', 'peter', 'bob'];

localStorage.setItem('friends', friends);

const values = localStorage.getItem('friends');
console.log(values[0]);
