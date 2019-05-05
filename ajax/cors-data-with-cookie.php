<?php
//sub.local.com
  sleep(1);
  header('Access-Control-Allow-Origin:http://dev.local.com');
  header('Access-Control-Allow-Credentials:true');
  header('Set-Cookie:name=hah');
  $name = $_COOKIE['name'];

  header('Access-Control-Expose-Headers: Date'
  echo "{\"data\" :{\"name\":\"abc\"},\"errno\":0}"
?>