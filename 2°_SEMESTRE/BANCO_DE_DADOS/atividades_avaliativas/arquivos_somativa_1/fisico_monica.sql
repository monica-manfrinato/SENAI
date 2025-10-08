CREATE DATABASE biblioteca_comunitaria;
USE biblioteca_comunitaria;

CREATE TABLE livro(
ISBN VARCHAR(50) PRIMARY KEY NOT NULL,
titulo VARCHAR(70) NOT NULL,
ano_publicacao INTEGER NOT NULL,
editora VARCHAR(30)
);

CREATE TABLE exemplares(
id_exemplar VARCHAR(50) PRIMARY KEY NOT NULL,
ISBN VARCHAR(50) NOT NULL,
status_exemplar VARCHAR(30)
);

CREATE TABLE autor_livro(
id_autor_livro VARCHAR(50) PRIMARY KEY NOT NULL,
id_autor VARCHAR(50) NOT NULL,
ISBN VARCHAR(50)
);

CREATE TABLE emprestimos(
id_emprestimo VARCHAR(50) PRIMARY KEY NOT NULL,
id_exemplar VARCHAR(50) NOT NULL,
id_matricula VARCHAR(50) NOT NULL,
data_emprestimo DATE NOT NULL,
previsao_devolucao DATE NOT NULL,
data_devolucao DATE
);

CREATE TABLE autor(
id_autor VARCHAR(50) PRIMARY KEY NOT NULL,
nome_autor VARCHAR(100) NOT NULL,
nacionalidade VARCHAR(50) NOT NULL
);

CREATE TABLE membros(
id_matricula VARCHAR(50) PRIMARY KEY NOT NULL,
nome_completo VARCHAR(100) NOT NULL,
endereco VARCHAR(200) NOT NULL,
telefone_contato VARCHAR(30)
);
CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'mudar123';
GRANT ALTER ON biblioteca_comunitaria.livro TO 'estagiario'@'localhost';

ALTER TABLE livros ADD COLUMN genero VARCHAR(50);