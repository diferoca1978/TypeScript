 // Definition: An abstract class is a class that can not be instantiated directly. It means that it need to use a sub class to inherit the abstract class. The rol of an abstract class is to serve as a base class for subclasses wich do implement all the abstract members.


 abstract class TakePhoto {

  constructor (
    public cameraMode: string,
    public filter: string
  ){}

  abstract getSepia():void

 }
 // We can not use it directly
 // const newStory = new TakePhoto // Error: Cannot create an instance of an abstract class.

 //Instead of:

 class instagram extends TakePhoto {
  // Here we're use the subclass instagram to inherit the properties of our abstract class. But we need to implement all abstract members.
  constructor (
    public cameraMode: string,
    public filter: string,
    public burst: number // Here we're adding a new property but it does not infer in the super() call.  
  ) {
    super(cameraMode, filter) // With the called of super() method we're ensure that the constructor of the abstarct class is called before the the constructor of the subclass 
  }
  
  getSepia(): void {
    console.log('publicated in sephia filter');    
  }
  
 }

 const newStory = new instagram('proffesional', 'Sepia', 3);

 console.log(newStory);
 