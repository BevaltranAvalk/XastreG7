-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 16-Jun-2023 às 18:35
-- Versão do servidor: 8.0.31
-- versão do PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `login`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso`
--

DROP TABLE IF EXISTS `curso`;
CREATE TABLE IF NOT EXISTS `curso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `materia` varchar(30) DEFAULT NULL,
  `mentor_id` int DEFAULT NULL,
  `area` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `quiz`
--

DROP TABLE IF EXISTS `quiz`;
CREATE TABLE IF NOT EXISTS `quiz` (
  `pergunta` varchar(255) DEFAULT NULL,
  `resposta_correta` varchar(255) DEFAULT NULL,
  `resposta1` varchar(255) DEFAULT NULL,
  `resposta2` varchar(255) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `quiz`
--

INSERT INTO `quiz` (`pergunta`, `resposta_correta`, `resposta1`, `resposta2`, `id`) VALUES
('Qual a capital do Brasil', 'Brasilia', 'Rio de janeiro', 'São Paulo', 1),
('Qual é a capital da França?', 'Paris', 'Londres', 'Berlim', 2),
('Quem pintou a Mona Lisa?', 'Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 3),
('Qual é a cor do céu em um dia ensolarado?', 'Azul', 'Amarelo', 'Verde', 4),
('Quanto é 2+2', '4', '5', '6', 7),
('Qual a raiz quadrada de 9', '3', '2', '67', 8),
('Qual o nome da capital do Maranhão', 'São Luis', 'Amapa', 'Rondonia', 9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `testes`
--

DROP TABLE IF EXISTS `testes`;
CREATE TABLE IF NOT EXISTS `testes` (
  `id_teste` int NOT NULL,
  `Materia` varchar(15) DEFAULT NULL,
  `id_quiz` int DEFAULT NULL,
  PRIMARY KEY (`id_teste`),
  KEY `testes_ibfk_1` (`id_quiz`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `SENHA` varchar(20) DEFAULT NULL,
  `CARGO` varchar(9) DEFAULT NULL,
  `email` varchar(40) NOT NULL,
  `curso_atual` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `idx_usuarios_ID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`ID`, `SENHA`, `CARGO`, `email`, `curso_atual`) VALUES
(1, '12345', 'aluno', 'aluno@gmail.com', ''),
(2, 'abc123', 'mentor', 'mentor@mentor.com', ''),
(3, '12345', 'empresa', 'empresa@empresa.com', ''),
(4, '12345', 'admin', 'admin@admin.com', ''),
(10, '12345', 'admin', 'may@admin.com', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `vagas`
--

DROP TABLE IF EXISTS `vagas`;
CREATE TABLE IF NOT EXISTS `vagas` (
  `nome` varchar(50) DEFAULT NULL,
  `area` varchar(30) DEFAULT NULL,
  `descricao` varchar(300) DEFAULT NULL,
  `nota_minima` int DEFAULT NULL,
  `requisitos` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
