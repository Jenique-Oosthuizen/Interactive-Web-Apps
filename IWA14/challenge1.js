//Variables
//----------------------------------------------------------------------------//
const firstName = 'John'
const age = 35
const hobby = 'Coding'

//----------------------------------------------------------------------------//
const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

//----------------------------------------------------------------------------//
function favouritehobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

favouritehobby()
//---------------------...ooo000 END OF FILE 000ooo...------------------------//