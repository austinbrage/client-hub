-- getAll
    SELECT * FROM `processes`
    ORDER BY `id` DESC;

-- getAllByJob
    SELECT * FROM `processes`
    WHERE `job_id` = ?
    ORDER BY `id` DESC;

-- getByTitle
    SELECT * FROM `processes`
    WHERE `title` = ?;

-- getId
    SELECT `id` FROM `processes`
    WHERE `job_id` = ? AND `title` = ?;

-- addNew
    INSERT INTO `processes` (`job_id`, `title`, `status`, `description`, `deadline`)
    VALUES (?, ? ,?, ?, ?);

-- changeData
    UPDATE `processes`
    SET `title` = ?,
        `status` = ?,
        `description` = ?,
        `deadline` = ?
    WHERE `id` = ?;

-- remove
    DELETE FROM `processes`
    WHERE `id` = ?;
    