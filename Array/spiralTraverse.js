function spiralTraverse(array) {
  // Write your code here.
	//defining boundar.
	//four loops for each boundary
	//update boundary
	// push into result arr
	
	let result = []
	let size = array.length * array[0].length
	let top =  0
	let bottom = array.length - 1
	let left = 0
	let right = array[0].length  - 1
	let resultSize =  result.length
	
	if(array.length < 1) return null
	
	while (result.length < size ){
		//handle top row
		for(let i = left; i <= right && result.length < size; i++ ){
			result.push(array[top][i])
		}
		top++
		
		//handle right boundary
			for(let i = top; i<= bottom && result.length < size; i++ ){
			result.push(array[i][right])
		}
		right--
		
			for(let i = right; i>= left && result.length < size; i-- ){
			result.push(array[bottom][i])
		}
		bottom--
		
			for(let i = bottom; i>= top && result.length < size; i-- ){
			result.push(array[i][left])
		}
		left++
	}
	console.log(result)
	return result
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
