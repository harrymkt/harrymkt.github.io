<html>
<head>
<?php
require_once("{$_SERVER['DOCUMENT_ROOT']}/scripts/header.php");
sett("changes of survive the wild text guide");
pvupdate("views.txt");
?>
</head>
<body>
<?php
include("{$_SERVER['DOCUMENT_ROOT']}/scripts/nav.php");
?>
<h1 id="mainc">changes of survive the wild(text guide)</h1>

<?php
echo file_get_contents("c.txt");
?>

<?php
addpv();
include("{$_SERVER['DOCUMENT_ROOT']}/scripts/footer.php");
?>
</body>
</html>