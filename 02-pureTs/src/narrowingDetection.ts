//* in Type Script checking against the value returned by typeof operator is a type of guard.

// To the case below the function receive a parameter that can be a number or a string, so into the body of it we're asking if typeof of argument is a string do something, and if it is not a string, so will be a number.


const typeDetection = (val: number | string) => {

  if (typeof val === 'string') {
  
    return val.toUpperCase();
  }
  return val + 3;
}

console.log(typeDetection(5));


//* But could there is a special case just like this:

const detection = (val : number | string[] | null) => {
  
  if (typeof val === 'object') {
    // for (const value of val) { //! This launch an error, because val could be possibly null,
    //   console.log(value);  
    // }
  }
}

//* To fix this error, we need first checking the argument val if it is truthy. just kike this:

const detectionTwo = (val : number | string[] | null ) => {
  
  if (val && typeof val === 'object') { //! This is neccesary because in JavaScript both the arrays and the type values 'null' are objects.
    
    for (const value of val) {

      console.log(value);
      
    }
  }else if (typeof val === 'string') {

    console.log(val);
    
  }
}

//* the (in) narrowing operator 

interface User {
  name: string,
  email: string
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean
}


function isAdminAccount(account: User | Admin) {


  // return account.isAdmin //! This kind of code launch an error that means the property isAdmin only exists in Admin.
   if ('isAdmin' in account) { //? So we can use the (in) operator to ask if the property isAdmin exists in account.  
     return account.isAdmin;  //? Notice that if we put the cursor over the account it's 100% Admin.
   }

}

//* The (instanceof) operator
/*
 (instanceof) operator works similar to (typeof), but it works over the methods.
 Note: This operator is useful for most values that can be constructed with (new) word.
 e.g; new Date.   
 For instance in the code below the argument x can be both a date or a string, so we ask through the if statement, if the argument x is an intance of the Date method. 
*/

function logValue(x: Date | string) {
  if (x instanceof Date) {

    console.log(x.toUTCString());

  } else {

    console.log(x.toUpperCase());

  }
}


//* Discriminated unions

interface Circle {
  kind: "circle",
  radius: number
}

interface Square {
  kind: "square"
  side: number
}

interface Rectangle {
  kind: "rectangle",
  length: number,
  width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
  if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2
  }
  //return shape.side * shape.side
}


function getArea(shape: Shape){
  switch(shape.kind){
      case "circle":
          return Math.PI * shape.radius ** 2

      case "square":
          return shape.side * shape.side
      case "rectangle":
          return shape.length * shape.width

      default:
          const _defaultforshape: never = shape
          return _defaultforshape
  }
}