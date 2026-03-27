<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    if (empty($name) || empty($email) || empty($message)) {
        echo "<script>alert('Please fill in all fields.'); window.location.href='contact.html';</script>";
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Please enter a valid email address.'); window.location.href='contact.html';</script>";
        exit();
    }

    $to = "your-email@example.com"; // apni email yahan likh dena
    $subject = "New Contact Form Message - BrightWeb Agency";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Message could not be sent. PHP file is working but mail server may not be configured on localhost.'); window.location.href='contact.html';</script>";
    }
}
?>