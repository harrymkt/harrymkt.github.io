<?php
function pvupdate($pfile)
{
$vcount=0;
$scount=file_get_contents($pfile);
$vcount=bcadd($scount,0);
$vcount++;
file_put_contents($pfile,$vcount);
}
function pvread($prfile)
{
$vrcount=bcadd(file_get_contents($prfile),0);
return $vrcount;
}

function crpname()
{
$current_url = $_SERVER['REQUEST_URI'];
$path = parse_url($current_url, PHP_URL_PATH);
$page_name = basename($path);
return $page_name;
}
function addpv()
{
echo"<h1>views</h1>";
echo "<p>".pvread("views.txt")." reads!</p>";
}
?>