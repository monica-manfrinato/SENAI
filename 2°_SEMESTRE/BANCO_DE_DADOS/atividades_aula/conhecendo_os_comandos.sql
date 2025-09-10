create database db_biblioteca_b; # Criação de banco de dados
drop database db_biblioteca_b; #Excluí o banco de dados

use db_biblioteca_b; # Seleciona um banco de dados para uso

create table tbl_livros(
    id_livro INT,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    ano_publicacao INT,
    preco DECIMAL(10, 2)
); #Criação de Tabelas

drop table tbl_livros; #excluí a tabela 

create index idx_titulo
ON tbl_livros (titulo);