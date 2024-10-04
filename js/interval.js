
console.log(1)
console.log(2)
// setTimeout( () => {
//     console.log(3)
// })

// ------------------

// setTimeout(() => {
//     console.log(3);
// }, 6000)

// --------------------


// setInterval(() => {
//     console.log('i m u')
// }, 2000)


console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log('Stop')
/*
let num=0
setInterval(() => {
    num= num+1;
    if(num> 6)
   
    console.log( num);
}, 2000)

*/

let num=0
const setIntervalId = setInterval(() =>{

num++;
console.log(num)

if(num==6){
    clearInterval(setIntervalId)
}
}, 5000)