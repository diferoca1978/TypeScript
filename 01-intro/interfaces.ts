// The key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  startTrail(): string,
  getCouponName(cuponName: string): number
}

// Adding a new property

interface User {
  gitHubId : number
}

// Inheritance or extends:
/*
So for this case the interface Admin inherits the properties of the interface User.
*/

interface Admin extends User {

  role: 'admin' | 'sales' | 'ta'

}

const newUser: Admin = {
  dbId: 22,
  gitHubId: 23,
  email: 'user@12.com',
  userId: 1,
  role: 'ta',
  startTrail: () => {
    return 'trail started' 
  },
  getCouponName:(name: 'Diego') => { // Notice that is not neccesary to use the same name of an argumet to use the method previously declared above into the interface.
    return 44
  }
}



export{};
