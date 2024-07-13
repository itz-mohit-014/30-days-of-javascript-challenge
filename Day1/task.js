// ********* DAY 1: VARIABLE AND DATA TYPES  ********** //

// ******************************************* //

//              ******  Activity 1: Variable Declaration  ******


            // using =>  var
    
    var num;
    num = 5;
    console.log(num) // output => 5
    //  ( declaratino + assignment ... together) =>   var num = 5 


            // using =>  let

    let name;
    name = 'Mohit';
    console.log(name)   // output => Mohit
    //  ( declaratino + assignment ... together) =>   let name = 'Mohit'



//                ****** Activity 2: Constant Declaration  ******

             // using =>  const

    const isAdmin = true;
    console.log(isAdmin)  // output => true
    //  must be initialize



//                ***** Activity 3: Data Types  ******

const fName = 'Mohit'
const age = 21;
const isAuthor = true;
const fullDetails = {
    name:"Mohit",
}
const array = [1,2,3];

console.log(typeof fName)  // String
console.log(typeof age)  // Number
console.log(typeof isAuthor)  // Boolean
console.log(typeof fullDetails)  // Object
console.log(typeof array) // Object



//                ****** Activity 4: Reassigning Variables *******

let initialValue = 20;
console.log(initialValue) // output => 20
initialValue = 40;
console.log(initialValue)  // output => 40



//                ****** Activity 5: Understanding *const* *******

const constReassignment = 'initial value' 
console.log(constReassignment) // output => initial value
// constReassignment = 'Try change' // output -> TypeError: Assignment to constant variable.