
#EXERCÍCIO BANCO DE DADOS ESCOLAR

create database db_escolar;
use db_escolar;
create table tbl_alunos(
	id_aluno INT, 
	nome VARCHAR(100),
	data_nascimento DATE,
	media_final DECIMAL (4,2)
);
drop table tbl_alunos;
drop database db_escolar;



#EXERCÍCIO BANCO DE DADOS LOJA ONLINE

create database db_loja_virtual;
use db_loja_virtual;
create table tbl_produtos(
	id_produto INT, 
	nome VARCHAR(100),
	preco DECIMAL (10,2)
);
drop table tbl_produtos;
drop database db_loja_virtual;



#EXERCÍCIO BANCO DE DADOS RH

create database db_rh_empresa;
use db_rh_empresa;
create table tbl_funcionarios(
	id_funcionario INT, 
	nome_completo VARCHAR(150),
	data_admissao DATE
);
drop table tbl_funcionarios;
drop database db_rh_empresa;



#EXERCÍCIO BANCO DE DADOS ACADEMIA

create database db_academia;
use db_academia;
create table tbl_membros(
	id_membro INT, 
	nome VARCHAR(100),
	tipo_plano VARCHAR(50)
);
drop table tbl_membros;
drop database db_academia;


#DESAFIO