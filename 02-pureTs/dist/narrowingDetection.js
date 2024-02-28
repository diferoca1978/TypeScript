"use strict";
//* in Type Script checking against the value returned by typeof operator is a type of guard.
// To the case below the function receive a parameter that can be a number or a string, so into the body of it we're asking if typeof of argument is a string do something, and if it is not a string, so will be a number.
const typeDetection = (val) => {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }
    return val + 3;
};
console.log(typeDetection(5));
//* But could there is a special case just like this:
const detection = (val) => {
    if (typeof val === 'object') {
        // for (const value of val) { // This launch an error, because val could be possibly null,
        //   console.log(value);  
        // }
    }
};
