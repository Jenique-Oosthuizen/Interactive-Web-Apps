const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;
let balance = null
// Only change below this line

if (hourOfDay !== null && minuteOfDay !== null && hourOfDay === 0 && minuteOfDay === 0) {
	const taxAsDecimal = parseFloat(tax) / 100
  const startingAfterTax = salary * (1 - taxAsDecimal)
	balance = startingAfterTax - transport - food - rent
	console.log(balance.toFixed(2))
}
	
//console.log(balance.toFixed(2))