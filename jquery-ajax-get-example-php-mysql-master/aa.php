<?php
 $conn = mysql_connect('db4free.net','tranquangviet','matkhaumoi1');
 if(!$conn){
  die('Mysql connection error '.mysql_error());
 }
 
 $db = mysql_select_db('loinhancuoi',$conn);
 if(!$db){
  die('Database selection failed '.mysql_error());
 }
 
 $sql = 'SELECT *FROM Test';
 
 $result = mysql_query($sql,$conn);
 
 
 $data = array();
 while($row = mysql_fetch_array($result)){
  $row_data = array(
   'ID' => $row['ID'],
   'Number' => $row['Number']
   );
  array_push($data, $row_data);
 }
 
 echo json_encode($data);
?>