<?php
    function createtable($tname,$fields) {
        global $DBname, $link;
        $query = "DROP TABLE $tname";
        mysql_ query($query,$link);
        $query="CREATE TABLE ".$tname."(".$fields.")";
        if (mysql_query($query,$link)) {
            print ("The table, $tname, was created successfully.<br>\n");
        } else {
            print ("The table, $tname, was not created. <br>\n");
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Creating order project tables</title>
</head>
<body>
    <?php
        require("opendbo.php");
        $tname = "sitesfinders";
        $fields="sid INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY
            KEY, stitle char(50), sdate DATE, surl char(100),
            sdescription TEXT, scategory char(30), finderid INT ";
        createtable($tname, $fields);
        $tname = "finders";
        $fields = "finderid INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, username char(50), epw char(64)";
        createtable($tname,$fields);
        mysql_close($link);
    ?>
</body>
</html>