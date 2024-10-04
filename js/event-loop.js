function a(){
    console.log('a')
    b()
    console.log('aa')


}
function b(){
    console.log('b')
    d()
    console.log('bb')


}
function c(){
    console.log('c')
    x()
    console.log('cc')


}
function d(){
    console.log('d')
    c()
    console.log('dd')


}


function x(){
    console.log('x')
    y()
    console.log('xx')


}
function y(){
    console.log('y')
    
    console.log('yy')


}

setTimeout(() =>{
    console.log('Set timeout')
}, 4000)


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(data))


a()

