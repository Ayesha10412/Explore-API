
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
// -----------------------------------------------------------------------------------------


// By using this it creates promise hell  but using async and await makes a code more readable, error handled, best promise return etc



// -----------------------------------------------------------------------------------------

 async function loadUserAsync(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await res.json()
console.log(data)
 }


// -----------------------------------------------------------------------------------------
   const loadUserArrow =async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await res.json()

console.log(data)
   }
// -----------------------------------------------------------------------------------------


const tryCatch= async() =>{
   
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
    
    }
catch(error){
    console.log('Error:', error)
}

}




