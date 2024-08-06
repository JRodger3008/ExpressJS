# ExpressJS
My first Express.js app - Serves 2 Static HTML files, and displays a welcome message utilising data from a person.json file

# ExpressJS - my_first_express_app
<strong>Code written by Jordan Rodger</strong>
<br>
<br>

<strong>Task 21 - Express - Web Applications Part 1</strong>

This project was completed as a part of the DfE Full-Stack Web Development bootcamp at HyperionDev. My final grade for this was 100% along with part 2, which was a test of my proficiency with Postman API (this was assessed via screenshots of various RESTful API operations and outcomes, e.g Post, Get, Put, Patch, Delete)
<br>
Node modules have been deleted.

Further, you will find the comments recieved from a code reviewer at HyperionDev below, along with the grading.
<br>

<h3>Below is the task specifications for Part 1 as given by HyperionDev:</h3>

Follow these steps:
  ● Create an application project folder called my_first_express_app.
  ● Create another subdirectory called public that contains two static html files
  called about.html and contact_us.html. Feel free to reuse any html files you
  have created before.
  ● Create a file called person.json that describes a person. E.g. of json: {“name”:
  “Tom Jones”, “email”: “tom@gmail.com”, “gender”: “male”}
  ● Create a server that will do the following:
    ○ Display “Welcome” and the name of the person that is read from the file
    person.json at URL http://localhost:3000/.
    ○ Display the static HTML page, about.html at URL
    http://localhost:3000/about.html
    ○ Display the static HTML page, contact_us.html at URL
    http://localhost:3000/contact_us.html
    ○ Display the message “Sorry! Can’t find that resource. Please check your
    URL” if the user enters an unknown path. Resource on generalised error
    handling here.
  ● Enable the server to restart on file changes.
  ● You should be able to start the server using npm start.
