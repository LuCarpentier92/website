<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "lucas.carpentier92014@gmail.com"; // Remplacez par votre adresse email
    $subject = "Nouveau message depuis votre portfolio";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Une erreur est survenue. Veuillez réessayer.";
    }
}
?>
