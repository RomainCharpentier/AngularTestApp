DROP TABLE IF EXISTS user;

CREATE TABLE user (
  EMAIL VARCHAR(250) PRIMARY KEY,
  PASSWORD VARCHAR(250) NOT NULL
);

INSERT INTO user (EMAIL, PASSWORD) VALUES
  ('abc1@gmail.com', 'test1'),
  ('abc2@gmail.com', 'test2'),
  ('abc3@gmail.com', 'test3');
  
DROP TABLE IF EXISTS device;

CREATE TABLE device (
  ID INT PRIMARY KEY,
  NAME VARCHAR(250) NOT NULL,
  STATUS VARCHAR(250) NOT NULL
);

INSERT INTO device (ID, NAME, STATUS) VALUES
  (1, 'Device1', 'ON'),
  (2, 'Device2', 'OFF'),
  (3, 'Device3', 'ON');