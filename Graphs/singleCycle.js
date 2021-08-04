function hasSingleCycle(array) {
  // Write your code here.
	
	let len = array.length
	let result = new Array(len).fill(false)
	
	for(let i= 0; i < array.length; i++){
		let target = getIndex(array[i], i)
		
		
		result[target] = true
	}
	
	
	function getIndex(value, index){
		
		let rem = value % len
		let target = rem + index	
	
		if(target < 0){
			target = target + len 
		}
		
		return target% len
	}
	const checkTruth = (val) => val === true
 console.log(result)
	
	let status =  result.every(checkTruth)
	
	return status
	
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
