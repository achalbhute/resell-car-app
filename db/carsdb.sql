-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2018 at 10:31 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `make` varchar(128) DEFAULT NULL,
  `model` varchar(128) DEFAULT NULL,
  `year` year(4) DEFAULT NULL,
  `color` varchar(40) DEFAULT NULL,
  `description` text,
  `history` text,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `seller_id` int(11) NOT NULL,
  `buyer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `make`, `model`, `year`, `color`, `description`, `history`, `createdAt`, `updatedAt`, `seller_id`, `buyer_id`) VALUES
(1, 'ahbjsjsjsskkskkss', 'Audi', 2015, 'black', 'very beautifull', 'no history available', '0000-00-00', '2018-03-07', 2, 2),
(2, 'alto', 'maruti suzuki', 2015, 'white', 'small car', 'cool history', '0000-00-00', '0000-00-00', 1, NULL),
(3, 'cherolet', 'Beat', 2013, 'green', NULL, NULL, '2018-03-07', '2018-03-07', 1, NULL),
(4, 'cherolet', 'Beat', 2013, 'green', NULL, NULL, '2018-03-07', '2018-03-07', 1, 2),
(6, 'cherolete', 'Beat', 2013, 'white', NULL, NULL, '2018-03-07', '2018-03-09', 2, 1),
(7, 'honda', 'marz', 2019, 'blue', NULL, NULL, '2018-03-09', '2018-03-09', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `createdAt`, `updatedAt`, `password`, `role`) VALUES
(1, 'First seller', '0000-00-00', '0000-00-00', '', ''),
(2, 'achal', '0000-00-00', '0000-00-00', '$2a$08$HU44mJUFkmLSa4yyK.0II.U0XREJJ.rlmMdQre6w0rVi6KlIZVzri', 'seller');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seller_id` (`seller_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `Seller_car_rel` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
