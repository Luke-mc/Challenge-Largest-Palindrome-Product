/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  var arr = [];
  var factArr = [];
  var newArray = [];
// creating max
  for (var m = 0; m < digits; m++) {
   newArray.push(9);
  }
  var max = parseInt(newArray.join(''));


for(var i = max; i >= 0; i--){
  var result = i * max;
  result = result.toString();

  if( result[0] === result[3] && result[1] === result[2]){
   var fact = i.toString();
   factArr.push(fact);
   arr.push(result);
  }
}

factor_0 = Number(factArr[0]);
factor_1 = max;
palindromeNumber = Number(arr[0]);


console.log( factor_0);
console.log( factor_1);
console.log( palindromeNumber);


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};