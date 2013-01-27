<?php

//Get strip info, by default the latest
//Return json

$db = mysql_connect("localhost", "root", "l0c4lh0st", false);

mysql_query("USE guedesav_comic", $db);
$comic = mysql_fetch_assoc(mysql_query("SELECT * FROM strips WHERE date <= NOW() ORDER BY num DESC LIMIT 1"));

header("Content-Type: application/json");
?>
{
    "num": <?php print $comic['num']; ?>,
    "date": "<?php print $comic['date']; ?>",
    "title": "<?php print $comic['title']; ?>",
}
