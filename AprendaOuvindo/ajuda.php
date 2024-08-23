<?php
    require_once('interface/conexao.php');

    $email=$_POST['email'];
    $texto=$_POST['texto'];

    $ajuda=mysqli_query($ligacao,"INSERT INTO `Ajuda` (`Id`, `email`, `texto`) VALUES (NULL, '$email', '$texto')");

    if($ajuda==true){
        echo"
            <script>
                alert('Recebemos a tua mensagem Retornaremos por Email');
                window.location.href='ajuda.httml';
            </script>
        ";
    }
    else{
             echo"
            <script>
                alert('Nao foi Possivel enviar a sua mensagem verifica se prencheu direito os campos');
                window.location.href='ajuda.httml';
            </script>
        ";
    }
?>