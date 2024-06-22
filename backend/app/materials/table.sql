CREATE TABLE `materials` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `job_id` INT DEFAULT NULL,
  `process_id` INT DEFAULT NULL,
  `title` VARCHAR(200) NOT NULL,
  `description` VARCHAR(200) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY `job_id_title_unique` (`job_id`,`title`),
  UNIQUE KEY `process_id_title_unique` (`process_id`,`title`),
  FOREIGN KEY (`job_id`) REFERENCES `jobs`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`process_id`) REFERENCES `processes`(`id`) ON DELETE CASCADE
);
