-- getAll
    SELECT * FROM `clients`
    ORDER BY `id` DESC;

-- getAllByUser
    SELECT * FROM `clients`
    WHERE `user_id` = ?
    ORDER BY `id` DESC;

-- getByName
    SELECT * FROM `clients`
    WHERE `name` = ?;

-- getId
    SELECT `id` FROM `clients`
    WHERE `user_id` = ? AND `name` = ?;

-- addNew
    INSERT INTO `clients` (`user_id`, `name`, `contact_number`, `contact_email`, `description`)
    VALUES (?, ? ,?, ?, ?);

-- changeData
    UPDATE `clients`
    SET `name` = ?,
        `contact_number` = ?,
        `contact_email` = ?,
        `description` = ?
    WHERE `id` = ?;

-- remove
    DELETE FROM `clients`
    WHERE `id` = ?;
    