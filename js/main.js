//Daily Challenge 1
//	Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down.

function math(num1,num2){
  let total = num1/num2
  console.log (Math.floor(total))
  }
math(6,2)

//Daily Challenge 2
// Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"

function wordsNums(word,num){
 const word = (`${word} ${word.length}`);
 let result = (word * num)
 if (result > 100)
   alert ('Winner')
}
wordsNums(fifty,100)

//Daily Challenge 3
//Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

let nums = [1,2,3,4,5]
let first = nums[0]
let last = nums[4]
let sum = first + last
console.log(sum)
