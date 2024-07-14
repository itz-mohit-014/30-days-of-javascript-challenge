// ********* DAY 2: Operators  ********** //

//              ******  Activity 1: Arithmetic Operators  ******

// TASK 1: Program to ADD two number.
const addTwoNumbers = (num1,num2) => {
    return num1 + num2;
}
console.log(`The addition of 5 and 6 is: ${addTwoNumbers(5, 6)}`) // OUTPUT -> The addition of 5 and 6 is: 11

// TASK 2: Program to SUBTRACT two number.
const subtractTwoNumbers = (num1,num2) => {
    return num1 - num2;
}
console.log(`The subtraction of 15 and 6 is: ${subtractTwoNumbers(15, 6)}`) // OUTPUT -> The subtraction of 15 and 6 is: 9

// TASK 3: Program to DIVIDE two number.
const divideTwoNumbers = (num1,num2) => {
    return num1 / num2;
}
console.log(`The division of 25 and 4 is: ${divideTwoNumbers(25, 4)}`) // OUTPUT -> The division of 25 and 4 is: 6.25

// TASK 4: Program to MULTIPLY two number.
const multiplyTwoNumbers = (num1,num2) => {
    return num1 * num2;
}
console.log(`The multiplication of 3 and 4 is: ${multiplyTwoNumbers(3, 4)}`) // OUTPUT -> The multiplication of 3 and 4 is: 12

// TASK 5: Program to FIND REMINDER OF two number.
const findReminder = (num1,num2) => {
    return num1 % num2;
}
console.log(` The reminder of 5 and 2 is: ${findReminder(5, 2)}`) // OUTPUT ->  The reminder of 5 and 2 is: 1

        
        //                ****** Activity 2: Assignment Operators  ******
        
// TASK 6: use of += >> 
let increment = 100;
increment += 200;
console.log(increment); // OUTPUT -> 300

// TASK 7: use of -= >> 
let decrement = 5;
decrement -= 2;
console.log(decrement) // OUTPUT -> 3

        
        //                ***** Activity 3: Comparison Operators  ******
        
// TASK 8: Program to compare two numbers using '>' and '<'       
const isGreateror = (fistNum, secondNum) => {
    if(fistNum > secondNum){
        console.log(fistNum, "is greater then", secondNum)
    }else if(fistNum < secondNum){
        console.log(fistNum, "is less then", secondNum)  
    }else{
        console.log(fistNum, "and", secondNum, "are equal numbers.")
    }

}
isGreateror(8,10); // OUTPUT -> 8 is less then 10

// TASK 9: Program to compare two numbers using '>=' and '<=' 

const isLessthenOrEqual = (fistNum, secondNum) => {
    if(fistNum >= secondNum){
        console.log(fistNum, "is greater then or equal to", secondNum)
    }else if(fistNum <= secondNum){
        console.log(fistNum, "is less then or equal to", secondNum)  
    }

}
isLessthenOrEqual(24, 98); // OUTPUT -> 24 is less then or equal to 98

// TASK 10: Program to compare two numbers using '==' and '==='  

const isStricklyEqual = (fistNum, secondNum) => {
    if(fistNum === secondNum){
        console.log(fistNum, 'and', secondNum, "are Strickly equal", secondNum)
    }else if(fistNum == secondNum){
        console.log(fistNum, 'and', secondNum,'are equal in value but not are same type')  
    }

}
isStricklyEqual(8, '8'); // OUTPUT ->  8 and '8' are equal in value but not are same type


        //                ****** Activity 4: Logical Operators *******

// TASK 11: Program of using '&&' to check two condition   
const isBothTrue = (one , two) => {
    if(one && two)
        console.log(one, ' and ',two, ' both are true and valid')
    else
        console.log("Both values are NOT TRUE and VALID")
    
}
isBothTrue({}, []) // OUTPUT -> {} and [] both are true and valid.  

// TASK 12: Program of using '||' to check two condition          

const isAnyOneTrue = (one, two) => {
    if(one && two)
        console.log('Either ', one," OR ", two,  "is true and valid")
    else
        console.log("Both Values are FALSE")
}
isAnyOneTrue(false, '') // OUTPUT -> Both Values are FALSE. 

// TASK 13: Program of using '!' to check two condition          
const theNegate = (one) => {
    let negateValue = !one;
    console.log("The Negate value of ", one ," is ", negateValue)
}
theNegate(true) // OUTPUT -> The Negate value of true is false 
        

        //                ****** Activity 5: Ternary Operators *******

const isPositiveNumver = (num) => {
    (num > 0) 
    ? console.log(`${num} is a Positive number`) 
    : console.log(`${num} is a Negative number`) 
}
isPositiveNumver(10) // OUTPUT ->  10 is a Positive number 