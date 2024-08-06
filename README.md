# ExpressJS - my_first_express_app
<strong>Code written by Jordan Rodger</strong>
<br>


<strong>Task 21 - Express - Web Applications Part 1</strong>

My first Express.js app - Serves 2 Static HTML files, and displays a welcome message utilising data from a person.json file
<br>

This project was completed as a part of the DfE Full-Stack Web Development bootcamp at HyperionDev. 
<br> 
My final grade for this was 100% along with part 2, which was a test of my proficiency with Postman API (this was assessed via screenshots of various RESTful API operations and outcomes, e.g Post, Get, Put, Patch, Delete)
<br>
Node modules have been deleted.

Further, you will find the comments recieved from a code reviewer at HyperionDev below, along with the grading.
<br>

<h3>Below is the task specifications for Part 1 as given by HyperionDev:</h3>


  * Create an application project folder called my_first_express_app.
  * Create another subdirectory called public that contains two static html files
  called about.html and contact_us.html. Feel free to reuse any html files you
  have created before.
  * Create a file called person.json that describes a person. E.g. of json: {“name”:
  “Tom Jones”, “email”: “tom@gmail.com”, “gender”: “male”}
  * Create a server that will do the following:
    * Display “Welcome” and the name of the person that is read from the file
    person.json at URL http://localhost:3000/.
    * Display the static HTML page, about.html at URL
    http://localhost:3000/about.html
    * Display the static HTML page, contact_us.html at URL
    http://localhost:3000/contact_us.html
    * Display the message “Sorry! Can’t find that resource. Please check your
    URL” if the user enters an unknown path. Resource on generalised error
  handling here.
  * Enable the server to restart on file changes.
  * You should be able to start the server using npm start.

# Scores

Completeness: 4 / 4
<br>
Efficiency: 4 / 4
<br>
Style: 4 / 4
<br>
Documentation: 4 / 4

# Positive
Excellent work, Jordan! 👏👏👏

✅ You covered all the necessary functionalities for this task, from parsing the JSON file to handling errors and serving static HTML files. Everything needed to meet the requirements is present.

⚡️ Your code is efficient and straightforward. Using fs.readFileSync to read the JSON file is a quick way to get the data you need. Additionally, the use of middleware (express.static) to serve static files is a great way to ease the delivery of static assets.

💯 Your coding style is clean and consistent. The indentation and spacing in the code are perfect, making your code a pleasure to read. You've also used descriptive and meaningful variable names. 

📝 Your documentation is exceptional, Jordan! The comments you added help explain what each part of the code does and you also added comments to explain what the expected outputs should be.


# Improve
CHALLENGE
<br>
💡 If you would like to further enhance your documentation, consider adding a README.md file that provides an overview of the project, setup instructions, and examples of how to access and test the different endpoints. This would make your project even more developer-friendly.


# Overall
Overall, you've done an amazing job, Jordan! Your code is complete, efficient, well-styled, and well-documented. Keep up the fantastic work and keep pushing yourself to learn new concepts and best practices. I am confident that you will continue to excel in your coding journey. Happy coding! 🚀
