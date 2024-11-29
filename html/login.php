<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include '../php/db.php';  

    $email = $_POST['email'];
    $senha = $_POST['senha'];

    
    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario && password_verify($senha, $usuario['senha'])) {
        $_SESSION['usuario_id'] = $usuario['id'];
        $_SESSION['email'] = $usuario['email'];
        header('Location: ambienteAluno.html');
        exit;
    } else {
        $erro = "E-mail ou senha inválidos!";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../css/body.css">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="stylesheet" href="../css/header.css">
</head>
<body>
    <div class="page">
        <img src="../img/PREPAREDUC.png" alt="Logo Plataforma">
        
        <div class="areaLogin">
            <div class="areaDados">
                <div class="dados">
                    <h3>Entrar</h3>
                    <form method="POST" action="">
                        <label for="email">E-mail*</label><br/><br/>
                        <input type="email" name="email" id="email" required><br/><br/>
                        <label for="senha">Senha*</label><br/>
                        <input type="password" name="senha" id="senha" required><br/><br/>
                        <button class="btnEntrar" id="btnEntrar" type="submit">Entrar</button>
                    </form>
                    <?php if (isset($erro)): ?>
                        <p style="color: red;"><?php echo $erro; ?></p>
                    <?php endif; ?>
                    <p> * Campos obrigatórios</p>
                    <p>Precisa de uma conta? <a href="criar_conta.php" id="criarConta">Criar uma conta</a></p>
                   <a href="index.html"> <button class="btnVoltar" id="btnVoltar">Voltar</button> </a>
                </div> 
            </div>
        </div>
    </div>
</body>
<script src="../js/scriptLogin.js"></script>
</html>
