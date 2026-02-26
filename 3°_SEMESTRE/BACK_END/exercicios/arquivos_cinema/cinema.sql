CREATE DATABASE cinema;
USE cinema;

-- ==========================
-- TABELA FILME
-- ==========================
CREATE TABLE filme (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    genero VARCHAR(100) NOT NULL,
    duracao INT NOT NULL, -- duração em minutos
    classificacao VARCHAR(10),
    data_lancamento DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================
-- TABELA SALA
-- ==========================
CREATE TABLE sala (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    capacidade INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================
-- TABELA SESSAO
-- ==========================
CREATE TABLE sessao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    filme_id INT NOT NULL,
    sala_id INT NOT NULL,
    data_hora DATETIME NOT NULL,
    preco DECIMAL(8,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_sessao_filme
        FOREIGN KEY (filme_id)
        REFERENCES filme(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_sessao_sala
        FOREIGN KEY (sala_id)
        REFERENCES sala(id)
        ON DELETE CASCADE
);

-- ==========================
-- TABELA INGRESSO
-- ==========================
CREATE TABLE ingresso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sessao_id INT NOT NULL,
    numero_assento INT NOT NULL,
    tipo ENUM('inteira', 'meia') NOT NULL,
    valor_pago DECIMAL(8,2) NOT NULL,
    status ENUM('reservado', 'pago', 'cancelado') DEFAULT 'reservado',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_ingresso_sessao
        FOREIGN KEY (sessao_id)
        REFERENCES sessao(id)
        ON DELETE CASCADE,

    CONSTRAINT unique_assento_sessao
        UNIQUE (sessao_id, numero_assento)
);

INSERT INTO filme (titulo, genero, duracao, classificacao, data_lancamento)
VALUES 
('Interestelar', 'Ficção Científica', 169, '12', '2014-11-07'),
('O Senhor dos Anéis: A Sociedade do Anel', 'Fantasia', 178, '12', '2001-12-19'),
('Vingadores: Ultimato', 'Ação', 181, '12', '2019-04-25');

INSERT INTO sala (nome, capacidade)
VALUES
('Sala 1', 120),
('Sala 2', 80),
('Sala 3', 150);

INSERT INTO sessao (filme_id, sala_id, data_hora, preco)
VALUES
(1, 1, '2026-02-20 19:00:00', 30.00),
(2, 2, '2026-02-20 20:00:00', 28.00),
(3, 3, '2026-02-21 21:30:00', 35.00);

INSERT INTO ingresso (sessao_id, numero_assento, tipo, valor_pago, status)
VALUES
(1, 10, 'inteira', 30.00, 'pago'),
(2, 15, 'meia', 14.00, 'pago'),
(3, 20, 'inteira', 35.00, 'reservado');


