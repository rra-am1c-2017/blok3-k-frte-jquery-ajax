-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 28 mrt 2018 om 09:22
-- Serverversie: 5.7.19
-- PHP-versie: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `am1c_carousel_ajax`
--
CREATE DATABASE IF NOT EXISTS `am1c_carousel_ajax` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `am1c_carousel_ajax`;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `ajax`
--

DROP TABLE IF EXISTS `ajax`;
CREATE TABLE IF NOT EXISTS `ajax` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` enum('fruit','groenten','noten') NOT NULL,
  `name` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `info` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `ajax`
--

INSERT INTO `ajax` (`id`, `category`, `name`, `title`, `info`) VALUES
(1, 'groenten', 'broccoli.jpg', 'Broccoli', 'Broccoli is een kruisachtige groente. Erg gezond'),
(2, 'noten', 'cashew.jpg', 'Cashew', 'Cashewnoten zijn gewoon lekker.'),
(3, 'fruit', 'kruisbes.jpg', 'Kruisbessen', 'Kruisbessen worden gebruikt voor limburgse vlaaien'),
(4, 'groenten', 'pak-choi.jpg', 'Pak-Choi', 'Pak-choi is een chinese groente'),
(5, 'noten', 'paranoten.jpg', 'Paranoten', 'Paranoten worden ook wel Brasilnuts genoemd.'),
(6, 'fruit', 'pruim.jpg', 'Pruimen', 'Pruimen worden gebruikt bij een verstopping'),
(7, 'fruit', 'tomaat.jpg', 'Tomaten', 'Tomaten worden gebruikt voor op de pizza'),
(8, 'noten', 'walnoot.jpg', 'Walnoten', 'Walnoten lijken op hersenen. Ze zijn ook goed voor je hersenen.'),
(9, 'groenten', 'wortel.jpg', 'Wortelen', 'Wortelen worden gebruikt tegen nachtblindheid. Konijnen zijn nooit nachtblind.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
