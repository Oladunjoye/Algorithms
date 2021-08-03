function kadanesAlgorithm(array) {
  // Write your code here.
	let maxEndingHere = array[0]
	let maxSoFar = array[0]
	
	for(let i =  1; i<  array.length; i++){
		let num = array[i]
		maxEndingHere = Math.max(num, num + maxEndingHere)
		maxSoFar = Math.max(maxEndingHere, maxSoFar)
	}
	
	return maxSoFar
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
