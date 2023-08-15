-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: chatapp
-- ------------------------------------------------------
-- Server version	8.0.34

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

--
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int NOT NULL,
  `receiver_id` int NOT NULL,
  `message` text NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
INSERT INTO `chats` VALUES (1,1,2,'Hello, how are you?','2023-07-31 11:58:00'),(2,1,2,'Hello, how are you?','2023-07-31 16:03:24'),(3,1,3,'Random text ','2023-07-31 16:03:24'),(4,2,1,'Text message ','2023-07-31 16:03:24'),(5,3,1,'Greetings ','2023-07-31 16:03:24'),(6,2,3,'Message ','2023-07-31 16:03:24'),(7,3,2,'Random ','2023-07-31 16:03:24'),(8,1,2,'Testing ','2023-07-31 16:03:24'),(9,2,3,'Example ','2023-07-31 16:03:24'),(10,3,1,'Data ','2023-07-31 16:03:24'),(11,1,3,'SQL ','2023-07-31 16:03:24'),(12,2,1,'Statement ','2023-07-31 16:03:24'),(13,3,2,'Random ','2023-07-31 16:03:24'),(14,1,2,'Text ','2023-07-31 16:03:24'),(15,1,3,'Message ','2023-07-31 16:03:24'),(16,2,1,'Hello ','2023-07-31 16:03:24'),(17,3,1,'Random ','2023-07-31 16:03:24'),(18,2,3,'Testing ','2023-07-31 16:03:24'),(19,3,2,'Data ','2023-07-31 16:03:24'),(20,1,2,'Hello, how are you?','2023-08-02 05:53:27'),(21,1,3,'Random text ','2023-08-02 05:53:27'),(22,2,1,'Text message ','2023-08-02 05:53:27'),(23,3,1,'Greetings ','2023-08-02 05:53:27'),(24,2,3,'Message ','2023-08-02 05:53:27'),(25,3,2,'Random ','2023-08-02 05:53:27'),(26,1,2,'Testing ','2023-08-02 05:53:27'),(27,2,3,'Example ','2023-08-02 05:53:27'),(28,3,1,'Data ','2023-08-02 05:53:27'),(29,1,3,'SQL ','2023-08-02 05:53:27'),(30,2,1,'Statement ','2023-08-02 05:53:27'),(31,3,2,'Random ','2023-08-02 05:53:27'),(32,1,2,'Text ','2023-08-02 05:53:27'),(33,1,3,'Message ','2023-08-02 05:53:27'),(34,2,1,'Hello ','2023-08-02 05:53:27'),(35,3,1,'Random ','2023-08-02 05:53:27'),(36,2,3,'Testing ','2023-08-02 05:53:27'),(37,3,2,'Data ','2023-08-02 05:53:27'),(38,1,2,'ok','2023-08-02 05:54:13'),(39,1,2,'asd','2023-08-02 06:05:18'),(40,1,2,'hi','2023-08-02 06:11:20'),(41,1,3,'hi','2023-08-02 06:22:37'),(42,1,3,'hi','2023-08-02 06:23:52'),(43,1,3,'','2023-08-02 06:24:31'),(44,1,3,'hiasd','2023-08-02 06:24:36'),(45,1,3,'hi','2023-08-02 06:24:40'),(46,1,3,'','2023-08-02 06:25:22'),(47,1,3,'hi my name is sujit ','2023-08-02 06:25:29'),(48,1,3,'asd','2023-08-02 06:28:20'),(49,1,3,'asda','2023-08-02 06:29:05'),(50,1,3,'asdf','2023-08-02 06:30:04'),(51,1,3,'asda','2023-08-02 06:30:09'),(52,1,2,'Sujit','2023-08-02 06:33:18'),(53,2,1,'asd','2023-08-02 06:34:17'),(54,1,2,'hi','2023-08-02 09:46:25'),(55,2,1,'hi','2023-08-02 09:46:32'),(56,2,1,'hi','2023-08-02 12:31:27'),(57,2,1,'hi 2','2023-08-02 12:31:37'),(58,1,2,'hi','2023-08-02 12:33:00');
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-15 23:00:47
