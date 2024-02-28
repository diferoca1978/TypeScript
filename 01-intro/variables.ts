
// strings

let greetings: string = 'Hello World';

greetings.includes('W')

console.log(greetings);

// number

let userId: number = 123456;

console.log(userId);

// boolean

let isBoolean: boolean = false;

isBoolean

console.log(isBoolean);

/* WARNING: the code above is redundant in TypeScript because it's enough smart and infer what kind of data is.
  for instance: */

    let userID = 123; 

    // userID = false;  // this launch an error because TypeScript infer that the variable only accept data type number.
    
    
// any

/* In this special case is better infer the value as a string, because if we don't do this TypeScript implicitly will give a any value, so we don't want an any value never. */

// let hero;
let hero: string;

function getHero () {
  return 'Thor'
}

hero = getHero();


export{};


