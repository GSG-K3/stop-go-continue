BEGIN;
 DROP TABLE IF EXISTS  stop_go_continue,  user_info  CASCADE;


 CREATE TABLE  user_info (
 id  serial  PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email  VARCHAR(50) NOT NULL,
  password  VARCHAR(255) NOT NULL,
  type VARCHAR (30) NOT NULL , 
   img TEXT
 );

 CREATE TABLE   stop_go_continue (
      id  serial   PRIMARY KEY,
       FOREIGN KEY (user_id) REFERENCES user_info(id),
       type VARCHAR (30) NOT NULL,
       description VARCHAR (255) NOT NULL,
       activitydate date,

 );
COMMIT;