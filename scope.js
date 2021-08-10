let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    // console.log(result);
    if (result > 9) {
        let mood = 'happy'
        console.log('Mood: ', mood);
    }
    console.log('Moooooooood', mood);
    return result;
}

const output = sum(3, 7);
// console.log('bonus', output);
console.log(output);