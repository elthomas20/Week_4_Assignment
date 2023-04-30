// Name and Assignment
console.log ("Erin Thomas - Week 4 Assignment");
// Question #1
console.log ("Question 1:");
//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.  
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(18);
/*1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed! */
let dif = ages[0] - ages[ages.length - 1];
console.log("The difference between the first and last element in the array is " + dif);
//1c.	Use a loop to iterate through the array and calculate the average age. 
/* Steps for finding the average of the numbers in the array:
* I need to add all the numbers in the array together.
* Then I need to take the sum and divide it by the total amount of numbers in the array (array.length)
* Lastly, I need to console.log that number. 
*/
let sum = 0;

  for (let i = 0; i < ages.length; i++){
    sum += ages[i]; //sum = sum + ages[i]
  } 
console.log ("The average of the numbers in the array is " + sum/ages.length);

// Question #2
console.log ("Question 2:");
//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let avgLet = 0;

for (let i = 0; i < names.length; i++){
avgLet += names[i].length;
}

console.log("Average letters for each name in the names array is " + avgLet/names.length);

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let conNames = names[0];

for (let i = 1; i < names.length; i++){
conNames = conNames.concat(" ", names[i])
}
console.log("The concatenated names are:", conNames);

//3.	How do you access the last element of any array?
console.log("Question 3:");
console.log('You access the last element of an array by typing "let last = arr[arr.length - 1];"');

//4.	How do you access the first element of any array?
console.log("Question 4:");
console.log('You access the first element of an array by typing "let first = arr[0];"');

/* 
5.	Create a new array called nameLengths. Write a loop to iterate over the previously created 
names array and add the length of each name to the nameLengths array.
For example:
let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
let nameLengths = [5, 3, 4]; 			//create this new array
*/
console.log("Question 5:");

let nameLengths = []; //This is empty because I will push the content into it in the next step. 
  for (let i = 0; i < names.length; i++){
     nameLengths[i] = names[i].length;
  } 
console.log (nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log("Question 6:");
let sumOfElem = 0;

for(let i = 0; i < nameLengths.length; i++){
  sumOfElem += nameLengths[i];
}

console.log("The sum of all elements in the nameLengths array is:", sumOfElem);

/*7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
to itself n number of times. 
(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/
console.log("Question 7:");

function conWord (word, n){
  let con = word
  for (let i = 1; i <= n; i++){
    con = con.concat(word)
  } return con;
}
console.log ("When Jake Peralta gets nervous he says:", conWord("Cool", 5)) //insert gif of panicking Jake Peralta :)


/* 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  
The full name should be the first and the last name separated by a space. */
console.log("Question 8:");

function fullName(firstName, lastName){ 
  return firstName.concat(" ", lastName);
}

console.log("The finest detective in the Nine Nine is", fullName("Jake", "Peralta") + "!");

/* 9.	Write a function that takes an array of numbers
and returns true if the sum of all the numbers in the array is greater than 100.*/
console.log("Question 9:");

let arrOfNum = [3, 70, 24, 18];

function isSumGreaterThan100(){
for (let i = 0; i < arrOfNum.length; i++){ 
  sum += arrOfNum[i];
} if(sum > 100) {
return true;
} else {
return false;
}
}

console.log("Is the sum of the array of numbers greater than 100: " + isSumGreaterThan100(arrOfNum));

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("Question 10:");

function average(arrOfNum){
  sum = 0;
for(let i = 0; i < arrOfNum.length; i++){
sum += arrOfNum[i];
}
return (sum/arrOfNum.length);
}
 console.log("The average of all the elements in the array of numbers is ", + average(arrOfNum));

/* 11.	Write a function that takes two arrays of numbers and returns true if the 
average of the elements in the first array is greater than the average of the elements in the second array.*/
console.log("Question 11:");

 let arr1 = [1, 2, 3, 4];
 let arr2 = [5, 6, 7, 8];

function compareAvg(arr1, arr2){
if(average(arr1) > average(arr2)){ 
  return true;
} else {
return false;
}
}

console.log ("The average for Array 1 is greater than the average for Array 2:" + " " + compareAvg (arr1, arr2));


/* 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
console.log("Question 12:");

let hotOutside = true;
let moneyInthePocket = 19.25;

function willBuyDrink(isHotOutside, moneyInPocket){
if((isHotOutside) && (moneyInPocket > 10.50)){
  return true;
} else {
return false;
}
}

console.log("I should buy a nice cold Pepsi: ", willBuyDrink(hotOutside, moneyInthePocket));


// 13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
console.log("Question 13:");


let isSummer = true;
let moneyInSavings = 5000;

function willGoOnVacay(isSummer, moneyInSavings){
if((isSummer) && (moneyInSavings > 600)){
  return true;
} else {
return false;
}
}

console.log("This teacher is off for the summer and has money to go on a vacation:", willGoOnVacay(isSummer, moneyInSavings));
/*I have created a simple function. As a teacher, it must be summer for me to go on vacation and I also need to have at least $600 
to have a good time. Therefore, I made a function to determine if I had sufficient enough funds in my savings to go on the vacation. 
Answer: True. Yay! Vacation time!!!*/