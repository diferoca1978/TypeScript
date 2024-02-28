

// WARNING: With functions the best way to ensure that the arguments been correct and it doesn't can used wrong, is infer his type.

//WRONG e.g.

// function addTwo (num) {
//   return num + 2;
// }

// Best practice e.g.

function addTwo1 (num: number) {
  
  return num + 2;
}

addTwo1(5);


// WARNING: TypeScript also allow avoid this kind of error, so how we can see the function below returns a string.    
            
  //Wrong e.g.

  function addTwo2 (num: number) {
  
  //return num + 2;
  return 'hello'
  
}

addTwo2(2);

  /* Best e.g.
      Well if try to return somethig different to a number TypeScript launch an error.
      So, we can put the cursor over the function and to see what type of data returns the function*/

  function addTwo3 (num: number): number {
  
    return num + 2;
    //return 'hello'

  }

addTwo3(2);



export{};