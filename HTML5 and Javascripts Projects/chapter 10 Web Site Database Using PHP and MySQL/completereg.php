<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Complete registering finder</title>
</head>
<body>
    <?php
        require("opendbo.php");
        $tname = "finders";
        $finder = $_POST["un"];
        $epw = $_POST["pw"];
        $query = "INSERT INTO $tname values ('0','$finder','$epw')";
        $result = mysql_query($query, $link);
        if ($result) {
            print("The finder was successfully added.<br>\n"); 
        } else {
            print ("The finder was NOT successfully added. <br>\n"); 
        }
    ?>
</body>
</html>