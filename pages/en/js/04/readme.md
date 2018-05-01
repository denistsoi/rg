---
prev: /en/
next: false
sidebar: auto
---

## What we will do

* Rebuild banking.java => banking.js
* learn DOM APIs 
* learn about eventListeners
* introduction to objects

## Objects
### Data Types (Objects)

an object is a dictionary / hashtable

an object can store any standard data, including arrays and other objects

``` js
var myObj = {
    str: 'Hello',
    none: undefined,
    num: 54.3,
    bool: true
};

console.log(myObj["str"]);  // prints Hello
console.log(myObj["none"]); // prints undefined
console.log(myObj["num"]);  // prints 54.3
console.log(myObj["bool"]); // prints true
```

---
### when to use arrays over objects

arrays have natural orders (0,1,2...)  
objects have a key/name that you want to use as an index to store a collection of items  

---

### objects - extra

``` js
var fruit1 = {};

fruit1['name']  = 'Apple';
fruit1['qty']   = 2;
fruit1['value'] = 1;

fruit1.name === fruit1['name']  // 'Apple' 

// note: if there is a space in the key, 
//   dot-notation may not be appropriate
```


## Banking.java

Please review [banking.md](banking.md)

### Notes:

- we have a Banking Class
- it has these variables:

``` java
  static int account_number[] = new int[1000];
  static int account_pin[]=new int[1000];
  static int index=0,indexToCheck;
  static String account_name[]=new String[1000];
  static int account_balance[]=new int[1000];
  static int genAcctNum=1000,acc_number,pin,newpin;
```

- we have a main function that initiates a `while` loop
  - it takes 6 user input choices
    1. Create Account  
    2. Deposit Money  
    3. Withdraw money  
    4. Check balance  
    5. Change Pin  
    0. Quit  

1. we need to store account number + 
    * generate account number  
    * enter 4 digit pin
2. deposit money (verify pin)  
    * add balance  
3. withdraw money  
4. check balance  
5. change pin  

> store accounts as an object

``` js
// new Account(name, ****)
function Account (name, pin) {
  this.account = generateAccount();
  this.name = name;
  this.pin = encrypt(pin);
}

// stores bank
function Bank () {
  this.accounts = {};
}

Bank.prototype.createAccount = function () {

}

// runs app
// listens to button input
function App () {

}

// create a numpad for ATM - 
for (var i = 0; i < 10; i++) {
  // createElement...
}
```

## Iterating over an array

1. for loop (array.length);
2. forEach
3. map

### Array.forEach / Array.map

- find max and min within array

### Challenge 
> TODO:

---

## Data Types (Objects)

an object is a dictionary / hashtable

an object can store any standard data, including arrays and other objects
``` js
var myObj = {
    str: 'Hello',
    none: undefined,
    num: 54.3,
    bool: true
};

console.log(myObj["str"]);  // prints Hello
console.log(myObj["none"]); // prints undefined
console.log(myObj["num"]);  // prints 54.3
console.log(myObj["bool"]); // prints true
```

---
### When to use arrays over objects

Arrays have natural orders (0,1,2...).  
Objects have a key/name that you want to use as an index to store a collection of items.  

---

### Objects - extra

``` js
var fruit1 = {};

fruit1['name']  = 'Apple';
fruit1['qty']   = 2;
fruit1['value'] = 1;

fruit1.name === fruit1['name']  // 'Apple' 

// note: if there is a space in the key, 
//   dot-notation may not be appropriate
```

## Challenge

- [Assignment/Challenge](challenge.md)