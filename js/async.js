
const myLoader = () => {
    return new Promise((resolve, reject) =>{
        const success = Math.random()
    if(success <= 0.5){
resolve(success)
    }
    else{
        reject(success)
    }
})
}
myLoader()

/*
.then(data => console.log('Resolved data', data))
.catch(error => console.log('Rejected with value', error))


fetch('')
.then(response => response.json())
.catch(error => console.error(error))
*/