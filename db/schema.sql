-- RUN in the command line in mysql shell
-- source db/schema.sql
-- source db/seeds.sql

-- A database is a collection of interrelated data. This data is stored in one or more tables that are related to one another.

DROP DATABASE IF EXISTS climbing_db;
CREATE DATABASE climbing_db;

USE climbing_db;

--  drops all the tables if they exist then creates the tables
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS profile;




-- A table is composed of rows and columns. A column represents a field. A row represents a record.

CREATE TABLE user(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE experience(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  climb_type VARCHAR(30) NOT NULL,
  rock_type VARCHAR(30) NOT NULL,
  climb_level INTEGER NOT NULL
);

CREATE TABLE gear(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  clips BOOLEAN NOT NULL,
  climbing_shoes BOOLEAN NOT NULL,
  chalk BOOLEAN NOT NULL,
  harness BOOLEAN NOT NULL,
  dry_rope BOOLEAN NOT NULL,
  helmet BOOLEAN NOT NULL,
  locking_carabiners BOOLEAN NOT NULL
);

-- CREATE TABLE social(
--   id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   social_level INTEGER NOT NULL,
--   description TEXT
-- );

-- CREATE TABLE work(
--   id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   schedule VARCHAR(30) NOT NULL,
--   description TEXT
-- );

-- CREATE TABLE profile(
--     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     profile_image VARCHAR(30) NOT NULL,
--     user_location VARCHAR(30) NOT NULL,
--     user_phone INTEGER,
--     user_experience BOOLEAN,
--     has_gear BOOLEAN NOT NULL,
--     social BOOLEAN NOT NULL,
--     location VARCHAR(30)
-- );

CREATE TABLE profile(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    profile_image VARCHAR(30) NOT NULL,
    user_location VARCHAR(30) NOT NULL,
    user_phone INTEGER,
    user_experience BOOLEAN,
    has_gear BOOLEAN NOT NULL,
    social BOOLEAN NOT NULL,
    location VARCHAR(30),
    score INTEGER
);


-- A query is a request for data from a database table or a combination of tables.

-- RUN a few queries
-- SELECT * FROM experience;
-- SELECT * FROM gear;
-- SELECT * FROM social;
