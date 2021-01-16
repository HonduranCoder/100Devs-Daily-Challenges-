//Daily Challenge 1
//	Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down.

function math(num1,num2){
  let total = num1/num2
  console.log (Math.floor(total))
  }
math(6,2)

function TwoDivide (num1,num2){
  console.log(Math.floor(num1/num2))
}

//Daily Challenge 2
// Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"

function wordsNums(word,num){
 const word = (`${word} ${word.length}`);
 let result = (word * num)
 if (result > 100)
   alert ('Winner')
}
wordsNums(fifty,100)

function multiWord(num,word){
  if(word.length * num > 100){
    alert('Winner')
  }
}
multiWord(50,'hello')
//Daily Challenge 3
//Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

let nums = [1,2,3,4,5]
let first = nums[0]
let last = nums[4]
let sum = first + last
console.log(sum)

function addValue(arr){
  console.log(arr[0] + arr[arr.length-1] )
}
addValue([1,2,3,4,5])
//Daily Challenge 4
//Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function.
var yourName = window.prompt("Enter your name: ");

let person = [yourName, name1, name2]
for (let i = 0; 1 < person.lenght; i ++){
  console.log (person[i])
}

let names=['bob', 'bobber', 'bobberson','bobby', 'bobbity']
function addNames(nameForList){
  namesList.push(nameForList)
  console.log(`You are ${namesList.length} on the list`)
}
addNames('bobby')

//Daily Challenge 5
//Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers.
function printOdd(num) {
  for (let i=1; i<num; i++) {
    if(i % 2 !== 0) {
      console.log(i);
    }
  }
}
array([1,2,3,4,5])

function onlyOdd(arr){
  let newArray = []
  for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0){
      newArray.push(arr[i])
    }
  }
  return newArray
}
onlyOdd([1,2,3,4,5])
//Daily Challenge 6
//Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2 evenly.
function numMulti(num){
  for(let i = 1; i <= num; i++){
    if((i * 3) % 2 !=== 0){
      console.log(i)
    }
  }
}
numMulti(100)
