

/* Some example.
   So we can see that this function receive an object but it doesn't return nothing and, it could be bad interpreted. */

//function printUser ({name:string, isAlive: Boolean}){}

/*Best way.
  Here we're setting that the function return an object including the types of the properties. */

function createCourse (): {name: string, isAlive: boolean} {
  return {name: 'Diego', isAlive: true}
}

// Type Aliases

type User = {
  name: string,
  email: string,
  isAlive: boolean
}

const createUser = (user: User): User => {
 return {name: '', email: '', isAlive: true}
}

let user = {
  name: 'Diego',
  email: 'diego@dfr.com',
  isAlive: true
}

console.log(createUser(user));


// Another protips working with Types Aliases.

  // The word reserve readonly allow set a property, a function or a class only to read it.

type User2 = {
  readonly id: number,
  name: string,
  email: string,
  isAlive: boolean
  
}

let myUser2: User2 = {
  id: 1234,
  name: 'Diego',
  email: 'diego@dfr.com',
  isAlive: true
}

//myUser2.id = 123 This launch Error: Cannot assign to 'id' because it is a read-only property.

  // We also can set a property as optional through the ? character, that means the property can come or not, so we'll not have an   error. For instance here we're setting the credCard property as optional. 

  type User3 = {
    readonly id: number,
    name: string,
    email: string,
    isAlive: boolean,
    credCard?: number /* If we don't use the question mark in this property, when we try to build a new user TypeScript launch 
                         Error: Property 'credCard' is missing in type. */
  }
  
  let myUser3: User3 = {
    id: 1234,
    name: 'Diego',
    email: 'diego@dfr.com',
    isAlive: true
  }

export{}