/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */


//setting vars to use in calculations
var fibonacci = [1,2];
var num1 = 1;
var num2 = 2;
var sum = 0;

//calculating the fibonacci sequence
while (sum < 4000000) {
  sum = num1 + num2;
  num1 = num2;
  num2 = sum;
  fibonacci.push(sum);
}

//var to store data calculated for final answer
var finalAnswer = 0;

//calculation to find sum of even-valued terms
for(i = 0; fibonacci[i] < 4000000; i++) {
  if(fibonacci[i] % 2 === 0){
    finalAnswer += fibonacci[i];
  }
}

//print answer
console.log(finalAnswer);
