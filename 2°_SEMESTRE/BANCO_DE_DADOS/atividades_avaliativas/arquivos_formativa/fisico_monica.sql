create database db_cursos_online;

use db_cursos_online;

create table curso
(
id_curso VARCHAR(30) PRIMARY KEY NOT NULL,
id_instrutor INTEGER NOT NULL,
carga_horaria_total INTEGER NOT NULL,
titulo VARCHAR(60) NOT NULL,
nivel_dificuldade VARCHAR(60) NOT NULL
);

create table instrutor
(
id_instrutor INTEGER PRIMARY KEY NOT NULL,
nome_completo VARCHAR(60) NOT NULL,
mini_biografia VARCHAR(150)
);

create table matricula
(
id_matricula INT PRIMARY KEY NOT NULL,
id_curso VARCHAR(30) NOT NULL,
id_aluno VARCHAR(30) NOT NULL,
status_matricula VARCHAR(30) NOT NULL,
data_matricula DATE NOT NULL
);

create table aula
(
id_aula VARCHAR(30) PRIMARY KEY NOT NULL,
id_curso VARCHAR(30) NOT NULL,
link_video_aula VARCHAR(100) NOT NULL,
titulo VARCHAR(60) NOT NULL
);

create table aluno
(
email VARCHAR(100) PRIMARY KEY NOT NULL,
nome_completo VARCHAR(100) NOT NULL,
cpf INTEGER NOT NULL,
data_nascimento DATE NOT NULL
);

drop table curso;
drop table instrutor;
drop table matricula;
drop table aula;
drop table aluno;