/*      #HW task 1      */
function getRandomNumber(min, max) {
    if(min>max)
    {
        max = [min,min = max][0];
        //console.log(`max=${max}, min=${min}`);
    }

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(10,1));
/*      #HW task 2      */
function concatinate(prefix) {
      
    return function(prefix2)
    {
       // console.log(prefix);
       // console.log(prefix2);
        return prefix2 = prefix.concat(prefix2);
    }     
}
const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage); 

//there should be displayed out App - Test status: Done
