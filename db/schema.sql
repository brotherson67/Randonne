-- A database is a collection of interrelated data. This data is stored in one or more tables that are related to one another.

DROP DATABASE IF EXISTS hiking_db;
CREATE DATABASE hiking_db;

USE hiking_db;

--  drops all the tables if they exist then creates the tables
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

-- A table is composed of rows and columns. A column represents a field. A row represents a record.
CREATE TABLE user(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(30) NOT NULL
);
CREATE TABLE experience(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  climb_type VARCHAR(30) NOT NULL,
  rocktype VARCHAR(30) NOT NULL,
  climb_level INTEGER NOT NULL,

);
CREATE TABLE gear(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  clips VARCHAR(30) NOT NULL,
  climbing_shoes BOOLEAN,
  chalk BOOLEAN,
  harness BOOLEAN,
  dry_rope BOOLEAN,
  helmet BOOLEAN,
  locking_carabiners BOOLEAN,

);
CREATE TABLE social(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  \_name VARCHAR(30) NOT NULL
  description TEXT,

);


-- A query is a request for data from a database table or a combination of tables.


-- RUN in the command line in mysql shell
-- source db/schema.sql
-- source db/seeds.sql

-- RUN a few queries
-- SELECT * FROM experience;
-- SELECT * FROM gear;
-- SELECT * FROM social;
