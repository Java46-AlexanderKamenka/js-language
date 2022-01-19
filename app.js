
const arHw = [13, 28, 4, 15, 25, -10, 40, 17,27];
arHw.sort((a, b) => 
a % 2 == b % 2 ?
 (a - b) * (a % 2 ? -1 : 1)
 : a % 2 - b % 2);

console.log(arHw);

let matrix = [[1,2], [3,4], [5,6]];
function matrixTransp(matrix) {
let result = [];
result.push([])
result.push([])
for(let i = 0; i < matrix.length; i++)
{
	for(let j = 0; j < matrix[i].length; j++)
  {
    if (j==0)
    {
      result[0].push(matrix[i][j]);
    }
    else
    {
      result[1].push(matrix[i][j]);
    }
    
	}
}
console.log(result);
return result;
}

matrixTransp(matrix);





  


