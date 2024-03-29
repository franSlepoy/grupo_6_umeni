-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2023 at 08:10 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `bodegas`
--

CREATE TABLE `bodegas` (
  `idBodega` int(11) NOT NULL,
  `bodegaNombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `bodegas`
--

INSERT INTO `bodegas` (`idBodega`, `bodegaNombre`) VALUES
(1, 'Umeni'),
(2, 'Umeni2');

-- --------------------------------------------------------

--
-- Table structure for table `cepas`
--

CREATE TABLE `cepas` (
  `idCepa` int(11) NOT NULL,
  `nombreCepa` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `cepas`
--

INSERT INTO `cepas` (`idCepa`, `nombreCepa`) VALUES
(1, 'Brut Nature'),
(2, 'Brut Rose'),
(3, 'Cabernet Sauvignon'),
(4, 'Chardonnay'),
(5, 'Extra Brut'),
(6, 'Malbec'),
(7, 'Merlot'),
(8, 'Pinot Noir'),
(9, 'Rosado'),
(10, 'Sauvignon Blanc'),
(11, 'Syrah'),
(12, 'Torrontes');

-- --------------------------------------------------------

--
-- Table structure for table `intpedidosvinos`
--

CREATE TABLE `intpedidosvinos` (
  `idIntPedidosVinos` int(11) NOT NULL,
  `pedidos_idPedidos` int(11) NOT NULL,
  `vinos_idVino` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lineas`
--

CREATE TABLE `lineas` (
  `idLinea` int(11) NOT NULL,
  `lineascol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `lineas`
--

INSERT INTO `lineas` (`idLinea`, `lineascol`) VALUES
(1, 'Tinto'),
(2, 'Blanco'),
(3, 'Rosado'),
(4, 'Espumantes');

-- --------------------------------------------------------
--
-- Table structure for table `maridaje`
--

CREATE TABLE `maridaje` (
  `idmaridaje` int(11) NOT NULL,
  `maridaje` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `maridaje`
--

INSERT INTO `maridaje` (`idmaridaje`, `maridaje`) VALUES
(1, 'Cordero'),
(2, 'Carnes Negras'),
(3, 'Pastas'),
(4, 'Aves'),
(5, 'Salmón'),
(6, 'Pescados Blancos'),
(7, 'Carnes Rojas');

-- --------------------------------------------------------
--
-- Table structure for table `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedidos` int(11) NOT NULL,
  `usuarios_idUsuarios` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuarios` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contrasenia` varchar(200) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`idUsuarios`, `nombre`, `apellido`, `email`, `contrasenia`, `avatar`) VALUES
(1, 'Fernando Ramirez', '', 'fer.ram@correo.com', '$2a$10$EF.6qkloANMDukIlGK5yieDu25qJSUvTCIKHbmBMN85wQBrgISkca', '1682717642449_img.png'),
(2, 'Facundo Giuliani', '', 'fg@gmail.com', '$2a$10$wOy8N16yq72jT9sOCCpJJuK1mksbcO7YlYSHhDB5CoRGs0uF2oP9a', '1683350278805_img.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `vinos`
--

CREATE TABLE `vinos` (
  `idVino` int(11) NOT NULL,
  `nombreBodega_idBodega` int(11) NOT NULL,
  `lineas_idLineas` int(11) NOT NULL,
  `cepas_idCepa` int(11) NOT NULL,
  `anio` int(11) NOT NULL,
  `maridaje_idmaridaje` int(11) NOT NULL,
  `potencialGuardado` int(11) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `volumen` int(11) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `imagen` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `vinos`
--

INSERT INTO `vinos` (`idVino`, `nombreBodega_idBodega`, `lineas_idLineas`, `cepas_idCepa`, `anio`, `maridaje_idmaridaje`, `potencialGuardado`, `descripcion`, `volumen`, `precio`, `nombre`, `imagen`) VALUES
(1, 1, 4, 1, 2022, 6, 20, 'Brut Nature es un Cuvée Excepcionnelle elaborado con las mejores uvas de nuestros viñedos. Dorado brillante, con un particular y atractivo tono característico del Pinot Noir. Su intenso aroma recuerda a cerezas, damascos y miel con una delicada nota a pan tostado. En boca es amplio y untuoso. Su fina y persistente burbuja completa este elegante, complejo e intenso espumante.', 750, 2900,'Brut Nature', 'BrutNature-Espumantes.png'),
(2, 1, 3, 2, 2021, 5, 6, 'De color rosado brillante delicado, posee un intenso aroma de cerezas y frambuesas típico del Pinot Noir de zonas de altura. En boca es amplio, frutado y fresco. Burbuja fina y persistente.', 750, 3500,'Brut Rose', 'BrutRose-Espumantes.png'),
(3, 1, 1, 3, 2020, 7, 10, 'Color rojo rubí intenso. En la nariz presenta buena expresión y tipicidad varietal, se destacan las notas a pimienta negra y casis. En la boca es carnoso, de estructura tánica fina y elegante, final largo y persistente.', 750, 4700,'Cabernet Sauvignon', 'CabernetSauvignon-Tintos.png'),
(4, 1, 2, 4, 2019, 6, 12, 'Color amarillo claro con reflejos verdosos, brillante. Aroma complejo, se destacan notas cítricas, durazno blanco, con toque florales. En la boca es suave, amplio y fresco, con notas frutales y minerales. Su acidez natural lo hace un vino fresco y su paso por roble y trabajo sobre borras le confieren elegancia y untuosidad.', 750, 3200,'Chardonnay', 'Chardonnay-Blancos.png'),
(5, 1, 4, 5, 2018, 6, 6, 'Extra Brut es un "Cuvée Spéciale" elaborado con uvas Chardonnay y Pinot Noir de parcelas seleccionadas de nuestra finca El Oasis en el Valle de Uco. Su aroma fresco y expresivo recuerda a la manzana verde y cítricos con una delicada nota a pan tostado. En boca su entrada es suave y frutal con una fina y persistente burbuja que completa este armónico y equilibrado espumante.', 750, 2100,'Extra Brut', 'ExtraBrut-Espumantes.png'),
(6, 1, 1, 6, 2017, 3, 18, 'A la vista presenta color rojo intenso con tonos violáceos. En nariz se percibe fresco, intenso y complejo, destacándose notas a frutas rojas, flores como rosas y violetas que se combinan con notas balsámicas. En la boca es frutado, fresco y jugoso, de buena estructura y largo final. ', 750, 5900,'Malbec', 'Malbec-Tintos.png'),
(7, 1, 1, 7, 2022, 3, 24, 'A la vista presenta color rojo con tonalidades bordó. En la nariz es complejo, se destacan aromas a membrillo y frutos rojos y dulce de tomate. En la boca es sedoso y envolvente, de muy buena estructura. ', 750, 2600,'Merlot', 'Merlot-Tintos.png'),
(8, 1, 1, 8, 2021, 6, 6, 'Color rojo cereza, límpido y brillante.Complejo, aromas a jalea de frutillas, cerezas que se combinan con sutiles notal a hoja de tabaco y hierbas frescas como orégano. Entrada amable, jugoso complejo y largo. ', 750, 1800,'Pinot Noir', 'PinotNoir-Tintos.png'),
(9, 1, 3, 9, 2020, 5, 7, 'En la nariz se perciben intensos aromas a frutas frescas como frutillas y cerezas que se combinan con sutiles notas florales. Color rosa pálido, brillante.En la boca es frutado, con equilibrada acidez, final fresco y persistente.' , 750, 1200,'Rosado', 'Rosado-Rosados.png'),
(10, 1, 2, 10, 2019, 6, 11, 'Color amarillo claro con reflejos verdosos. En la nariz es expresivo, se destacan notas cítricas, mango y flores de Azahar. En boca es fresco, amplio, con notas frutales. ', 750, 2300,'Sauvignon Blanc', 'SauvignonBlanc-Blancos.png'),
(11, 1, 1, 11, 2018, 3, 6, 'Posee un color rojo rubí. Su aroma combina notas a frutos negros y especias, con delicadas notas ahumadas. La entrada en boca es dulce, fresco, taninos sedosos, final largo y persistente.', 750, 2400,'Syrah', 'Syrah-Blancos.png'),
(12, 1, 2, 12, 2017, 3, 5, 'Torrontés es un blanco de color amarillo claro y brillante. De aromas intensos a flores blancas y frutas tropicales. Su paladar es expresivo y perfumado, de paso fluido y refrescante. Es un vino con gracia, vibrante y directo, con tipicidad varietal inconfundible y final cítrico persistente y agradable.', 750, 1600,'Torrontes', 'Torrontes-Blancos.png');
--
--
-- Indexes for dumped tables
--

--
-- Indexes for table `bodegas`
--
ALTER TABLE `bodegas`
  ADD PRIMARY KEY (`idBodega`);

--
-- Indexes for table `cepas`
--
ALTER TABLE `cepas`
  ADD PRIMARY KEY (`idCepa`);

--
-- Indexes for table `intpedidosvinos`
--
ALTER TABLE `intpedidosvinos`
  ADD PRIMARY KEY (`idIntPedidosVinos`),
  ADD KEY `fk_IntPedidosVinos_pedidos1_idx` (`pedidos_idPedidos`),
  ADD KEY `fk_IntPedidosVinos_vinos1_idx` (`vinos_idVino`);

--
-- Indexes for table `lineas`
--
ALTER TABLE `lineas`
  ADD PRIMARY KEY (`idLinea`);

--
-- Indexes for table `maridaje`
--
ALTER TABLE `maridaje`
  ADD PRIMARY KEY (`idmaridaje`);

--
-- Indexes for table `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idPedidos`),
  ADD KEY `fk_pedidos_usuarios1` (`usuarios_idUsuarios`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuarios`);

--
-- Indexes for table `vinos`
--
ALTER TABLE `vinos`
  ADD PRIMARY KEY (`idVino`),
  ADD KEY `fk_vinos_nombreBodega_idx` (`nombreBodega_idBodega`),
  ADD KEY `fk_vinos_lineas1_idx` (`lineas_idLineas`),
  ADD KEY `fk_vinos_cepas1_idx` (`cepas_idCepa`),
  ADD KEY `fk_vinos_maridaje1_idx` (`maridaje_idmaridaje`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vinos`
--
ALTER TABLE `vinos`
  MODIFY `idVino` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `intpedidosvinos`
--
ALTER TABLE `intpedidosvinos`
  ADD CONSTRAINT `fk_IntPedidosVinos_pedidos1` FOREIGN KEY (`pedidos_idPedidos`) REFERENCES `pedidos` (`idPedidos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_IntPedidosVinos_vinos1` FOREIGN KEY (`vinos_idVino`) REFERENCES `vinos` (`idVino`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `fk_pedidos_usuarios1` FOREIGN KEY (`usuarios_idUsuarios`) REFERENCES `usuarios` (`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `vinos`
--
ALTER TABLE `vinos`
  ADD CONSTRAINT `fk_vinos_cepas1` FOREIGN KEY (`cepas_idCepa`) REFERENCES `cepas` (`idCepa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_vinos_lineas1` FOREIGN KEY (`lineas_idLineas`) REFERENCES `lineas` (`idLinea`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_vinos_maridaje1` FOREIGN KEY (`maridaje_idmaridaje`) REFERENCES `maridaje` (`idmaridaje`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_vinos_nombreBodega` FOREIGN KEY (`nombreBodega_idBodega`) REFERENCES `bodegas` (`idBodega`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
