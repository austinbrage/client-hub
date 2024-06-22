CREATE DATABASE IF NOT EXISTS ``;
USE ``;

CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(250) UNIQUE NOT NULL,
  `password` VARCHAR(250) NOT NULL,
  `email` VARCHAR(250) UNIQUE NOT NULL,
  `author` VARCHAR(250) UNIQUE NOT NULL,
  `external_id` VARCHAR(250) DEFAULT NULL,
  `auth_provider` VARCHAR(250) DEFAULT NULL,
  `membership_type` VARCHAR(250) NOT NULL DEFAULT 'basic',
  `api_key` VARCHAR(32) UNIQUE DEFAULT SUBSTRING(MD5(RAND()), 1, 32) 
);

CREATE TABLE `processes` (
);


CREATE TABLE `meetings` (
);


CREATE TABLE `materials` (

CREATE TABLE `jobs` (
);


CREATE TABLE `clients` (
);

ALTER TABLE `processes`
ADD CONSTRAINT `processes_foreign_key`
FOREIGN KEY (`job_id`) 
REFERENCES `jobs`(`id`) 
ON DELETE CASCADE;

ALTER TABLE `meetings`
ADD CONSTRAINT `meetings_foreign_key`
FOREIGN KEY (`client_id`) 
REFERENCES `clients`(`id`) 
ON DELETE CASCADE;

ALTER TABLE `materials`
ADD CONSTRAINT `materials_foreign_key`
FOREIGN KEY (`job_id`) 
REFERENCES `jobs`(`id`) 
ON DELETE CASCADE;

ALTER TABLE `jobs`
ADD CONSTRAINT `jobs_foreign_key`
FOREIGN KEY (`client_id`) 
REFERENCES `clients`(`id`) 
ON DELETE CASCADE;

ALTER TABLE `clients`
ADD CONSTRAINT `clients_foreign_key`
FOREIGN KEY (`user_id`) 
REFERENCES `users`(`id`) 
ON DELETE CASCADE;

SELECT SCHEMA_NAME
FROM information_schema.schemata
WHERE SCHEMA_NAME = '';