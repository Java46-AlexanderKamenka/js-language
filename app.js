/*******************************************HW #16 definition task1 */
function Deferred() {
	this.callbacks = []	
  }
  Deferred.prototype.then = function(callback) { 
	this.callbacks.push(callback)
  }

  Deferred.prototype.resolve = function(value) {
	let functions = this.callbacks.shift() 
	if (functions != undefined) {

	  let returns = functions(value)

	  if (returns instanceof Deferred){

	  returns.then(function(value) {
		  this.resolve(value)
		})
	  }

	  else this.resolve(returns)
	}
  }
  
const d = new Deferred()
d.then(function(res){ console.log('1 ', res); return 'a'; });

d.then(function(res){ console.log('2 ', res); return 'b'; });


d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');

/*******************************************HW #16 definition task2 */

function MyArray(param) {
	this.array = [];
	this.param = param;
	
	MyArray.prototype.set = function (index, value) 
	{
		this.array[index] = value;
	}
	MyArray.prototype.get = function (index) {
		if (this.array[index] == undefined)
		{
			
			this.array[index] = this.param;
			return this.array[index];
		}	 
		else
		return this.array[index];
	}
	MyArray.prototype.SetValue = function (value) {
		
		this.param = value;
	}
}
const myArray = new MyArray(10);
console.log(myArray.get(3727840));
myArray.set(100,100);
console.log(myArray.get(100));
myArray.SetValue(999);
console.log(myArray.get(87536));


