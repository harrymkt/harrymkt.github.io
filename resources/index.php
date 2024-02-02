<!doctype html>
<html>
<head>
<?php
require_once("{$_SERVER['DOCUMENT_ROOT']}/scripts/header.php");
sett("useful resources");
?>
</head>
<body>
<?php
include("{$_SERVER['DOCUMENT_ROOT']}/scripts/nav.php");
?>
<h1 id="mainc">resources</h1>
<p>these resources may useful for you</p>

<?php
$files = array(
  array(
"name" => "survive the wild audiogame text guide",
"url" => "stw_text_guide",
"modified_date" => file_get_contents("stw_text_guide/modified.txt"),
"published" => "stw_text_guide/published.txt")
);

// Custom sorting function to sort by last modified date
function sortByModifiedDate($a, $b) {
  $a_time = strtotime($a['modified_date']);
  $b_time = strtotime($b['modified_date']);
  return $b_time - $a_time;
}

usort($files, 'sortByModifiedDate');

foreach ($files as $file) {
  echo "<h2><a href=\"" . $file["url"] . "\">" . $file["name"] . "</a></h2>";

  //modified
  echo "<p>last modified: ";
  $md = "not yet";
  $f = strtotime($file["modified_date"]);
  if ($f != "") $md = $f;
  if ($md == "not yet" or $md == "") echo $md;
  else echo ago($md);
  echo "</p>";

  //published
  echo "<p>published on: ";
  $pd = "no date";
  $pf = strtotime(file_get_contents($file["published"]));
  if ($pf != "") $pd = $pf;
  if ($pd == "" or $pd == "no date") echo $pd;
  else echo ago($pd);

}
?>



<?php
include("{$_SERVER['DOCUMENT_ROOT']}/scripts/footer.php");
?>
</body>
</html>