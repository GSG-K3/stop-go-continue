 ## Introduction (Stop-Go-Continue)
 
* A game consist of feedback of students in the cohort, that reflects their recent experiences, and student give their suggestions about things they want to change to move forward.


## List of Endpoints
* `/home` consists of sign in and sign up
* `/cf` consists of all students feedback
* `/students` consists of form gives the student the ability to enter his feedbak(stop-go-continue)


<h3>User Journy:</h3>
<p>* User enter the home page to sign in or sign up.
   * If the user is a student it goes to the student page to gives its feedback.
   * If the user is a cf it goes to the cf page to see all feedbacks of the students.
</p>

<h3>How To Run our project: </h3>
<ol>
<li>clone repo.</li>
<li>in terminal: npm i</li>
<li>create database in heroku.</li>
<li>create config.env file in the project.</li>
<li>take the database url from heroku and save it in config.env file like this: <br>
DATABASE_URL = < your database from heroku ></li>
<li>in the terminal : npm start</li>
<li>open localhost:3000 and the project will run.</li>
</ol>


<h3>File Structure:</h3>

- public
     - css
        - cf.css
        - home.css
        - student.css

     - js
        - cf.js
     - cf.html
     - home.html
     - student.html
     
- src
     - models
        - database
            - queries
                - auth.js
                - getData.js
                - postData.js
            - db_bulid.js
            - db_bulid.sql
            - db_connection.js
     - server
        - app.js
        - router.js


<h3>DB Schema:</h3>
<img src="https://user-images.githubusercontent.com/57197216/75772987-aaf4e180-5d55-11ea-9f42-cf57fddf8263.jpg">

<h3>Team</h3>
 
 - [Banan](https://github.com/bananhaj)
 - [Hussein](https://github.com/Hussein-shahatet97)
 - [Nidaa](https://github.com/nidaa-awawdeh)
 - [Rahaf](https://github.com/rahaf-96)


