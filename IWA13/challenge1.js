let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below
//Converting let calculated into a number
//----------------------------------------------------------------------------//
const logCalc = () => { 
    const isString = typeof calculated === 'string' 
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated
    calculated = calculatedAsNumber + 1
}
//Test if calculated is > then 2 or 3
//----------------------------------------------------------------------------//
const calcUser = () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
  
}
//Check how many times user was used
//----------------------------------------------------------------------------//
const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
//---------------------...ooo000 END OF FILE 000ooo...------------------------//