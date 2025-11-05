create database db_papelaria;
use db_papelaria;

create table tbl_clientes(
	id_cliente varchar(30) primary key,
    nome_completo varchar(100) not null,
	telefone_contato varchar(30),
	cidade varchar(50) not null
);

create table tbl_produtos(
	id_produto varchar(30) primary key,
    nome_produto varchar(100) not null,
	preco_unitario decimal(10,2),
	quantidade_estoque integer not null
);

create table tbl_pedidos(
	id_pedido varchar(30) primary key,
    id_cliente varchar(30) not null,
    id_produto varchar(30) not null,
    data_pedido date not null,
    quantidade_de_itens integer not null,
    dados_de_cancelamento varchar(150),
    
    
    CONSTRAINT FK_id_cliente FOREIGN KEY (id_cliente) REFERENCES tbl_clientes(id_cliente),
    CONSTRAINT FK_id_produto FOREIGN KEY (id_produto) REFERENCES tbl_produtos(id_produto)
);

##############################################################################################


insert into tbl_clientes(id_cliente, nome_completo, telefone_contato, cidade) 
value ("11111", "Letícia Roberta Souto", "119123450987", "Salto"),
("22222", "Paula Sbrissa Gianotto", "229123450987", "Itu"),
("33333", "Heloísa Gabrielly Paixão", "339123450987", "Indaiatuba"),
("44444", "Mônica Cotrim Manfrinato", "449123450987", "Salto"),
("55555", "Sarah Lima Antônio", "559123450987", "Itu");




insert into tbl_produtos (id_produto, nome_produto, preco_unitario, quantidade_estoque)
value ("99999", "Caderno tilibra", 12.90, 20),
("88888", "Caneta Bic", 3.00, 100),
("77777", "Marca texto", 9.50, 30),
("66666", "Folha de papel quadriculado", 3.80, 40),
("55555", "Folha de EVA", 5.20, 40);



insert into tbl_pedidos (id_pedido, id_cliente, id_produto, data_pedido, quantidade_de_itens, dados_de_cancelamento)
value ("12345", "11111", "99999", '2025-10-12', 5, "Material danificado"),
 ("23456", "22222", "77777", '2025-10-12', 2, "Não ficou satisfeito com a compra"),
 ("34567", "33333", "66666", '2025-10-12', 4, "Produto errado");


#Comandos de visualização das tabelas
select * from tbl_clientes;
select * from tbl_produtos;
select * from tbl_pedidos;


#Comandos de exclusão - Comentados para não atrapalhar na atividade sem querer
#drop table tbl_pedidos;
#drop table tbl_produtos;
#drop table tbl_clientes;
#drop database db_papelaria;

update tbl_produtos set preco_unitario = 3.50 where id_produto = "88888";

delete from tbl_clientes where id_cliente = "44444";

#tentativa de excluir cliente já cadastrado - deu erro, pois se um cliente já está cadastrado como chave estrangeira na tabela de pedidos, ao exclui-lo da clientes, a outra também será afetada, e consequentemente afetara o restante do banco de dados
#O erro apresentado foi: 13:28:03	delete from tbl_clientes where id_cliente = "11111"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`db_papelaria`.`tbl_pedidos`, CONSTRAINT `FK_id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `tbl_clientes` (`id_cliente`))	0.000 sec

delete from tbl_clientes where id_cliente = "11111";


##############################################################################################

select * from tbl_produtos where preco_unitario between 10.00 and 25.00;
select * from tbl_clientes where nome_completo like "A%" or "%Silva";
select * from tbl_produtos where quantidade_estoque < 10 and preco_unitario > 50.00;

select * from tbl_clientes where cidade in ("São Paulo", "Rio de Janeiro");
select * from tbl_clientes where cidade not in ("São Paulo", "Rio de Janeiro");

select * from tbl_pedidos where dados_de_cancelamento is null;


##############################################################################################

select  concat(upper(nome_completo), '(', telefone_contato, ')') 
as informacoes_contato from tbl_clientes;

insert into tbl_pedidos (id_pedido, id_cliente, id_produto, data_pedido, quantidade_de_itens, dados_de_cancelamento)
values ("45678","11111", "88888",curdate(), 2, "Material danificado");


select id_pedido, data_pedido, datediff(curdate(), data_pedido) as dia_desde_o_pedido from tbl_pedidos where id_pedido = "12345";

select count(*) as total_clientes from tbl_clientes;
select count(*) as preco_maior_20 from tbl_produtos where preco_unitario > 20.00;

select avg(preco_unitario) as media_valores from tbl_produtos;

select max(preco_unitario) as maior_preco from tbl_produtos;
select min(preco_unitario) as menor_preco from tbl_produtos;

select sum(preco_unitario*quantidade_estoque) as valor_total_loja from tbl_produtos;