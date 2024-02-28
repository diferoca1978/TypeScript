/* Type in arrays 

When we try the initialize a varible superHeroes without data type TypeScript launch an Error.
uncomment the code below.

*/

const superHeroes = [];

// superHeroes.push('spiderman');


/*
So is neccesary to give to TypeScript the type of data. something like this:
*/

const superHeroes2: string[] = [];

superHeroes2.push('spiderman');

/*
Another way to set the type data to an array is:
*/

const superHeroes3: Array<number> = [];

superHeroes3.push(3);

// When we try to push an object.

type User = {
  name: string,
  isActive: boolean
}

const AllUsers: User[] = [];

AllUsers.push({name: 'Diego', isActive: true})


export{}