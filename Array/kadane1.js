function kadanesAlgorithm(array) {
  // Write your code here.
	//array shouldnt be empty
	// [1,-5,4,5,1]
// 	[5,4,1]
	//[1,3, -7]
	if(array.length < 1) return null
	//total sum 17
	// cobdition 
	//if next num > running Sum restart count
	//track start track current
	let result
	let sum = 0
	let index = 0
	let sumArr = new Array(array.length)
	for(let val of array){
		sum+= val
		sumArr[index] = sum
	}
	
	let runningSum = 0
	result = sum
	for(let i = 0; i< array.length; i++){
		if((array[i] < 0 && Math.abs(array[i]) > runningSum) || sumArr[i] < 0){
			runningSum = 0
		}
		else{
			runningSum += array[i]
			
			if(runningSum > sum ){
				result = runningSum
			}
		}
	}
	
	
	return result
	
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
