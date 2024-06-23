const materialsQueries = {
  "getAll": "SELECT * FROM `materials` ORDER BY `id` DESC; ",
  "getAllByJob": "SELECT * FROM `materials` WHERE `job_id` = ? ORDER BY `id` DESC; ",
  "getAllByProcess": "SELECT * FROM `materials` WHERE `process_id` = ? ORDER BY `id` DESC; ",
  "getByTitle": "SELECT * FROM `materials` WHERE `title` = ?; ",
  "getIdByJob": "SELECT `id` FROM `materials` WHERE `job_id` = ? AND `title` = ?; ",
  "getIdByProcess": "SELECT `id` FROM `materials` WHERE `process_id` = ? AND `title` = ?; ",
  "addNew": "INSERT INTO `materials` (`job_id`, `process_id`, `title`, `description`, `possible_price`) VALUES (?, ? ,?, ?, ?); ",
  "changeData": "UPDATE `materials` SET `title` = ?, `description` = ?, `possible_price` = ? WHERE `id` = ?; ",
  "remove": "DELETE FROM `materials` WHERE `id` = ?; "
};

export default materialsQueries;