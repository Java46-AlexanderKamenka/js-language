function encode(num, codingString)
{
  for (let i = 0; i < codingString.length; i++) 
  {
    for (let j = i + 1; j < codingString.length; j++) 
    {
       if (codingString[i] == codingString[j])
        {
          console.log("ERROR: String content repeated symbols!");
          break;
        }
      }
    }

    let res="";
     do {
       const digit = Math.trunc(num % codingString.length);            
       const symb = getSymbol(digit, codingString);
       res = symb + res;
       num = Math.trunc(num / codingString.length);

         } while(num >= 1);
         return res;
  }
    function getSymbol(digit, codingString) 
    {
      return "" + codingString[digit]; 
    }

  console.log(encode(11, "abcdefg"));

