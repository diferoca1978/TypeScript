/**
 * @classdesc USER
 * @type {String} name, email.
 * @type {String/readonly} city.
 * @returns instance of User.
 */
// class User {

//   private userId: number = 1
//   name:string
//   email:string
//   readonly city: string = 'Ibague'

//   constructor (name: string, email: string) {

//     this.name = name;
//     this.email = email;

//   }

// }


// Another way to write the same code as a professional is:

// class User {

//   readonly city: string = 'Ibague'

//   constructor ( 
//     public name: string,  
//     public email: string,
//     // private iserId: string
//     ){};

// }

// GETTERS & SETTERS

// class User {

//   private _courseCount = 1
//   readonly city: string = 'Ibague'

//   constructor (  
//     public name: string,  
//     public email: string,
//     // private iserId: string
//     ){};

//   get getOtherEmail(): string {
//     return `Other ${this.email}`;
//   }

//   get courseCount(): number { // Here we're getting the private property _courseCount.
//     return this._courseCount;
//   }

//   set courseCount(courseNum) { // WARNING: The most important thing in the setters there should be nothing that is return type.
//     if (courseNum <= 1) {
//        throw new Error('Course count should be more than 1');     
//     }
//     this._courseCount = courseNum;
//   }
// }

// USING reserved word protected

class User {

  protected _courseCount = 1
  readonly city: string = 'Ibague'

  constructor (  
    public name: string,  
    public email: string,
    // private iserId: string
    ){};

  get getOtherEmail(): string {
    return `Other ${this.email}`;
  }

  get courseCount(): number { // Here we're getting the private property _courseCount.
    return this._courseCount;
  }

  set courseCount(courseNum) { // WARNING: The most important thing in the setters there should be nothing that is return type.
    if (courseNum <= 1) {
       throw new Error('Course count should be more than 1');     
    }
    this._courseCount = courseNum;
  }
}

class subUser extends User { /* With this code the class subUser inherits the class user, then insert a new property and at the same time access to protected property to change its value.*/

  isFamily: boolean = true
  changeCourseCount () {
    this._courseCount = 4
  }

}


const dfrc = new User('Diego', 'diferoca@ejemplo.com')
// dfrc.userId = 1 // Here we have an error because the property userId has asignated the reserved word (private).
console.log(dfrc);

// dfrc.city = 'Ibague' // Here we're have an error. ¡ Please uncomment the line to watch the error !


