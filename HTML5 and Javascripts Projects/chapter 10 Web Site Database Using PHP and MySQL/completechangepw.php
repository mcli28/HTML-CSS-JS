<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Complete change finder password</title>
</head>
<body>
    <?php
        require("opendbo.php");
        $tname = "finders";
        $finder = $_POST["un"];
        $epw1 = $_POST["oldpw"];
        $epw2 = $_POST["newpw"];
        $query = "UPDATE $tname SET epw = '$epw2' WHERE username = '$finder' AND epw = '$epw1'";
        $result = mysql_query($query, $link);
        if ($result) {
            print("The password was changed.<br>\n");
        } else {
            print ("The password was NOT successfully changed. <br>\n");
        }
    ?>
</body>
</html>