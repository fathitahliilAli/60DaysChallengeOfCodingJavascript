// 📘 JavaScript Loops Quiz (20 Questions)
// Part 1: Easy (Basics of Loops)

// Which loop guarantees that the code inside will run at least once, even if the condition is false?
// a) for
// b) while
// c) do...while
// d) for...of

// What will this code output?

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }


// a) 0 1 2
// b) 1 2 3
// c) 0 1 2 3
// d) Nothing

// In a for loop, which part executes only once?
// a) Initialization
// b) Condition
// c) Increment
// d) Body

// Which loop is best when the number of iterations is unknown but depends on a condition?
// a) for
// b) while
// c) for...of
// d) for...in

// What will this code log?

// let count = 0;
// while (count < 2) {
//   console.log("Hello");
//   count++;
// }


// a) "Hello"
// b) "Hello Hello"
// c) Infinite loop
// d) Nothing

// Part 2: Intermediate (Different Loops)

// What will this code output?

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 2);


// a) 0
// b) 0 1
// c) 0 1 2
// d) Nothing

// Which loop is used to iterate over object properties?
// a) for
// b) for...in
// c) for...of
// d) while

// Which loop is used to iterate over arrays, strings, Sets, Maps?
// a) for...in
// b) for...of
// c) while
// d) do...while

// What will this code log?

// const colors = ["red", "green"];
// for (let color of colors) {
//   console.log(color);
// }


// a) "red green"
// b) "0 1"
// c) "red" "green"
// d) Nothing

// What will this code log?

// const person = { name: "Alice", age: 25 };
// for (let key in person) {
//   console.log(key);
// }


// a) name age
// b) Alice 25
// c) 0 1
// d) Error

// Part 3: Break & Continue

// What will this log?

// for (let i = 0; i < 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }


// a) 0 1 2
// b) 0 1 2 3 4
// c) 3 4
// d) Nothing

// What will this log?

// for (let i = 0; i < 5; i++) {
//   if (i === 2) continue;
//   console.log(i);
// }


// a) 0 1 2 3 4
// b) 0 1 3 4
// c) 2
// d) Nothing

// Which statement exits the loop entirely?
// a) stop
// b) break
// c) continue
// d) exit

// Which statement skips just the current iteration?
// a) stop
// b) break
// c) continue
// d) exit

// Part 4: Advanced

// What will this code output?

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }


// a) 1 2 3 4 5
// b) 1 3 5
// c) 2 4
// d) Nothing

// What will this code log?

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log(i, j);
//   }
// }


// a) 0 0, 0 1, 1 0, 1 1, 2 0, 2 1
// b) 0 1, 1 2, 2 3
// c) 0 0, 1 1, 2 2
// d) Nothing

// Which of the following creates an infinite loop?
// a) for (let i = 0; i < 5; i++) {}
// b) while (true) {}
// c) do { } while (false);
// d) for (let i = 0; i > 10; i++) {}

// What will this log?

// let str = "JS";
// for (let ch of str) {
//   console.log(ch);
// }


// a) J
// b) J S
// c) JS
// d) Nothing

// Which loop is MOST commonly used for iterating over an array when you need both index and value?
// a) for
// b) for...in
// c) for...of
// d) while

// What will this log?

// let arr = [10, 20, 30];
// for (let index in arr) {
//   console.log(index);
// }


// a) 10 20 30
// b) 0 1 2
// c) undefined
// d) Nothing