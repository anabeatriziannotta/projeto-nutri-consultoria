-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

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