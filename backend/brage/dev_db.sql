DROP DATABASE IF EXISTS `client_hub_db_dev`;
CREATE DATABASE `client_hub_db_dev`;
USE `client_hub_db_dev`;

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

CREATE TABLE `processes` (  `id` INT AUTO_INCREMENT PRIMARY KEY,  `job_id` INT NOT NULL,  `title` VARCHAR(200) NOT NULL,  `status` VARCHAR(200) NOT NULL,  `description` VARCHAR(200) DEFAULT NULL,  `deadline` DATETIME DEFAULT NULL,  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  UNIQUE KEY `job_id_title_unique` (`job_id`,`title`)
);


CREATE TABLE `meetings` (  `id` INT AUTO_INCREMENT PRIMARY KEY,  `client_id` INT NOT NULL,  `title` VARCHAR(200) NOT NULL,  `description` VARCHAR(200) DEFAULT NULL,  `date_time` DATETIME NOT NULL,  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  UNIQUE KEY `client_id_title_unique` (`client_id`,`title`)
);


CREATE TABLE `materials` (  `id` INT AUTO_INCREMENT PRIMARY KEY,  `job_id` INT DEFAULT NULL,  `process_id` INT DEFAULT NULL,  `title` VARCHAR(200) NOT NULL,  `description` VARCHAR(200) DEFAULT NULL,  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  UNIQUE KEY `job_id_title_unique` (`job_id`,`title`),  UNIQUE KEY `process_id_title_unique` (`process_id`,`title`),  FOREIGN KEY (`process_id`) REFERENCES `processes`(`id`) ON DELETE CASCADE);

CREATE TABLE `jobs` (  `id` INT AUTO_INCREMENT PRIMARY KEY,  `client_id` INT NOT NULL,  `title` VARCHAR(200) NOT NULL,  `price` VARCHAR(200) NOT NULL,  `status` VARCHAR(200) NOT NULL,  `deadline` VARCHAR(200) NOT NULL,  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  UNIQUE KEY `client_id_title_unique` (`client_id`,`title`)
);


CREATE TABLE `clients` (  `id` INT AUTO_INCREMENT PRIMARY KEY,  `user_id` INT NOT NULL,  `name` VARCHAR(200) NOT NULL,  `contact_number` VARCHAR(200) NOT NULL,  `contact_email` VARCHAR(200) NOT NULL,  `description` TEXT DEFAULT NULL,  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  UNIQUE KEY `user_id_name_unique` (`user_id`,`name`)
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
WHERE SCHEMA_NAME = 'client_hub_db_dev';
