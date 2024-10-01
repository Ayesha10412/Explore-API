/*
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(res => res.json())
    .then(data => displayLoadUsers2(data))


}

function displayLoadUsers2(data){
    const ul = document.getElementById('users-list')


    for(const user of data)
{
    console.log(user.name, user.email)
    const li = document.createElement('li')
    li.innerText= user.name
    ul.appendChild(li)
}
}
*/

function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> displayLoadUsers2(data))
}

function displayLoadUsers2(data){
    const ul = document.getElementById('users-list')
    for(const user of data){
        li = document.createElement('li')
        li.innerText = user.email
        ul.appendChild(li)
    }
}

