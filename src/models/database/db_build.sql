BEGIN;
  DROP TABLE IF EXISTS  stop_go_continue,  user_info
  CASCADE;


<<<<<<< HEAD
 CREATE TABLE  user_info (
 id  serial  PRIMARY KEY,
=======
CREATE TABLE user_info
(
  id SERIAL PRIMARY KEY,
>>>>>>> 70bafcf66d3dafe6cd44092e5c3b7dc7bef8a022
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  type VARCHAR (30) NOT NULL ,
  img TEXT
);

<<<<<<< HEAD
 CREATE TABLE   stop_go_continue (
      id  serial   PRIMARY KEY,
       FOREIGN KEY (user_id) REFERENCES user_info(id),
       type VARCHAR (30) NOT NULL,
       description VARCHAR (255) NOT NULL,
       activitydate date,
=======
CREATE TABLE stop_go_continue
(
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  type VARCHAR (30) ,
  description VARCHAR (255) NOT NULL,
  activitydate date,
  FOREIGN KEY (user_id)  REFERENCES user_info(id)
>>>>>>> 70bafcf66d3dafe6cd44092e5c3b7dc7bef8a022

);
COMMIT;