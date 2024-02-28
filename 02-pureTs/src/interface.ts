// Definition: An interface is a way to define the shape of an object, and it can allow us to use class to define their shape as well.

// Commom use e.g

interface Point {
  x: number,
  y: number
}

const printCoord = (pt: Point) => {
  console.log(`The coordinate's x values is: ${pt.x}` );
  console.log(`The coordinate's y values is: ${pt.y}` );
}

printCoord({x:100, y:100});



//  With classes e.g

interface takePhoto {

  cameraMode: string,
  filter: string,
  burst: number

}

interface createStory {
  insertStory (): void
}

class useCamera implements takePhoto {

  constructor (

    public cameraMode: string,
    public filter: string,
    public burst: number


  ) {}

}
class youTube implements takePhoto, createStory {

  constructor (

    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string

  ) {}

  insertStory (): void {
    console.log('story inserted');
    
  }

}

