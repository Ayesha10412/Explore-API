const hello = localStorage.getItem('hello')
console.log(hello)

const setAge =() =>{
    let age={}
  const value=  localStorage.getItem('age')
  if(value){
    age= JSON.parse(value)

  }
  return age;
}
