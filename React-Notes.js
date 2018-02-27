//REACT NOTES

/*
Pre-Class Comprehension

REACT I
1.
What is React?
We can get a React app running with npm, but it isn't a utility for
React also doesn't help us write JavaScript -- since React is written 
in JavaScript, we use JavaScript inside of our React components to build applications.

2.
What's the DOM?
Document Object Model - the relationship between all the HTML elemtns on a page.

3.
What can we attach to the objects in JavaScript?
Ultimately, the only two things that can be attached to objects are properties and methods. 
However, a property may be an enitrely new object, so it may seem like you're attaching an 
object to another object, but in reality, that new object exists as a property on the original object.

4.
You React apps will consist entirelt of components.
True! No matter how complex our apps may become, they will still consist of only components. 
Since components can be placed inside of each other, it's possible to nest them in order to create 
very complex interactions and relationships.

5.
The code we write in React will be significantly different than vanilla JavaScript.
While there will be some syntax differences (primarily with JSX, which you will learn all about), 
the vast majority of the code you write in React will be plain old JavaScript.

REACT II
1.
What do we use state for in React?
To keep track of data that changes throughout the app

2.
What are props?
Anything passed from a parent component to a child component.

3.
What are event listeners in JavaScript?
Built in JavaScript methods that react to user interaction or things happening in the browser

4.
React uses Unidirectional data flow

5.
What are the two types of data used in React?
State and Props

WELCOME TO REACT

Application state
The state of your application is anything that could change over time. In an app for an online store, 
state might include whether the user is logged in, what items are in the cart, or whether the user has 
any gift cards to use. This information is important to keep track of - many of your components might 
need to know it. We talked about state in React and unidirectional data flow - we keep data flow moving 
in one direction, because we only want state to be managed in one place. This will keep our state consistent 
and accessible across the entire app.

Props 
Think of passing data in your app only on a need-to-know basis. Components should only have to worry about 
the data that they really need to know in order to do their job. Props are the best way to pass state data 
down to children components. Props look like attributes in JSX and like properties in our Javascript. They 
are defined in the parent, and can be accessed in the child. We can pass data or even functions that change 
state down the chain to the components that need it. 

Lifecycle
React provides us with what are called “lifecycle hooks." These hooks are really methods that run at specific 
times during a component's lifecycle. The methods have descriptive names like componentWillMount, componentDidUpdate 
and componentWillUnmount. Using these methods, we can run our Javascript at just the right time to prevent components 
from rerendering if their props didn't change, to remove event listeners when the component leaves the page, or any 
number of other performance-increasing and useful functions. 

*/

/*
METHOD
A Method is a function that is within a class.

COMPONENT-WILLO-MOUNT
 a componentWillMount 



*/