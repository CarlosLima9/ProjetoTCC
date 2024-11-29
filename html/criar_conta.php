<?php
include '../php/db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Verificar se o e-mail já está registrado
    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = :email");
    $stmt->execute(['email' => $email]);
    if ($stmt->fetch()) {
        $erro = "E-mail já cadastrado!";
    } else {
        // Criptografar a senha
        $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

        // Inserir o novo usuário no banco de dados
        $stmt = $pdo->prepare("INSERT INTO usuarios (email, senha, nome) VALUES (:email, :senha, :nome)");
        $stmt->execute([
            'email' => $email,
            'senha' => $senha_hash,
            'nome' => $nome
        ]);

        header('Location: login.php');
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar Conta</title>
</head>
<body>
    <h2>Criar Conta</h2>
    <form method="POST" action="">
        <label for="nome">Nome:</label><br>
        <input type="text" name="nome" id="nome" required><br><br>
        <label for="email">E-mail:</label><br>
        <input type="email" name="email" id="email" required><br><br>
        <label for="senha">Senha:</label><br>
        <input type="password" name="senha" id="senha" required><br><br>
        <button type="submit">Criar Conta</button>
    </form>
    <?php if (isset($erro)): ?>
        <p style="color: red;"><?php echo $erro; ?></p>
    <?php endif; ?>
</body>
</html>
