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

##############################################################################################################################################################################################################

CREATE TABLE exemplares(
id_exemplar VARCHAR(50) PRIMARY KEY NOT NULL,
ISBN VARCHAR(50) NOT NULL,
status_exemplar VARCHAR(30),

CONSTRAINT FK_ISBN_exemplar  FOREIGN KEY (ISBN) REFERENCES livro(ISBN) 
);

INSERT INTO exemplares(id_exemplar, ISBN, status_exemplar) VALUE ('1111', '123456789', 'Emprestado');
##############################################################################################################################################################################################################

CREATE TABLE autor(
id_autor INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome_autor VARCHAR(100) NOT NULL,
nacionalidade VARCHAR(50) NOT NULL
);


#INSERT INTO autor(nome_autor, nacionalidade) VALUE ('Daniel', 'Brasileiro'); #não coloca o id_autor pq ele ja é auto_increment
INSERT INTO autor(nome_autor, nacionalidade) VALUE ('Marlon Greg', 'Brasileiro'); #esse mesmo comando pode ser executado utilizando a query de cima, pois tudo vai ficar armazenado assim que é executado

##############################################################################################################################################################################################################

CREATE TABLE autor_livro(
id_autor_livro VARCHAR(50) PRIMARY KEY NOT NULL,
id_autor INTEGER NOT NULL,
ISBN VARCHAR(50),

CONSTRAINT FK_ISBN_livro  FOREIGN KEY (ISBN) REFERENCES livro(ISBN), #cria a chave estrangeirae nomeia ela, o constraint é utilizado justamente para dar o nome
CONSTRAINT id_autor  FOREIGN KEY (id_autor) REFERENCES autor(id_autor) 
);

INSERT INTO autor_livro(id_autor_livro, id_autor, ISBN) VALUE ('12345', '1', '123456789'), ('23456', '2', '9876543210'); #não dá pra colocar o 2, pq só criou 1 autor, o Daniel

##############################################################################################################################################################################################################

CREATE TABLE membros(
id_matricula VARCHAR(50) PRIMARY KEY NOT NULL,
nome_completo VARCHAR(100) NOT NULL,
endereco VARCHAR(200) NOT NULL,
telefone_contato VARCHAR(30)
);

INSERT INTO membros(id_matricula, nome_completo, endereco, telefone_contato) VALUE ('2215', 'Mônica Cotrim Manfrinato', 'Rua Marechal Deodoro da FOnseca', 11975268516);

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


##############################################################################################################################################################################################################

CREATE USER 'estagiario'@'localhost' IDENTIFIED BY 'mudar123';
GRANT ALTER ON biblioteca_comunitaria.livro TO 'estagiario'@'localhost';

ALTER TABLE livros ADD COLUMN genero VARCHAR(50);