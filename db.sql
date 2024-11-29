CREATE DATABASE plataforma;
Query OK, 1 row affected (0.01 sec)

mysql> USE plataforma;
Database changed
mysql> CREATE TABLE usuarios (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,
    ->     email VARCHAR(255) UNIQUE NOT NULL,
    ->     senha VARCHAR(255) NOT NULL,
    ->     nome VARCHAR(255) NOT NULL,
    ->     data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -> );
Query OK, 0 rows affected (0.03 sec)

mysql> CREATE TABLE recuperacao_senha (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,
    ->     usuario_id INT NOT NULL,
    ->     token VARCHAR(255) NOT NULL,
    ->     data_expiracao TIMESTAMP NOT NULL,
    ->     FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> CREATE TABLE progresso_quiz (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,
    ->     usuario_id INT NOT NULL,
    ->     quiz_id INT NOT NULL,
    ->     pontuacao INT NOT NULL,
    ->     data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ->     FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql>
mysql> CREATE TABLE favoritos (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,
    ->     usuario_id INT NOT NULL,
    ->     modulo_id INT NOT NULL,
    ->     FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
    -> );
Query OK, 0 rows affected (0.03 sec)