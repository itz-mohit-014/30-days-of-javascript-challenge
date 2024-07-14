# Day 2: Operators 

!['Task Screen Shot'](operators.png)

### FEATURE 1: >> Arithmetic Operation Script

```
console.log('The Addition of 5 and 6 is: ', 5 + 6);
console.log('The Subtraction of 25 and 6 is: ', 25 - 6);
console.log('The Division of 35 and 5 is: ', 35 + 5);
console.log('The Multiplication of 3 and 4 is: ', 3 * 4);
console.log('The Reminder of 5 and 2 is: ', 5 % 2);
```

<details>
<summary>Output</summary>
<br>
The Addition of 5 and 6 is: 11 <br>
The Subtraction of 25 and 6 is: 19 <br>
The Division of 35 and 5 is: 7 <br>
The Multiplication of 3 and 4 is: 12 <br>
The Reminder of 5 and 3 is: 2  
</details>

### FEATURE 2: >> Comparison and Logical Operator script

```
Comparision Operators...
console.log(2 > 3)
console.log(5 < 6)
console.log(2 >= 2)
console.log(8 <= 3)

Logical Opearator
console.log([] && {})
console.log("" || " ")
console.log(!0)

```
<details>
<summary>Output</summary>
<br>
false <br>
true <br>
true  <br>
false <br>
{} <br>
" " <br>
true <br>
 
</details>

### FEATURE 3: >> Ternary Operator script

```

const isPositiveNumver = (num) => {
    (num > 0) 
    ? console.log(`${num} is a Positive number`) 
    : console.log(`${num} is a Negative number`) 
}
isPositiveNumver(10) 

```
<details>
<summary>Output</summary>
<br>
10 is a Positive number 
</details>

## Note:-

In Logical Operators:-
- **&&** (AND logical Operator) check both value if both are true then return last truthy value else return first falsy value.

- **||** (OR logical Operator) check Any one value if any one is true then return first truthy value else return last falsy value. 

Ternary Operators:-
- Take condition in the left side and check if the condition is true then run code after **?** else run code aflter **:**