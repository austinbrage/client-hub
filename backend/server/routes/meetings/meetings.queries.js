const meetingsQueries = {
  "getAll": "SELECT * FROM `meetings` ORDER BY `id` DESC; ",
  "getAllByClient": "SELECT * FROM `meetings` WHERE `client_id` = ? ORDER BY `id` DESC; ",
  "getByTitle": "SELECT * FROM `meetings` WHERE `title` = ?; ",
  "getId": "SELECT `id` FROM `meetings` WHERE `client_id` = ? AND `title` = ?; ",
  "addNew": "INSERT INTO `meetings` (`client_id`, `title`, `description`, `date_time`) VALUES (?, ? ,?, ?, ?); ",
  "changeData": "UPDATE `meetings` SET `title` = ?, `description` = ?, `date_time` = ? WHERE `id` = ?; ",
  "remove": "DELETE FROM `meetings` WHERE `id` = ?; "
};

export default meetingsQueries;