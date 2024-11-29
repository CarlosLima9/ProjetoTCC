<?php
include '../php/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];

    // Verifica se o e-mail existe
    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario) {
        // Gerar token de recuperação
        $token = bin2hex(random_bytes(50)); // Gera um token único
        $data_expiracao = date('Y-m-d H:i:s', strtotime('+1 hour'));

        // Armazena o token no banco de dados
        $stmt = $pdo->prepare("INSERT INTO recuperacao_senha (usuario_id, token, data_expiracao) VALUES (:usuario_id, :token, :data_expiracao)");
        $stmt->execute([
            'usuario_id' => $usuario['id'],
            'token' => $token,
            'data_expiracao' => $data_expiracao
        ]);

        // Enviar o e-mail de recuperação
        $link = "http://localhost/plataforma/redefinir_senha.php?token=$token";
        mail($usuario['email'], "Recuperação de Senha", "Clique no link para redefinir sua senha: $link");

        echo "Um link para redefinir a sua senha foi enviado para o seu e-mail.";
    } else {
        echo "E-mail não encontrado!";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperação de Senha</title>
</head>
<body>
    <h2>Recuperação de Senha</h2>
    <form method="POST" action="">
        <label for="email">E-mail:</label><br>
        <input type="email" name="email" id="email" required><br><br>
        <button type="submit">Enviar Link de Recuperação</button>
    </form>
</body>
</html>
