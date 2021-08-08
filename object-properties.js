const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maanaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
];

const nameList = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    nameList.push(element.name);
}

const names = students.map(s => s.name);
const ids = students.map(s => s.id);

const bigger = students.filter(s => s.id > 40);
console.log(names);
console.log(ids);
console.log(bigger);