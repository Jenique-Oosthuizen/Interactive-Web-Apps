//Array Object
//----------------------------------------------------------------------------//
const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}
// Only edit below
//variable
//----------------------------------------------------------------------------//
const {
	lists: [
		[, first],
		[, second],
		[, third],
	]
} = data

const result = []
//Extract the biggest number from the array
//----------------------------------------------------------------------------//
const extractBiggest = () => {
  const firstLast = first.at(-1)
	const secondLast = second.at(-1)
	const thirdLast = third.at(-1)

	if (firstLast > secondLast && firstLast > thirdLast) {
		first.pop()
		return firstLast
	}

	if (secondLast > thirdLast) {
		second.pop()
		return secondLast
	}
	
	third.pop()
	return thirdLast
}
// Only edit above
//Calling a function
//----------------------------------------------------------------------------//
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
//---------------------...ooo000 END OF FILE 000ooo...------------------------//