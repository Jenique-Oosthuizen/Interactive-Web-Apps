const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const leo = `${leoName} + ${leoSurname} + \"Owed\" + \"R\" + ${(-1 * leoBalance).toFixed(2)}`
const sarah = `${sarahName} + ${sarahSurname} + \"Owed\" + \"R\" + ${(-1 * sarahBalance).toFixed(2)}`

const owed = parseFloat('R' + leoBalance + sarahBalance)
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result.trim())