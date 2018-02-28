/* REDUX */
// Redux is a pattern. A way of organizing your code, and of controlling changes in the state of your application.
// The state is all the values, all of the things in an app that can change. That might change based on the user input or the info we get from a REST api, or some other source.

/* Immutable Data Javascript */
// Immutable: data that cannot be changed.

var user = {
    name: "Brett",
    color: "Blue"
}

// Object.assign() merges the two objects you put in the parenthesis.
var newUser = Object.assign( {}, oldUser ); // This merges the oldUser object into the empty object and assigns it to newUser.

var oldUser = {
    name: "Tim",
    color: "Yellow",
    favorites: {
        food: "pizza"
    }
}

var newUser = Object.assign({}, oldUser);

newUser.favorites = {   // When you use Object.assign() it only merges things on the first level. With nested objects you have to go to the first
    food: "broccoli"    // level and then change the object within that first level object.
}

