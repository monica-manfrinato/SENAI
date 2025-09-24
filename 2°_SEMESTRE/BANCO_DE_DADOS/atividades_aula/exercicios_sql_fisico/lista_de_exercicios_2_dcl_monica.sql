alter table tbl_alunos ADD email VARCHAR(150); #adiciona o email à tbl_alunos


create user 'secretaria'@'localhost' identified by 'Escola@Sec1'; #coloca o @ para mostrar onde que o usuário vai atuar (permissões)
create user 'professor'@'localhost' identified by 'Escola@Prof2'; 

drop user 'secretaria'@'localhost'; #Excluir o usuário secretaria
drop user 'professor'@'localhost'; #Excluir o usuário professor

grant all privileges on db_escola_b.tbl_alunos to 'secretaria'@'localhost'; #Concede todos os privilégios para a secretaria
grant select on db_escola_b.tbl_alunos to 'professor'@'localhost';

grant select, update on db_escola_b.tbl_alunos to 'professor'@'localhost'; #da pra conceder mais de um privilégio por vez, para isso basta separá-los por ','
#mesmo que ele já tivesse a grant 'select', é bom repetir para evitar problemas (REPETE)

revoke all privileges on db_escola_b.tbl_alunos from 'secretaria'@'localhost'; #da erro pq tem o ALL, mas sem ela não tem como fazer, porém se executa da certo sim

#############################################################################################

use db_biblioteca_b;

INSERT INTO tbl_livros (id_livro, titulo, autor, ano_publicacao, preco)
VALUES
(1, 'Dom Casmurro', 'Machado de Assis', 1899, 39.90),
(2, 'O Alquimista', 'Paulo Coelho', 1988, 29.50),
(3, 'A Hora da Estrela', 'Clarice Lispector', 1977, 34.00);

DROP TABLE tbl_livros;
DROP DATABASE db_biblioteca_b;
SELECT * FROM tbl_livros; ##depois de importar