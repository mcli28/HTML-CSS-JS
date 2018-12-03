<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Delele some sites</title>
</head>
<body>
    <?php
        require("opendbo.php");
        $un = $_POST['un'];
        $epw = $_POST['pw'];
        $query = "SELECT * FROM finders WHERE username='$un' AND epw='$epw'";
        $result = mysql_db_query($DBname,$query, $link);
        if ($row=mysql_fetch_array($result)){
            $ids = $_POST['group'];
            $deletelist = join (', ',$ids);
            $query = "DELETE FROM sitesfinders WHERE sid IN ($deletelist)";
            $result=mysql_query($query, $link);
            if ($result){
                print ("The " . count($ids)." selected sites were deleted.");
            } else {
                print ("Problem with deletion.");
            }
        } else {
            print ("Problem with username and/or password.");
        }
        mysql_close($link);
    ?>
</body>
</html>