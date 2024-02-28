/* Some example.
   So we can see that this function receive an object but it doesn't return nothing and, it could be bad interpreted. */
function printUser(_a) {
    var string = _a.name, Boolean = _a.isAlive;
}
/*Best way.
  Here we're setting that the function return an object including the types of the properties. */
function createCourse() {
    return { name: 'Diego', isAlive: true };
}
var createUser = function (user) {
    return { name: '', email: '', isAlive: true };
};
var user = {
    name: 'Diego',
    email: 'diego@dfr.com',
    isAlive: true
};
console.log(createUser(user));
