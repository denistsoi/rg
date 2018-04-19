

### things we have covered:

- math!
- alert/prompts
- variables
- booleans

---

things we should cover in the next 5 weeks:

- developer tools (inspector)
- control flow (if else / switch)
- loops / functions
- data types (arrays / objects)
- jQuery?
- DOM manipulation / events

---

# what we will cover this week

- developer tools (inspector)
- functions
- control flow (if else / switch)
- Math.random / Math.ceil

---

## developer tools
`CMD + OPT + I`

---

## functions

### functions
```
function functionName(arg1) {
  // body of function
  // some code
}
```

* keyword _function_
* function name: functionName
* inputs: arg1
* body of function

---

### example
```
function functionName(arg1) {
  // body of function
  return returnValue
}
```

* keyword _function_
* function name: functionName
* inputs: arg1
* body of function
* return value: returnValue

---

### real world example

```
function addNumber(number1, number2) {
  return number1 + number2;
}
```
---

### function expression vs function declaration

```
foo() // foo isn't loaded
var foo = function() { return 1 }
```

```
foo() // declarations are loaded before any code is run
function foo () { return 1 }
```
---
Why? - `Hoisting`

`Javascript only hoists declarations, not initialisations`

```
console.log(num); // Returns undefined
var num;
num = 6
```

```
num = 6;
console.log(num); // returns 6
var num;
```

### to correct
```
var foo = function() { return 1 }
foo() // returns 1
```
---
### anonymous function

```
var addNumber = function(number1, number2) {
  return number1 + number2;
}
```

We are missing the `function addNumber`... why?  
An anonymous function `function (input) {}` is a shortcut to write functions  

---

## if conditional

```
if (age > 18) {
  console.log("You are an adult")
}
```

if age is greater than 18,   
then console.log('you are an adult');


---

```
if (conditional) {
  // some code
}
```

```
if (condition is true) {
  // Do cool stuff
} else {
  // Do other cool stuff
}
```
---

### conditional extended
```
var topic = "JS";
if (topic == "JS") {
  console.log("You're learning JavaScript");
} else if (topic == "JavaScript") {
  console.log("You're still learning JavaScript");
} else {
  console.log("You're learning something else");
}
```
---
## multiple conditions

```
if (name == "refugeek" && skill == "awesome") {
  // of course I am!
}
```

`&&` AND  
`||` OR

---

## Math.random / Math.ceil

---

### Math.random
```
Math.random() // pick a number from 0 to 1 (decimal)
```

---

### Math.ceil
```
Math.ceil(number) // round number to upper whole number
Math.ceil(0.8) // returns 1
```
---

### Math.floor
```
Math.floor(number)  // round number to lower whole number
Math.floor(0.8) // returns 0
```
---

## tasks:
- rock paper scissors assignment/homework
