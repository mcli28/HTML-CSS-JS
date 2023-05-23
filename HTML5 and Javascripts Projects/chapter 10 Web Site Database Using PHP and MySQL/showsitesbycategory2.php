<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Show sites in selected category</title>
</head>
<body>
    <?php
        $scat = $_GET['pickedcategory'];
        print "Sites in $scat category <br/>";
        require("opendbo.php");
        $query="SELECT * FROM sitesfinders as s JOIN finders as f WHERE s.finderid = f.finderid AND scategory = '$scat' ORDER BY sdate DESC";
        $result=mysql_query($query, $link);
        $NoR=mysql_num_rows($result);
        if ($NoR==0){
            print ("No sites in that category");
        } else {
            print("<table border='1'>");
            print("<tr><th>Title</th><th>URL</th><th>Date</th><th>Description </th><th>Finder </th></tr>");
            while ($row=mysql_fetch_array($result)){
                print("<tr>");
                print("<td> ".$row['stitle']."</td>");
                print ("<td><a href='".$row['surl'] ."'target='_new'>".$row['surl']."</a></td>");
                print ("<td>".$row['sdate']."</td>");
                print ("<td>".$row['sdescription']."</td>");
                print ("<td>".$row['username']."</td>");
                print ("</tr>");
            }
            print ("</table>");
        }
        mysql_close($link); 
    ?>
</body>
</html>