<!DOCTYPE html>
<html>
    <head>
        <title>Complete adding site to research table</title>
    </head>
    <body>
        <?php
            require("opendbo.php");
            $tname = "sitesfinders";
            $stitle=addslashes($_POST["stitle"]);
            $sdate= $_POST["sdate"];
            $sdesc= addslashes($_POST["sdesc"]);
            $surl= $_POST["surl"];
            $scat = addslashes($_POST["scat"]);
            $un = $_POST['un'];
            $epw = $_POST['pw'];
            $query = "SELECT * FROM finders WHERE username='$un' AND epw='$epw'";
            $result = mysql_query($query, $link);
            if ($row=mysql_fetch_array($result)){
                $fid = $row['finderid'];
                $query = "INSERT INTO $tname values ('0','$stitle','$sdate','$surl','$sdesc','$scat','$fid')";
                $result = mysql_query($query, $link);
                if ($result){
                    print("The site was successfully added.<br>\n");
        ?>
        Add [another] web site? <br/>
        <form name="f" action="addsite.php" method="post">
            Site: <input name="stitle" placeholder="Your name for site"/><br/>
            Date: <input name="sdate" type="date" placeholder="YYYY-MM-DD" /><br/>
            Site description: <br/>
            <textarea name="sdesc" cols="30" rows="2"></textarea><br>
            URL: <input name="surl" type="url" placeholder="http://"/><br/>
            Category: <input name="scat" type="text"/><hr/>
            <?php
                print ("Username: <input name='un' type='email' value='");
                print ($un."' />");
                print ("Password: <input name='pw' type='password' value='$epw'/>");
            ?>
            <input type="submit" value="Submit Site"/>
        </form>
        <a href="showsites.php">Show all websites </a> or <a href="showsitesbycategory1.php">Show sites for a category </a>
        <?php
                } else {
                    print ("The site was NOT successfully added. <br>\n");
                }
            } else {
                print ("Problem with username and/or password and/or data.");
            }
        ?>
    </body>
</html>