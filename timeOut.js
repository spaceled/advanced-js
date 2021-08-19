function doSomething() {
    console.log(333333);
}
console.log(222222);
setTimeout(() =>{
    console.log('Lazy and Waiting.')
}, 4000);

setInterval(() => {
    console.log('doing it')
}, 1000);
console.log(4444444444);