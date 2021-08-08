const numbers = [3, 4, 5, 7, 8, 12, 10, 18];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// function square(element) {
//     return element * element;
// }
// const square = element => element * element;

// const result = numbers.map(function(element) {
//     return element * element;
// });
// const result = numbers.map(x => x * x)
// console.log(result);

const result = numbers.filter(x => x > 5);

const isThere = numbers.find(x => x > 5);
// console.log(isThere);

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

map1.set('a', 97);

map1.delete('b');

const contacts = new Map();

contacts.set('Jessie', {phone: '01818-676146', address: 'Badurtola'});
contacts.has('Jessie');
contacts.set('Hillary', {phone: '01816-561955', address: 'Panchlaish'});


console.log(res);