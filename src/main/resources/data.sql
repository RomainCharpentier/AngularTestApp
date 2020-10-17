DROP TABLE IF EXISTS user;

CREATE TABLE user (
  EMAIL VARCHAR(250) PRIMARY KEY,
  PASSWORD VARCHAR(250) NOT NULL
);

INSERT INTO user (EMAIL, PASSWORD) VALUES
  ('abc1@gmail.com', 'test1'),
  ('abc2@gmail.com', 'test2'),
  ('abc3@gmail.com', 'test3');