BEGIN;
  DROP TABLE IF EXISTS  stop_go_continue,  user_info
  CASCADE;


CREATE TABLE user_info
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  type VARCHAR (30) NOT NULL ,
  img TEXT
);

CREATE TABLE stop_go_continue
(
  id SERIAL PRIMARY KEY,
  user_id INT,
  type VARCHAR (30) ,
  description VARCHAR (255) NOT NULL,
  activitydate date,
  FOREIGN KEY (user_id)  REFERENCES user_info(id)
);

COMMIT;