#Elabore os comandos CREATE TABLE para cada tabela do seu modelo lógico.
#Defina tipos de dados (INT, VARCHAR, TEXT, DATETIME, etc.) adequados para cada coluna.
#Implemente as restrições de PRIMARY KEY.
#Aplique a restrição NOT NULL para os campos que são de preenchimento obrigatório.

CREATE DATABASE db_blog;

USE db_blog;
CREATE TABLE comentario(
id_comentario INTEGER,
id_autor INTEGER,
id_postagem INTEGER,
conteudo VARCHAR(500),
data_comentario DATE,
hora TIME
);

CREATE TABLE autor(
id_autor INTEGER,
nome VARCHAR(50),
email VARCHAR(100)
);

CREATE TABLE postagem(
id_postagem INTEGER,
id_autor INTEGER,
conteudo VARCHAR(500),
data_postagem DATE,
hora TIME,
titulo VARCHAR(50)
);

drop table comentario;
drop table autor;
drop table postagem;