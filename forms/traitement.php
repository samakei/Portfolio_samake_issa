<?php
// Fonction pour valider l'adresse e-mail
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Vérifiez si le formulaire a été soumis
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérez et assainissez les données du formulaire
    $nom = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $prenom = htmlspecialchars($_POST['first_name'], ENT_QUOTES, 'UTF-8');
    $telephone = htmlspecialchars($_POST['tel'], ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

    // Validez l'adresse e-mail
    if (!isValidEmail($email)) {
        echo 'Erreur : adresse e-mail invalide.';
        exit;
    }

    // Spécifiez votre adresse e-mail ici
    $to = 'samakeissa10@outlook.fr'; 
    $subject = 'Nouveau message de votre formulaire de contact';
    
    // Créez le corps de l'e-mail
    $body = "Vous avez reçu un nouveau message de votre formulaire de contact.\n\n";
    $body .= "Nom: $nom\n";
    $body .= "Prénom: $prenom\n";
    $body .= "Téléphone: $telephone\n";
    $body .= "E-mail: $email\n";
    $body .= "Message:\n$message\n";

    // En-têtes de l'e-mail
    $headers = "From: samakeissa10@outlook.fr" . "\r\n"; // Utilisez une adresse e-mail de votre domaine
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Envoyez l'e-mail
    if(mail($to, $subject, $body, $headers)) {
        echo 'Le message a été envoyé avec succès.';
    } else {
        echo 'Erreur : le message n\'a pas pu être envoyé.';
    }
}
?>