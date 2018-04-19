---
prev: /en/
next: false
sidebar: auto
---


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