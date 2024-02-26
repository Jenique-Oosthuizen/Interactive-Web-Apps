/* variables */
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let customers = '1'
let location = 'RSA'
let currency = null
let shipping = null

/* Determine shipping cost and currency based on location */
if (location === 'RSA') { 
	shipping = 400 && currency === 'R'
} else if (location === 'NAM') { 
	shipping = 600 && currency === '$'
} else if (location === 'NK') {
	console.log(BANNED_WARNING)
} else ( shipping === 800 && currency === '$' )

/* Items and their prices */
	const shoes = 300 * 1
	const toys = 100 * 5
	const shirts = 150 * 'NONE_SELECTED'
	const batteries = 35 * 2
	const pens = 5 * 'NONE_SELECTED' 
	
const totalCost = shoes + toys + shirts + batteries + pens

/* Check if free shipping applies and there's only one customer */
if ((totalCost >= 1000) && (location === 'NAM' || Location === 'RSA')) {
	if (customers !== 1) {
			console.log(FREE_WARNING)
		} else (shipping = 0)
	}
/* Display the total price */
location = 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, totalCost + shipping)

