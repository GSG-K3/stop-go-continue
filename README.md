 ## Introduction (Stop-Go-Continue)
 
* A game consist of feedback of students in the cohort, that reflects their recent experiences, and student give their suggestions about things they want to change to move forward.


## List of Endpoints
* `/home` consists of sign in and sign up
* `/cf` consists of all students feedback
* `/students` consists of form gives the student the ability to enter his feedbak(stop-go-continue)


<h3>User Journy:</h3>
<p>* A game consist of feedback of students in the cohort, that reflects their recent experiences, and student give their suggestions about things they want to change to move forward.</p>

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
       - cf
            -cf.js
       - home.js
       - student.js
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
<img src="">

<h3>Team</h3>
<ul>
<li>Banan</li>
<li>nidaa</li>
<li>hussen</li>
<li>Rahaf</li>
</ul>
