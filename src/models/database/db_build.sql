BEGIN;
 DROP TABLE IF EXISTS  Stop-Go-Continue,  user_info  CASCADE;


 CREATE TABLE IF NOT EXISTS  user_info (
 id  SERIAL   PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email  VARCHAR(50) NOT NULL,
  password  VARCHAR(255) NOT NULL,
  type VARCHAR (30) NOT NULL , 
   img TEXT
 );

 CREATE TABLE IF NOT EXISTS  stop_go_continue (
      id  SERIAL   PRIMARY KEY,
      user_id INT NOT NULL,
       type VARCHAR (30) NOT NULL,
       description VARCHAR (255) NOT NULL,
       activitydate date
     FOREIGN KEY (user_id)  REFERENCE user_info(id)

 );
COMMIT;