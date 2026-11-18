<?php
 $host= "sql212.infinityfree.com";
 $user="if0_43470597";
 $password="9KDG1JIVviUE";
 $db="if0_43470597_portafolio";

 $con=mysqli_connect($host,$user,$password,$db)or die ("Problemas al Conectar");
   mysqli_select_db($con,$db);


   $nombres =$_POST["nombres"];
   $correo =$_POST["correo"];
   $celular=$_POST["celular"];
   $mensaje =$_POST["mensaje"];
   $sql = "INSERT INTO portafolio VALUES ('$nombres', '$celular', '$correo', '$mensaje')";
   
   $ejecutar=mysqli_query($con,$sql);

   if(!$ejecutar){
     echo"<script>alert('Problemas al Enviar')</script>";
     echo"<script>window.location.href=('index.html')</script>";
   }
   else{
     echo"<script>alert('Datos enviado correctamente')</script>";
     echo"<script>window.location.href=('index.html')</script>";

   }


?>