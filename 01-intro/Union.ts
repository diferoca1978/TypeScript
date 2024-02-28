

type User = {
  name: string,
  id: number
}


type Admin = {
  adminName: string,
  id: number
}

// Union: Allow us assing different type of data to a variable or object so on...


let user: User | Admin = {name: 'Diego', id: 1234};

user = {adminName: 'Diferoca', id: 12345}

/*
Using union in functions: So when we try to do someting like this TypeScript launch an Error. Unlock the code commented to see the error.
*/
function getId (id: number | string) {
  //id.toUpperCase()
}

// So we need to validate the data through if statement.

function getId2 (id: number | string) {
  if (typeof id === 'string') {
    id.toLocaleLowerCase()
  }
}

/*
Using union in array : common erros.
*/

let arr1: number[] = [1,2,3];
let arr2: string[] = ['1','2','3'];
//let arr3: number | string[] = [1,2,'3',true]; WArning: Uncomment this line to wach the error.

/*
The correct way to do that:
*/

let arr4: (number | string | boolean)[] = [1,2,'3',true];


