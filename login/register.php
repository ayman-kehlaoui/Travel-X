<?php
require_once '../db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password !== $confirm_password) {
        die("Passwords do not match!");
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare("INSERT INTO users (fullname, email, username, password) VALUES (?, ?, ?, ?)");
        $stmt->execute([$fullname, $email, $username, $hashed_password]);
        header("Location: index.html?registered=true");
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) {
            die("Username or Email already exists!");
        }
        die("Error: " . $e->getMessage());
    }
}
?>
