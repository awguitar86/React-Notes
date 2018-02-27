//REACT 1 VIDEO NOTES

/*
ARRAYS - METHODS
array.pop() - removes the last item of an array and returns the item is desired.
array.shift() - removes the first element of the array and shifts everything over, and returns the item if desired.
array.splice(1, 2) - removes items from the array where you tell it to. The first number is where to start, and the second number is how many to remove. It will also return the values removed.
array.slice(2, 5) - this is used to get copies of an array. You can also tell it where to slice with numbers. The first number is where to start, anbd the second number is where to stop. 
*/

//ARRAYS - MORE METHODS

/*
array.indexOf() - a method on arrays that finds the first instance of a value. If the value you are searching is not found, indexOf will return -1.
array.forEach() - a method on arrays that allows you to run a function based on each element.  
array.map() - method on arrays that creates a new array based on the original array.
*/
    var ages2016 = [53, 50, 29, 22, 16];
    var ages2017 = ages2016.map(function(element){
        return element + 1;
    })
    ages2017 //will return a new array [54, 51, 30, 23, 17]

    ages2016 //returns original array [53, 50, 29, 22, 16]
/*
array.filter() - a method on arrays that creates a new array of only elements that pass criteria.  
*/
    var names = ['Suzie', 'Ben', 'Mark', 'Franklin'];
    var shortNames = names.filter(function(val, i, arr){
        return val.length < 5;
    });

    shortNames //will return a new array ['Ben', 'Mark']


//COMPONENT-BASED ARCHITECTURE
/*
A component-based app or website is how an app or website is divided up. 
There can be a root component that then has a bunch of smaller components within it.
*/

//REACT JSX
/*
Always capitalize components in the code. Button uses the component, but button uses the default button.
*/

//STATE IN REACT
/*
    Components can have a sate or have no state. They each can have their own state, but not share a sate with another component.
    State is always private data that cannot be shared with other components. State keeps track of things that change.
    Always set state in the constructor function.
        constructor(props){
            super(props)

            this.state = {
                count = 0
            }
        }
    This sets the state. 
*/
//Example
import React, {Component} from 'react';

class Child extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0  //this keeps track of whatever you want it to that changes in an app component
        }
    }

    render(){
        //setTimeout is part of javascript
        setTimeout (() => {
            this.setState({  //will merge the object into the state and then it will rerender the component with the changes. 
                count: this.state.count + 1
            })
        }, 1000)

        return (
            <div>
                <h1>Seconds since component renders: {this.state.count}</h1>
            </div>
        )
    }
}

export default Child

//This will now add one to the count every second.


//UPDATE STATE WITH EVENT LISTENERS

import React, {Component} from 'react';

class Child extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleUpdateUsername = this.handleUpdateUsername.bind(this)
        this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }

    handleUpdateUsername(event){
        this.setState({
            username: event.target.value
        })
    }

    handleUpdatePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    loginUser(){
        console.log(`Logging in ${this.state.username} with password ${this.state.password}`)
    }


    render(){

        return (
            <div>
                <input 
                    value={this.state.username}
                    onChange={this.handleUpdateUsername}
                    placeholder="Username"/>
                <input
                    value={this.state.password}
                    onChange={this.handleUpdatePassword}
                    placeholder="Password"/>

                <button
                    onClick={this.loginUser}>Login</button>
            </div>
        )
    }
}

export default Child

/*
PROPS
We've talked about one way to treat data: state. In this video, we talk about the other kind of data a component 
has access to: props. Props are passed from the parent component and can be anything from strings to functions. 
In this video, we'll talk about how to create and access props, and a little bit about why we would want to.

Like in the Button component in the App.js file, Anything that is passed in the opening and closing tags of a 
component will be passed to that component as props.children.

On the Button function in the App.js file, there is a function prop added called action. Because this is an onClick
event you need to pass in a function definition, but before you do that you need to determine what the argument that 
will be passed to it will be, this is what you use bind for. You will pass in this for this.state. And you will also
pass in the new item. the new item will be this.state.newItem. When it is envoked it will then create the new item 
in the list.

*/
//EXAMPLE
//This is the App.js file
import React, {Component} from 'react';
import List from './List';
import Button from './Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            chores: ['dishes', 'laundry'],
            newItem: ''
        }

        this.addToChores = this.addToChores.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    addToChores(item){
        this.setState({
            chores: this.state.chores.concat([item])
        })
    }

    handleChange(event){
        this.setState({
            newItem: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Passing Props to Components</h2>
                </div>

                <input value={this.state.newItem} onChange={this.handleChange} />
                
                <Button action={this.addToChores.bind(this, this.state.newItem)}> 
                    Add A New Chore
                </Button>

                <List title="Groceries" list={['bananas', 'bread']} />
                <List title="Chores" list={this.state.chores} />


            </div>
        );
    }
}

export default App;

//This is the List.js file component
import React from 'react';
import './List.css';

export default function List(props) {
    var list = props.list.map((item, i) => {
        return <li className="list-item" key={i}>{item}</li>
    })

    return (
        <div>
            <h1>{props.title}</h1>
            <ul className="list">
                {list}
            </ul>
        </div>
    )
}

//This is the Button.js component
import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <div className="button-clickable" onClick={props.action}>
            {props.children}
        </div>
    )
}

/*
REACT-CHANGING STATE IN PARENT

*/

import React, {Component} from 'react';
import List from './List';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            players: {
                benched: ['griffin', 'pierce', 'crawford'],
                onCourt: ['paul', 'redick', 'rivers']
            }
        }

        this.moveToBench = this.moveToBench.bind(this);
        this.moveToCourt = this.moveToCourt.bind(this);
    }

    moveToBench(player, i) {
        var court = this.state.players.onCourt;
        var bench = this.state.players.benched;

        bench.push(court.splice(i, 1));

        this.setState({
            players: {
                benched: bench,
                onCourt: court
            }
        })
    }

    moveToCourt(player, i) {
        var court = this.state.players.onCourt;
        var bench = this.state.players.benched;

        court.push(bench.splice(i, 1));

        this.setState({
            players: {
                benched: bench,
                onCourt: court
            }
        })
    }

    render(){
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2> Changing State in a parent Component</h2>
                </div>



            </div>
        );
    }
}