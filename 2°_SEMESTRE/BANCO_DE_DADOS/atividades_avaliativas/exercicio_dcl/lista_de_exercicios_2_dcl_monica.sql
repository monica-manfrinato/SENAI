alter table tbl_alunos ADD email VARCHAR(150); #adiciona o email à tbl_alunos


create user 'secretaria'@'localhost' identified by 'Escola@Sec1';
create user 'professor'@'localhost' identified by 'Escola@Sec2';

grant all privileges on db_biblioteca.tbl_livros to 'secretaria'@'localhost';
grant select on db_biblioteca.tbl_livros to 'professor'@'localhost';

grant select, update on db_biblioteca.tbl_livros to 'professor'@'localhost';
REVOKE ALL PRIVILEGES ON db_biblioteca.tbl_livros FROM 'secretaria'@'localhost';

#############################################################################################

use db_biblioteca_b;

INSERT INTO tbl_livros (id_livro, titulo, autor, ano_publicacao, preco)
VALUES
(1, 'Dom Casmurro', 'Machado de Assis', 1899, 39.90),
(2, 'O Alquimista', 'Paulo Coelho', 1988, 29.50),
(3, 'A Hora da Estrela', 'Clarice Lispector', 1977, 34.00);

DROP TABLE tbl_livros;
SELECT * FROM tbl_livros; ##depois de importar