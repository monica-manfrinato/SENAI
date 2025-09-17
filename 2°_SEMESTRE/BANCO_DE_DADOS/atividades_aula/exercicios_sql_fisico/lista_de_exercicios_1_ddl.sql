
#EXERCÍCIO BANCO DE DADOS ESCOLAR

create database db_escola_b;
use db_escola_b;
create table tbl_alunos(
	id_aluno INT primary key auto_increment, #primary key - torna o campo um campo chave primária ////// auto_increment - usado na chave primária para controlar a criação de chaves primárias 
	nome VARCHAR(100) not null, #Não pode deixar o campo em branco
	data_nascimento DATE not null,
	media_final DECIMAL (4,2)
);

alter table tbl_alunos ADD email VARCHAR(150); #adiciona o email à tbl_alunos
drop table tbl_alunos;
drop database db_escola_b;



#EXERCÍCIO BANCO DE DADOS LOJA ONLINE

create database db_loja_virtual_b;
use db_loja_virtual_b;
create table tbl_produtos(
	id_produto INT primary key, 
	nome VARCHAR(100),
	preco DECIMAL (10,2)
);
drop table tbl_produtos;
drop database db_loja_virtual_b;



#EXERCÍCIO BANCO DE DADOS RH

create database db_rh_empresa_b;
use db_rh_empresa_b;
create table tbl_funcionarios(
	id_funcionario INT primary key, 
	nome_completo VARCHAR(150),
	data_admissao DATE
);
drop table tbl_funcionarios;
drop database db_rh_empresa_b;



#EXERCÍCIO BANCO DE DADOS ACADEMIA

create database db_academia_b;
use db_academia_b;
create table tbl_membros(
	id_membro INT primary key, 
	nome VARCHAR(100),
	tipo_plano VARCHAR(50)
);
drop table tbl_membros;
drop database db_academia_b;
