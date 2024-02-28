"use strict";
// Definition: An abstract class is a class that can not be instantiated directly. It means that it need to use a sub class to inherit the abstract class. The rol of an abstract class is to serve as a base class for subclasses wich do implement all the abstract members.
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// We can not use it directly
// const newStory = new TakePhoto // Error: Cannot create an instance of an abstract class.
//Instead of:
class instagram extends TakePhoto {
    // Here we're use the subclass instagram to inherit the properties of our abstract class. But we need to implement all abstract members.
    constructor(cameraMode, filter, burst // Here we're adding a new property but it does not infer in the super() call.  
    ) {
        super(cameraMode, filter); // With the called of super() method we're ensure that the constructor of the abstarct class is called before the the constructor of the subclass 
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('publicated in sephia filter');
    }
}
const newStory = new instagram('proffesional', 'Sepia', 3);
console.log(newStory);
