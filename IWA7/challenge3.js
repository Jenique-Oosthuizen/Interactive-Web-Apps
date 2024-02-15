const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const leoNewBalance = (-1 * leoBalance).toFixed(2)
const sarahNewBalance = (-1 * sarahBalance).toFixed(2)

const leo = `${leoName} + ${leoSurname.trim()} + \"Owed\" + \"R\" + ${leoNewBalance}`
const sarah = `${sarahName} + ${sarahSurname.trim()} + \"Owed\" + \"R\" + ${sarahNewBalance}`

const owed = parseFloat(leoNewBalance + sarahNewBalance)
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log('R' + result)