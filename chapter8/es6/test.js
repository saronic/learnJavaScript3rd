'use strict';

let arr = [1,2,2,5,7,2,5,1,9];



function arrConcurrence(arr, target) {
	let start = 0;
	let result = [];

	while(arr.indexOf(target, start) !== -1) {
		let curIndex = arr.indexOf(target, start);
		result.push(curIndex);
		start = curIndex + 1;
	}

	return result;
}

console.log(arrConcurrence(arr, 5));

//