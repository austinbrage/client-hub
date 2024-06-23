const jobsQueries = {
  "getAll": "SELECT * FROM `jobs` ORDER BY `id` DESC; ",
  "getAllByClient": "SELECT * FROM `jobs` WHERE `client_id` = ? ORDER BY `id` DESC; ",
  "getByTitle": "SELECT * FROM `jobs` WHERE `title` = ?; ",
  "getId": "SELECT `id` FROM `jobs` WHERE `client_id` = ? AND `title` = ?; ",
  "addNew": "INSERT INTO `jobs` (`client_id`, `title`, `price`, `status`, `deadline`, `description`) VALUES (?, ? ,?, ?, ?); ",
  "changeData": "UPDATE `jobs` SET `title` = ?, `price` = ?, `status` = ?, `deadline` = ?, `description` = ? WHERE `id` = ?; ",
  "remove": "DELETE FROM `jobs` WHERE `id` = ?; "
};

export default jobsQueries;