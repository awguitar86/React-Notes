/*

REACT III - HTTP

What are HTTP requests? 
The internet landscape is made up of computers and mobile devices worlwide, communicating with 
one another. Any computer can send data and any computer can receive data, but most of our 
computers are specialized to do mostly one or the other. Servers are computers that specialize 
in listening for requests and sending data. You can even create a server on your laptop - 
live-server is a server on your laptop that you can connect to in order to see your current 
project. Clients are computers that specialize in sending requests and receiving data to display 
- most people use their home computers and phones this way. 

When to make HTTP requests
While browsing a website, our computer is making HTTP requests all the time without us knowing it. 
A request is sent to get the HTML and then to get everything attached to it - styles, javascript
files, images. In your own site, you can make a request to your own server - to get product information, 
user information - or to another server. There are hundreds of open APIs (servers with ways for 
anyone to interact with them) that you can use: you can send a request to SWAPI to get Star Wars 
facts, to the Pokemon API, any number of weather APIs, even APIs to convert text to voice or 
translate text into another language. 

The HTTP Verbs
HTTP requests have different labels depending on what they're used for. GET requests are for asking 
for information, POST requests are to add information, PUT is to edit information, and DELETE is to 
remove information. We can use information in the URL or in the body (the data we send with the request) 
to give more information about exactly what we want the server to do for us.

HTTP - Hypertext Transfer Protocol
    A standard protocol for data transfer on the web: HTTP is stateless, meaning each message is on its
    own, and doesn't keep track of the state of the app

CRUD = Create - Read - Update - Delete

REST - Representational State Transfer
    A style of building interactuons between computers: uses GET, POST, PUT, and DELETE 
    to send and request data

JSON - Javascript Object Notation
    One of the most common formats of REST data transfer - rememeber to use double quotes and no 
    hanging commas!



* WEB - CLIENT SERVER MODEL *

SERVERS
    Primary jobs:
        -Listen for and process requests
        -Send front-end files to client
        -Mediate between client and database

CLIENTS
    Primary jobs:
        -Handle user interaction
        -Present data from server
        -Request data from server
        -Request data from 3rd party APIs

* WEB - URLs *

https:// is the protocol 

www.website.com is the domain name

/search is the file we want

If you do not have a file on the end of the url to request for, it will request for index.html by default


* WEB - SCRIPT TAGS *

In html, we use script tags to use javascript. But when there is to much javascript to write
we link a seperate javascript file to the html file that has all the javascript for the website in it.
We do this by putting the javascript file as the source in a script tag <script src="script.js"></script>

* WEB - NON-BLOCKING *

By default we want to place the script tags for javascript in html at the bottom of the body tag
so that it will load the webpage faster.


* WEB - ASYNC and DEFER *

Async: runs while html is being parsed; does not necessarily run in the order it's placed.
        <script src="http://code.net/script1.js" async></script>

Defer: runs after html is parsed; runs in the order it's placed.
        <script src="script2.js" defer></script>

*/
