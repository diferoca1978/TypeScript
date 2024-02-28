"use strict";
const score = [];
const names = [];
// For this case the return value can be a boolean value or a number, so we can implemet an if statement to check the val, but the problem with this is that we can't work with a value passed as a string.
function identityOne(val) {
    return val;
}
// In this case we're using a type any, and the problem with that is the function receive all types for the type val. So we actually are losing the information about what that type was when the function make the returns.
//! WARNING: Never to use the type any. 
function identityTwo(val) {
    return val;
}
//* Using type variable, a special kind of variable that works on types rather than values.
function identityThree(val) {
    return val;
}
identityThree({ brand: 'Cristal', content: 200 });
//* Using type variable in arrays.
function logginIdentity(arg) {
    // do some database operations
    const myIndex = 3;
    return arg[myIndex];
}
//* Using type variable in arrow functions working with arrays.
const getlogginIdentity = (identity) => {
    // do some database operations
    const myIndex = 4;
    return identity[myIndex];
};
//*  A comma before Type variable.
const getlogginIdentity2 = (identity) => {
    // do some database operations
    const myIndex = 4;
    return identity[myIndex];
};
