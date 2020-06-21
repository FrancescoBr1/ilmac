<?php

require("../mpdf/mpdf.php");
require('class.json.php');


//$value=$_POST['tutto'];




$value = $_POST['tutto'];



//$value_utf8 = utf8_encode($value);
$data = Json::decode($value);




//var_dump($data);
//$data =json_decode($value_utf8);


//var_dump($value);


$email = $_POST['em'];
$nome = $_POST['name'];
$cognome = $_POST['lastname'];
$city = $_POST['citt'];
$tel = $_POST['tel'];
$tipo = $_POST['tipo'];
$lang = $_POST['lingua'];
$tot_domande=0;
$lang_slug="";

switch ($lang) {
    case 1:
        $lang_slug=" Inglese ";
        $tot_domande=75;
        break;
    case 2:
        $lang_slug=" Tedesco ";
        $tot_domande=30;
        break;
    case 3:
        $lang_slug=" Francese ";
        $tot_domande=44;
        break;
    case 4:
        $lang_slug=" Portoghese ";
        $tot_domande= 31;
        break;
    case 5:
        $lang_slug=" Russo ";
        $tot_domande= 58;
        break;
    case 6:
        $lang_slug=" Spagnolo ";
        $tot_domande= 108;
        break;
}

$mpdf = new Mpdf();


$test = "<head> <style>div.indent{ padding-left: 1.5em }</style><style>div.indent2{ padding-left: 1.5em;    background:red; color:white; padding: -15px 0 -15px 10px; margin-bottom:10px; } h2 {
        width: 100%; text-align:center;}</style><style>div.indent3{ padding-left: 1.5em;    background:blue; }</style></head><h2>Dati personali utente</h2>";
$test .= "<br> <h3> Nome: " . " " . $nome . "</h3><h3>Cognome: " . $cognome . "</h3><h3>Email: " . $email . "</h3><h3>Telefono: " . $tel . "</h3><h3>City: " . $city . "</h3><h3>Tipo Utente: " . $tipo . "</h3><h2>Esito Test</h2>";


$corpo_domande = "";
$corrette = 0;
$sbagliate = 0;
$lista_sbagliate = "";
$i = 1;
$non_risposte=$tot_domande-count($data);
$alphabet = array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

foreach ($data as $q) {


    if ($q["passed"] == "true") {
        $corpo_domande .= "<h3>" . $i . ") " . $q["text"] . "</h3>";

        $corrette++;
    } else {
        $corpo_domande .= "<h3 style='background-color: red;'>" . $i . ") " . $q["text"] . " [Attenzione risposta sbagliata]</h3>";
        $sbagliate++;
        $lista_sbagliate .= " -" . $i;

    }
    $opzioni = $q["options"];

    foreach ($opzioni as $key => $option) {

        $scelta = "";
        $correct = "";

        if ($option["selected"] == "true") $scelta = "[Risposta scelta]";
        if ($option["correct"] == "true") $correct = "[Risposta corretta]";

        if ($q->passed == "false")
            $corpo_domande .= '<p style="padding-left:30px; margin: -20px 0 0 0;"  >' . "(" . $alphabet[$key] . ") " . $option["value"] . " " . $scelta . " " . $correct . "</p><br>";
        else
            $corpo_domande .= '<p style="padding-left:30px; margin: -20px 0 0 0;"  >' . "(" . $alphabet[$key] . ") " . $option["value"] . " " . $scelta . " " . $correct ."</p><br>";


    }


    $i = $i + 1;

}

$test .= "<h3>Sbagliate: " . $sbagliate . "</h3>";
$test .= "<h3>Corrette: " . $corrette . "</h3>";
$test .= "<h3>Risposte non date: " . $non_risposte . "</h3>";


$test .= "<h3 style='text-align:left;'>Lista Sbagliate: " . $lista_sbagliate . "</h3>";
$test .= "<h2>Correzione Completa</h2>";
$test .= $corpo_domande;
$mpdf->WriteHTML($test);


$mpdf->Output($email . ".pdf", 'F');


//$data[0]->options[0]->value


//$to = 'ilmac@corsi.toscana.it';

$to = 'alexanderinaldi@gmail.com';

//sender
$from = $email;
$fromName = 'Email Da Sito';

//email subject
$subject = 'Nuovo test di'.$lang_slug.'da sito';

$htmlContent = '<h1>Hai ricevuto un nuovo test dal sito</h1>
    <p>Un utente ha eseguito il test di'.$lang_slug.' scarica il file in allegato con la correzione.</p>';

//attachment file path
$file = $email . ".pdf";

//email body content


//header for sender info
$headers = "From: $fromName" . " <" . $from . ">";

//boundary
$semi_rand = md5(time());
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

//headers for attachment
$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";

//multipart boundary
$message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
    "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n";

//preparing attachment
if (!empty($file) > 0) {
    if (is_file($file)) {
        $message .= "--{$mime_boundary}\n";
        $fp = @fopen($file, "rb");
        $data = @fread($fp, filesize($file));

        @fclose($fp);
        $data = chunk_split(base64_encode($data));
        $message .= "Content-Type: application/octet-stream; name=\"" . basename($file) . "\"\n" .
            "Content-Description: " . basename($file) . "\n" .
            "Content-Disposition: attachment;\n" . " filename=\"" . basename($file) . "\"; size=" . filesize($file) . ";\n" .
            "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
    }
}
$message .= "--{$mime_boundary}--";
$returnpath = "-f" . $from;

//send email
$mail = @mail($to, $subject, $message, $headers, $returnpath);


//email sending status
echo $mail ? "<h1>Mail sent.</h1>" : "<h1>Mail sending failed.</h1>";


?>