<html>
<head>
<?php
require_once("{$_SERVER['DOCUMENT_ROOT']}/scripts/header.php");
sett("survive the wild text guide");
$dllink="stw_text_guides.zip";
$dlmb="less than 100 KB";
?>
</head>
<body>
<?php
include("{$_SERVER['DOCUMENT_ROOT']}/scripts/nav.php");
?>
<h1 id="mainc">survive the wild(text guide)</h1>
<p>welcome to survive the wild text guide resource page!</p>
<p>the text guides give you possibilities to craft items, go from map to map, complete quests, and more.</p>
<h2>changes to this guides</h2>
<p>I may update the guides at any time when I have available resources for them. it is adviseable to read them If you wish.</p>
<p><a href="changes">click here for changes</a></p>
<h2>download</h2>
<?php
echo"<p><a href='".$dllink."'>download the guides (".$dlmb.")</a></p>";
?>

<?php
include("{$_SERVER['DOCUMENT_ROOT']}/scripts/footer.php");
?>
</body>
</html>