<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

$nome = addslashes($_POST['nome']);
$sobreNome = addcslashes($_POST['sobreNome']);
$numeroW = addcslashes($_POST['tel']);
$email = addslashes($_POST['email']);
$msg = addslashes($_POST['msg']);

$to = "alexanderjoshua2004@gmail.com";
$subject = "Contato - Portfólio";
$body = "Chefe, tem email novo!\r\n".
        $nome. " gostaria de entrar em contato para saber sobre seus serviços.\r\n".
        "Informações completas do cliente.\r\n".
        "Nome: ".$name." ".$sobreNome."\r\n".
        "Email: ".$email. "\r\n".
        "Whatsapp: wa.me/+55".$numeroW."\r\n".
        "Mensagem: ".$msg;

$header = "From:emaildoSystem8@emailsystem.com"."\r\n".
            "Reply-To:".$email."\r\n".
            "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){

    header('Location: /index.html');

    echo("Email enviado com sucesso!");

}else{

    header('Location: /index.html');

    echo("Email não enviado");

}

}else{

    echo("Campo Email não preenchido!");

}

?>