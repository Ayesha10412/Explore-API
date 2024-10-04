
function checkAge(){
    const ageField = document.getElementById('age')
    const ageText =ageField.value
const errorTag = document.getElementById('error')
    try{

const age = parseInt(ageText)
if(isNaN(age)){

throw "Please enter a number"

}

else if(age<18){
    throw "Baccha kaccha not allowed"
}

else if(age> 30){
    throw "Senior not allowed"
}


else{
    console.log(age)

}
    }

    catch(err){
        console.log('Error:', err)
        errorTag.innerHTML = 'Something wrong ' + err

    }

    finally{
        console.log('All done inside try catch block')
    }
    console.log('11111')
}