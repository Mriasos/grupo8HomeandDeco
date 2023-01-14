-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hangar
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

USE hangar;

--
-- Table structure for table `carritocompra`
--

DROP TABLE IF EXISTS `carritocompra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `carritocompra` (
  `id_carritoCompra` int NOT NULL AUTO_INCREMENT,
  `agregarProducto` varchar(45) NOT NULL,
  `vaciarCarrito` varchar(45) DEFAULT NULL,
  `id_usuarios` int DEFAULT NULL,
  `cantidadProducto` tinyint NOT NULL,
  `producto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_carritoCompra`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carritocompra`
--

LOCK TABLES `carritocompra` WRITE;
/*!40000 ALTER TABLE `carritocompra` DISABLE KEYS */;
INSERT INTO `carritocompra` VALUES (2,'si','no',2051,1,'Lampara Atenas');
/*!40000 ALTER TABLE `carritocompra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mediosdepago`
--

DROP TABLE IF EXISTS `mediosdepago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `mediosdepago` (
  `id_mediosDePago` int NOT NULL AUTO_INCREMENT,
  `tarjetaDeCredito` tinyint NOT NULL,
  `transferencia` tinyint NOT NULL,
  `billetera` tinyint NOT NULL,
  `mercadoLibre` tinyint NOT NULL,
  `id_ventas` int NOT NULL,
  PRIMARY KEY (`id_mediosDePago`),
  KEY `id_ventas_idx` (`id_ventas`),
  CONSTRAINT `id_ventas` FOREIGN KEY (`id_ventas`) REFERENCES `ventas` (`id_ventas`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mediosdepago`
--

LOCK TABLES `mediosdepago` WRITE;
/*!40000 ALTER TABLE `mediosdepago` DISABLE KEYS */;
INSERT INTO `mediosdepago` VALUES (100,1,0,0,0,2051);
/*!40000 ALTER TABLE `mediosdepago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `pedidos` (
  `id_pedidos` int NOT NULL AUTO_INCREMENT,
  `fechaCompra` int NOT NULL,
  `direccionEntrega` varchar(45) NOT NULL,
  `recargoEnvio` float DEFAULT NULL,
  `descuento` float DEFAULT NULL,
  `totalPago` float NOT NULL,
  `altaPedido` datetime NOT NULL,
  `verPedido` longblob NOT NULL,
  `modificarPedido` varchar(45) DEFAULT NULL,
  `eliminarPedido` varchar(45) DEFAULT NULL,
  `producto` varchar(45) NOT NULL,
  `id_carritoCompra` int NOT NULL,
  PRIMARY KEY (`id_pedidos`,`id_carritoCompra`),
  KEY `fk_pedidos_carritoCompra1_idx` (`id_carritoCompra`),
  CONSTRAINT `fk_pedidos_carritoCompra1` FOREIGN KEY (`id_carritoCompra`) REFERENCES `carritocompra` (`id_carritoCompra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id_productos` int NOT NULL AUTO_INCREMENT,
  `articuloProducto` varchar(45) NOT NULL,
  `descripcionProducto` varchar(45) NOT NULL,
  `imageProducto` longblob,
  `precio` float NOT NULL,
  `altaProducto` date NOT NULL,
  `modificarProducto` date DEFAULT NULL,
  `eliminarProducto` varchar(45) DEFAULT NULL,
  `listarProducto` varchar(45) NOT NULL,
  PRIMARY KEY (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=2007 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (2000,'Lampara Atenas','con tecnica tradicional y artesanal',_binary '/imagenes/lampara1.jpg',3000,'2023-01-10','2023-02-23','no','si'),(2001,'Llavero Cloe','Delicado y practico',_binary '/imagenes/llavero.jpeg',6000,'2023-02-15','2023-03-10','no','si'),(2002,'Bandeja iris','fabricada a mano',_binary '/imagenes/bandeja.jpeg',6000,'2023-01-02','2023-01-30','no','si'),(2003,'Manta Pompeya','tejida a mano en telar',_binary '/imagenes/cubrecama.jpeg',12000,'2023-01-02','2023-04-28','no','si'),(2004,'Recibidor Dallas','De madera de Zoita.',_binary 'imagenes/recibidor.jpeg',3000,'2023-01-02','2023-04-30','no','si'),(2006,'Llavero Cloe','Delicado y practico',_binary '/imagenes/llavero.jpeg',6000,'2023-02-15','2023-03-10','no','si');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id_roles` int NOT NULL AUTO_INCREMENT,
  `cliente` varchar(45) NOT NULL,
  `administrador` varchar(45) NOT NULL,
  `proveedor` varchar(45) NOT NULL,
  `vendedor` varchar(45) NOT NULL,
  `id_usuarios` int NOT NULL,
  PRIMARY KEY (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=1006 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1001,'0','1','0','0',2050),(1002,'1','0','0','0',2051),(1003,'0','0','1','0',2052),(1004,'0','1','0','0',2053),(1005,'0','0','0','1',2054);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuarios` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `dni` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `provincia` varchar(45) NOT NULL,
  `celular` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `image` longblob NOT NULL,
  `id_roles` int NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id_usuarios`),
  KEY `id_roles_idx` (`id_roles`),
  CONSTRAINT `id_roles` FOREIGN KEY (`id_roles`) REFERENCES `roles` (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=2055 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2050,'juan','fernandez','23456789','369 Emmet Plaza','Cordoba','Cordoba',6863610000,'mfilippazzoc@ustream.tv',_binary 'image',1001,'fk970c'),(2051,'Ezechiel','Baggallay','68795049','7975 Dottie Court','Ciudad de Buenos Aires','Buenos Aires',44995000000,'lmcauliffe0@unblog.fr',_binary 'image',1002,'556789'),(2052,'diana','jackferr','39383729','410 Thierer Court','Malaga','Jujuy',7890130000,'jchuneyk@sina.com.cn',_binary 'image',1003,'lker893'),(2053,'margarita','thompson','98634929','222 Beruti','Cerro de la Gloria','Mendoza',8237880000,'rgenikee@ca.gov',_binary 'image',1004,'hkri897'),(2054,'pimpi','solano','34759484','2005 Calle de la Fortaleza','San Miguel','Jujuy',60345600000,'ssaban3@rediff.com',_binary 'image',1005,'oi768jhgf');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas`
--

DROP TABLE IF EXISTS `ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `ventas` (
  `id_ventas` int NOT NULL AUTO_INCREMENT,
  `id_productos` int NOT NULL,
  `id_mediosDePago` int NOT NULL,
  `id_pedidos` int NOT NULL,
  PRIMARY KEY (`id_ventas`),
  KEY `id_pedidos_idx` (`id_pedidos`),
  CONSTRAINT `id_pedidos` FOREIGN KEY (`id_pedidos`) REFERENCES `pedidos` (`id_pedidos`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas`
--

LOCK TABLES `ventas` WRITE;
/*!40000 ALTER TABLE `ventas` DISABLE KEYS */;
INSERT INTO `ventas` VALUES (1,2000,100,3000);
/*!40000 ALTER TABLE `ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-14 12:41:39
