function myFilter(array, callbackFn){
 
let array_new = [];                         
	
for(let i=0; i<array.length; i++)
{
	let element = array[i];
	if(callbackFn(element, i, array) == true)        
	{
	array_new.push(array[i]);                 
	} 
}
	
	return array_new;                          
}

function myReduce(array, callbackFn, initialResult) {
	let i
	if (initialResult == null){
		initialResult = array[0];
		i=1;
	}
	else
	{
		i=0;
	}
	result = initialResult;
	                            
	for(i; i<array.length; i++)     
	{
		let element = array[i];
		callbackFn(initialResult, element, i, array)
		result = result + array[i];
	}
		  
		return result;                              
	}



   array = [0,1,2,3,4,5,6,7,8,9];
   console.log(myFilter(array, a=> a > 5));
   console.log(myReduce(array, (res, cur) => res + cur, 100));

//TODO write function getPersonsCity(persons, city) , taking array of the persons and a city (see the branch js-objects ) and returning array of the persons living in the given city. For example, find persons living in Rehovot
function createPerson(id, name, address) {
	return {id, name, address};
}
function createAddress(city, street) {
	//{city: city, street: street} <=> {city, street}
	return {city, street}
}
const persons = [
	createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
	createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
	createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
	createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]

function getPersonsCity(persons, your_city)
{
	let ar = []
	for(let i = 0; i < persons.length; i++)
	{
		if(persons[i].address.city == your_city)
		{
			ar.push(JSON.stringify(persons[i]));
		}
	}
    return ar;		
}
console.log(getPersonsCity(persons, "Rehovot"));

const persons2 = [
	createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
	createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
	createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
	createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]

function movePersonsNoCityAtBeginning(persons, your_city)
{
	let ar = []
	for(let i = 0; i < persons.length; i++)
	{
		if(persons[i].address.city != your_city)
		{
			ar.unshift(JSON.stringify(persons[i]));
		}
		else
		{
			ar.push(JSON.stringify(persons[i]));
		}
	}
    return ar;
}
console.log(movePersonsNoCityAtBeginning(persons2, "Rehovot"));


