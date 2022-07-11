CREATE DATABASE nutri;

USE nutri;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    	sobrenome VARCHAR(50),
    	genero VARCHAR(50),
		check (genero = 'masculino'
			or genero = 'feminino'),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE Dados_receita (
	idDados_receita INT PRIMARY KEY AUTO_INCREMENT,
	fkUsuario INT,
	FOREIGN KEY (fkusuario) REFERENCES usuario(id),
	nome_receita VARCHAR(45),
	categoria VARCHAR(45),
	porcao_tamanho FLOAT,
	porcao_unidade VARCHAR(45),
	CHECK (porcao_unidade = 'g' OR porcao_unidade = 'ml'),
	medida_tamanho FLOAT,
	medida_unidade VARCHAR(45)
);

CREATE TABLE Ingredientes (
	idIngrediente INT PRIMARY KEY AUTO_INCREMENT,
	nome_ingrediente VARCHAR(45),
	tabela_base VARCHAR(45),
	valor_energetico_kcal FLOAT,
	carboidratos_totais_g FLOAT,
	acucares_totais_g FLOAT,
	acucares_adicionados_g FLOAT,
	proteinas_g FLOAT,
	gorduras_totais_g FLOAT,
	gorduras_saturadas_g FLOAT,
	gorduras_trans_g FLOAT,
	fibra_alimentar_g FLOAT,
	sodio_mg FLOAT
);

CREATE TABLE Qtd_ingrediente_receita (
	fkDados_receita INT,
	FOREIGN KEY (fkDados_receita)
		REFERENCES Dados_receita(idDados_receita),
	fkIngrediente INT,
	FOREIGN KEY (fkIngrediente) 
		REFERENCES Ingredientes(idIngrediente),
	PRIMARY KEY (fkDados_receita, fkIngrediente),
	qtd_ingrediente FLOAT
);

INSERT INTO Ingredientes VALUES
(null, 'Água - TBCA', 'TBCA', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(null, 'Açúcar - TBCA', 'TBCA', 395, 98.3, 98.3, 100.0, 0.35, 0.02, 0.00, 0.00, 0.00, 12.5),
(null, 'Amido de milho - TBCA', 'TBCA', 349, 86.3, 85.5, 0, 0.64, 0.30, 0.05, 0.00, 0.74, 8.04),
(null, 'Cacau em pó - TBCA', 'TBCA', 359, 57.9, 20.9, 0, 19.6, 13.7, 8.07, 0, 37.0, 21.0),
(null, 'Cenoura - TBCA', 'TBCA', 31, 7.55, 7.55, 0, 1.12, 0.21, 0.03, 0, 2.98, 11.1),
(null, 'Farinha de trigo - TBCA', 'TBCA', 352, 75.5, 75.5, 0, 10.7, 1.36, 0.31, 0.10, 2.58, 0.75),
(null, 'Fermento biológico - TBCA', 'TBCA', 104, 7.70, 7.70, 0, 17.0, 1.52, 0.19, 0, 4.17, 39.6),
(null, 'Fermento químico - TBCA', 'TBCA', 178, 43.9, 43.9, 0, 0.48, 0.07, 0.01, 0, 0.00, 10052),
(null, 'Fubá de milho - TBCA', 'TBCA', 357, 79.7, 75.3, 0, 7.06, 2.03, 0.46, 0.0, 4.38, 40.0),
(null, 'Gordura vegetal - TBCA', 'TBCA', 900, 0, 0, 0, 0, 100.0, 50.9, 0.19, 0, 0),
(null, 'Leite integral - TBCA', 'TBCA', 64, 5.92, 5.92, 0, 2.93, 3.23, 2.01, 0, 0, 63.8),
(null, 'Óleo vegetal de soja - TBCA', 'TBCA', 900, 0, 0, 0, 0, 100.0, 15.2, 0.50, 0, 0),
(null, 'Ovos - TBCA', 'TBCA', 135, 2.13, 2.13, 0, 11.3, 9.05, 2.64, 0.02, 0.00, 160),
(null, 'Polvilho doce - TBCA', 'TBCA', 349, 86.8, 86.6, 0.0, 0.43, 0.0, 0.0, 0.0, 0.24, 1.58),
(null, 'Sal - TBCA', 'TBCA', 0, 0, 0, 0, 0, 0, 0, 0, 0, 1398);    
