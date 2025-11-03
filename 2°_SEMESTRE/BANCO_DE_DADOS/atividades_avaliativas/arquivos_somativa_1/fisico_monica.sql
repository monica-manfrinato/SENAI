CREATE DATABASE biblioteca_comunitaria;
USE biblioteca_comunitaria;
drop database biblioteca_comunitaria;
drop table autor;
drop table autor_livro;
drop table livro; #não da pra excluir uma tabela que possuí uma informação como chava estrangeira em outra tabela, e por isso não permite apagar enquanto autor_livro ainda existir

##############################################################################################################################################################################################################

CREATE TABLE livro(
ISBN VARCHAR(50) PRIMARY KEY NOT NULL,
titulo VARCHAR(70) NOT NULL,
ano_publicacao INTEGER NOT NULL,
editora VARCHAR(30)
);

INSERT INTO livro(ISBN, titulo, ano_publicacao, editora) VALUE ('123456789', 'Diário de um Banana', '2009', 'SENAI'), ('9876543210', 'Diário de um Banana 2', '2010', 'SENAI');
select * from livro;

INSERT INTO livro(ISBN, titulo, ano_publicacao, editora) VALUE 
('978-85-325-3078-3', 'Harry Potter e a Pedra Filosofal', 1997, 'Rocco'),
('978-85-7126-061-0', 'Dom Casmurro', 1899, 'Editora Clássica');

UPDATE livro
SET ano_publicacao = 2019
WHERE ISBN = '978-85-7126-061-0';

UPDATE autor
SET nome_autor = 'J.K. Rowling (Joanne Rowling)', nacionalidade = 'Britânica (Reino Unido)'
WHERE id_autor = 2;

SELECT * from livro
WHERE ano_publicacao < 2000;
##############################################################################################################################################################################################################

CREATE TABLE exemplares(
id_exemplar VARCHAR(50) PRIMARY KEY NOT NULL,
ISBN VARCHAR(50) NOT NULL,
status_exemplar VARCHAR(30),

CONSTRAINT FK_ISBN_exemplar  FOREIGN KEY (ISBN) REFERENCES livro(ISBN) 
);

INSERT INTO exemplares(id_exemplar, ISBN, status_exemplar) VALUE ('1111', '123456789', 'Emprestado');
INSERT INTO exemplares(id_exemplar, ISBN, status_exemplar) VALUE ('1', '1234567810', 'Emprestado');

select * from exemplares;
##############################################################################################################################################################################################################

CREATE TABLE autor(
id_autor INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome_autor VARCHAR(100) NOT NULL,
nacionalidade VARCHAR(50) NOT NULL
);


#INSERT INTO autor(nome_autor, nacionalidade) VALUE ('Daniel', 'Brasileiro'); #não coloca o id_autor pq ele ja é auto_increment
INSERT INTO autor(nome_autor, nacionalidade) VALUE ('Marlon Greg', 'Brasileiro'), ('Machado de Assis', 'Brasileiro'), ('J.K. Rowling', 'Britânica'); #esse mesmo comando pode ser executado utilizando a query de cima, pois tudo vai ficar armazenado assim que é executado
select * from autor;

DELETE from autor
WHERE id_autor = 2; #Vai excluir o autor que ta no ID 2
##############################################################################################################################################################################################################

CREATE TABLE autor_livro(
id_autor_livro VARCHAR(50) PRIMARY KEY NOT NULL,
id_autor INTEGER NOT NULL,
ISBN VARCHAR(50),

CONSTRAINT FK_ISBN_livro  FOREIGN KEY (ISBN) REFERENCES livro(ISBN), #cria a chave estrangeirae nomeia ela, o constraint é utilizado justamente para dar o nome
CONSTRAINT id_autor  FOREIGN KEY (id_autor) REFERENCES autor(id_autor) 
);

INSERT INTO autor_livro(id_autor_livro, id_autor, ISBN) VALUE ('12345', '1', '123456789'), ('23456', '2', '9876543210'); #não dá pra colocar o 2, pq só criou 1 autor, o Daniel
select * from autor_livro;

DELETE from autor_livro
WHERE id_autor = 2;
##############################################################################################################################################################################################################

CREATE TABLE membros(
id_matricula VARCHAR(50) PRIMARY KEY NOT NULL,
nome_completo VARCHAR(100) NOT NULL,
endereco VARCHAR(200) NOT NULL,
telefone_contato VARCHAR(30)
);

INSERT INTO membros(id_matricula, nome_completo, endereco, telefone_contato) VALUE ('2215', 'Mônica Cotrim Manfrinato', 'Rua Marechal Deodoro da FOnseca', 11975268516);
select * from membros;
INSERT INTO membros(id_matricula, nome_completo, endereco, telefone_contato) VALUE(101, 'Ana Silva', 'Rua A, 123', '11-98765-4321'),
(102, 'Bruno Costa', 'Av. B, 456', '11-91234-5678'),
(103, 'Carla Dias', 'Praça C, 789', '11-95555-4444');

DELETE from membros
WHERE id_matricula = '102';
##############################################################################################################################################################################################################

CREATE TABLE emprestimos(
id_emprestimo VARCHAR(50) PRIMARY KEY NOT NULL,
id_exemplar VARCHAR(50) NOT NULL,
id_matricula VARCHAR(50) NOT NULL,
data_emprestimo DATE NOT NULL,
previsao_devolucao DATE NOT NULL,
data_devolucao DATE,

CONSTRAINT FK_id_exemplar_emprestimos  FOREIGN KEY (id_exemplar) REFERENCES exemplares(id_exemplar),
CONSTRAINT FK_id_matricula_emprestimos  FOREIGN KEY (id_matricula) REFERENCES membros(id_matricula) 
);

INSERT INTO emprestimos(id_emprestimo, id_exemplar, id_matricula, data_emprestimo, previsao_devolucao) VALUE ('112233','1111','2215', '2025-09-12', '2025-09-19' );
INSERT INTO emprestimos(id_emprestimo, id_exemplar, id_matricula, data_emprestimo, previsao_devolucao) VALUE ('3','1234','2215', '2025-09-12', '2025-09-19' );

select * from emprestimos;

##############################################################################################################################################################################################################

CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'mudar123';
GRANT ALTER ON biblioteca_comunitaria.livro TO 'estagiario'@'localhost';

ALTER TABLE livros ADD COLUMN genero VARCHAR(50);

##############################################################################################################################################################################################################

UPDATE autor
SET nome_autor = 'J.K. Rowling (Joanne Rowling)', nacionalidade = 'Britânica (Reino Unido)'
WHERE id_autor = 2;

##############################################################################################################################################################################################################
SELECT nome_autor, nacionalidade 
FROM autor;

SELECT * FROM autor 
WHERE id_autor = 1; 

SELECT titulo, ano_publicacao, ano_publicacao + 10 AS ano_revisao FROM livro; 

SELECT * from livro 
WHERE ano_publicacao < 2010
AND editora = "Rocco";

SELECT * from membros 
WHERE nome_completo = "Ana Silva" 
OR endereco = "Praça C, 789";

SELECT * FROM autor WHERE  NOT nacionalidade = "Brasileira" AND NOT nacionalidade = "Brasileiro";
SELECT * FROM livro WHERE ano_publicacao BETWEEN 1990 AND 2000;
SELECT * FROM livro WHERE editora IN ("Rocco", "Editora Clássica");

SELECT * FROM membros WHERE nome_completo LIKE "Ana%";

SELECT * FROM emprestimos WHERE data_devolucao IS NULL;

######################################################################################################################

INSERT INTO emprestimos (id_emprestimo, id_exemplar, id_matricula, data_emprestimo, previsao_devolucao) VALUES (3,1111,2215, CURDATE(), CURDATE() + INTERVAL 7 DAY);

SELECT CONCAT(UPPER(nome_autor), '(', nacionalidade, ')')
AS etiqueta
FROM autor;