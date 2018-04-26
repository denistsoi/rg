---
prev: /en/
next: false
sidebar: auto
---

# lesson 3

## What we will do

* Rebuild banking.java => banking.js
* learn DOM APIs for the browser to build the frontend.
* learn about eventListeners

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


## Event Listeners:

- Add Event Listener
- Remove Event Listener

``` js
ele.addEventListener(evt, listener, [options]);
```

`ele` – The HTML element the event listener will be listening for.  
`evt` – The targeted event.  
`listener` – Typically, a JavaScript function.  
`options` – (optional) An object with a set of boolean properties (listed below).  


### Bark Example

``` js
var dog = document.createElement('button');
dog.innerHTML = 'bark?'

dog.addEventListener('click', function bark (event) {
  // code here
  console.log(event.target);
}, false);  

// append dog to body
document.body.appendChild(dog);
```
::: tip Extra Reading
- [When to use buttons](https://css-tricks.com/use-button-element/)
:::

### onclick function

``` js
var dog = document.createElement('button');
dog.innerHTML = 'bark?'

dog.onclick = function bark (event) {
  // code here
  console.log(event.target);
}, false);  

```

> view [bark](./bark.html)

### Event Delegate

> view [list](./list.html)