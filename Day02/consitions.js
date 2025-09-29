// 📘 JavaScript Conditions Quiz
// Part 1: Multiple Choice (10 Questions)

// 1. Which keyword is used to test a condition in JavaScript?
// a) for
// b) if
// c) else
// d) switch
// Answer:b

// 2. What will be the output?
// let x = 10;
// if (x > 5) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
// a) Yes
// b) No
// c) Error
// d) Undefined

// Answer:a

// 3. Which of the following is NOT a conditional statement?
// a) if
// b) else if
// c) switch
// d) foreach

// Answer:d

// 4. What is the result of this code?
// let age = 18;
// if (age = 21) {
//   console.log("Adult");
// } else {
//   console.log("Teen");
// }
// a) Adult
// b) Teen
// c) Error
// d) Nothing

// Answer:a

// 5. Which operator is commonly used in ternary conditions?
// a) :
// b) ?
// c) =
// d) &&

// Answer:b

// 6. What will be the output?
let num = 0;
if (num) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
// a) Truthy
// b) Falsy
// c) Error
// d) 0

// Answer:c

// 7. Which statement runs only if no condition is true?
// a) if
// b) else
// c) else if
// d) switch

// Answer:b

// 8. In a switch statement, which keyword ends a case?
// a) exit
// b) end
// c) break
// d) stop

// Answer:c

// 9. What will this print?
let color = "red";
switch(color) {
  case "blue": console.log("Blue");
  case "red": console.log("Red");
  default: console.log("Other");
}
// a) Blue
// b) Red
// c) Red and Other
// d) Error

// Answer:c

// 10. Which value is considered falsy in JavaScript?
// a) "false"
// b) []
// c) null
// d) "0"

// Answer:c

// Part 2: True / False (5 Questions)

// 11. The else block executes only if all previous conditions are false.
// Answer:true

// 12. You can use switch with both numbers and strings.
// Answer:true

// 13. if (x = 5) checks whether x equals 5.
// Answer:false

// 14. null and undefined are both falsy values.
// Answer:true

// 15. The ternary operator can replace simple if-else statements.
// Answer:true



// Part 3: Coding (5 Questions)

// 16. Write an if-else statement that checks if a number n is even or odd.
let n=3
if(n%2===0){
    console.log("even")
}
else{
    console.log("odd")
}

// 17. Write a program using switch to print the day of the week for numbers 1–7.
let days=7
switch (days){
  case 1:
    console.log("its saturday")
    break;
  case 2:
    console.log("its sunday")
    break;
  case 3:
    console.log("its monday")
    break;
  case 4:
    console.log("its tuesday")
    break;
  case 5:
    console.log("its wednesday")
    break;
  case 6:
    console.log("its thursday")
    break;
  case 7:
    console.log("its friday")
    break;
}

// 18. Use the ternary operator to check if a person’s age (stored in age) is 18 or older. Print "Adult" or "Minor".
let ages=18
let resultage =ages<18 ? 'minor' : "adult"
console.log(resultage)

// 19. Write a code that prints "Positive", "Negative", or "Zero" based on the value of x.
let x=0
if (x>0){
  console.log("positive")
}
else if(x<0){
  console.log("negative")
}
else{
  console.log("its zero")
}

// 20. Check if a variable username exists and is not empty. If true, print "Welcome, username!". Otherwise, print "Please log in.".
let username="fathi"
if(username===""){
  console.log("Please log in.")
}
else{
  console.log(`welcome ${username}!`)
}