const name = 'Kuddus';

function add(num1, num2) {
    const result = num1 + num2;
    console.log('Name Inside: ', name)
    function double(num) {
        return num * 2;
    }
    const total = double(result);
    return total;
}

const sum = add(4, 5);
console.log(sum);
console.log('Result outside: ', name);
console.log('Outside Result: ', result)