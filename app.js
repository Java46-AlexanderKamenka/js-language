function myForEach(array, callbackFn){

	for(let i = 0; i < array.length; i++) {
	  let element = array[i];
  
	  callbackFn(element, i, array);
	}
  }

  function myMap(element, callbackFn) {
	let result = [];
  
	myForEach(array, function (element, i, array) {
	result.push(callbackFn(element, i, array)); });
  
	return result;
  }
//TEST FUNCTIONALITY
array = [1,2,3,4,5,6,7];
array2 =[];
myForEach(array,(element) => console.log(element));
array2 = myMap(array, (element) => element ** 2);
console.log(array2);