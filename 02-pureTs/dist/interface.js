"use strict";
// Definition: An interface is a way to define the shape of an object, and it can allow us to use class to define their shape as well.
const printCoord = (pt) => {
    console.log(`The coordinate's x values is: ${pt.x}`);
    console.log(`The coordinate's y values is: ${pt.y}`);
};
printCoord({ x: 100, y: 100 });
class useCamera {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class youTube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    insertStory() {
        console.log('story inserted');
    }
}
