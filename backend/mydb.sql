-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2023 at 03:51 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

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
-- Table structure for table `assessmentparts`
--

CREATE TABLE `assessmentparts` (
  `partsid` int(25) NOT NULL,
  `number` int(25) NOT NULL,
  `total_marks` int(25) NOT NULL,
  `clo` int(25) NOT NULL,
  `obtain_marks` double NOT NULL,
  `questionid` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assessmentparts`
--

INSERT INTO `assessmentparts` (`partsid`, `number`, `total_marks`, `clo`, `obtain_marks`, `questionid`) VALUES
(1, 1, 3, 1, 0, 2),
(2, 2, 2, 2, 0, 2),
(3, 1, 3, 1, 0, 4),
(4, 2, 3, 2, 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `assessmentplan`
--

CREATE TABLE `assessmentplan` (
  `assessplanid` int(20) NOT NULL,
  `category` varchar(20) NOT NULL,
  `Marks` int(20) NOT NULL,
  `obtain Marks` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assessmentplan`
--

INSERT INTO `assessmentplan` (`assessplanid`, `category`, `Marks`, `obtain Marks`) VALUES
(1, 'Lab', 50, 0),
(2, 'theory', 100, 0);

-- --------------------------------------------------------

--
-- Table structure for table `assessmentplandistribution`
--

CREATE TABLE `assessmentplandistribution` (
  `plandistid` int(11) NOT NULL,
  `type` varchar(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `assessplanid` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assessmentplandistribution`
--

INSERT INTO `assessmentplandistribution` (`plandistid`, `type`, `weight`, `assessplanid`) VALUES
(14, 'assignments', 30, 2),
(19, 'final', 45, 2),
(20, 'mid', 10, 2),
(23, 'quizzes', 10, 2),
(24, 'Project ', 5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `assessmentquestions`
--

CREATE TABLE `assessmentquestions` (
  `questionid` int(25) NOT NULL,
  `number` int(25) NOT NULL,
  `total_marks` int(25) NOT NULL,
  `obtain_marks` int(25) NOT NULL,
  `assessmentsid` int(25) NOT NULL,
  `clo` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assessmentquestions`
--

INSERT INTO `assessmentquestions` (`questionid`, `number`, `total_marks`, `obtain_marks`, `assessmentsid`, `clo`) VALUES
(1, 1, 5, 0, 1, 1),
(2, 1, 5, 0, 3, 0),
(3, 2, 5, 0, 3, 4),
(4, 1, 6, 0, 4, 0),
(5, 2, 3, 0, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `assessments`
--

CREATE TABLE `assessments` (
  `assessmentsid` int(25) NOT NULL,
  `number` int(25) NOT NULL,
  `total_marks` int(25) NOT NULL,
  `obtain_marks` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assessments`
--

INSERT INTO `assessments` (`assessmentsid`, `number`, `total_marks`, `obtain_marks`) VALUES
(1, 1, 5, 0),
(2, 1, 10, 0),
(3, 1, 10, 0),
(4, 1, 9, 0);

-- --------------------------------------------------------

--
-- Table structure for table `courseplan`
--

CREATE TABLE `courseplan` (
  `courseplanid` int(25) NOT NULL,
  `week` int(25) NOT NULL,
  `fromdate` date NOT NULL,
  `todate` date NOT NULL,
  `topicscovered` varchar(225) NOT NULL,
  `activity` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courseplan`
--

INSERT INTO `courseplan` (`courseplanid`, `week`, `fromdate`, `todate`, `topicscovered`, `activity`) VALUES
(42, 1, '2023-05-24', '2023-05-28', 'Intrusion detection system ', 'Reading'),
(43, 2, '2023-05-11', '2023-05-12', 'Digital signatures, Key Management and Cryptography', '-'),
(44, 3, '2023-05-03', '2023-05-04', 'User Authentication and Access Control', '-'),
(46, 5, '2023-05-17', '2023-05-18', 'RSA Algorithm', 'Problem Solving ');

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int(25) NOT NULL,
  `number` int(25) NOT NULL,
  `total_marks` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(25) NOT NULL,
  `name` varchar(25) NOT NULL,
  `roll_no` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assessmentparts`
--
ALTER TABLE `assessmentparts`
  ADD PRIMARY KEY (`partsid`),
  ADD KEY `questionid` (`questionid`);

--
-- Indexes for table `assessmentplan`
--
ALTER TABLE `assessmentplan`
  ADD PRIMARY KEY (`assessplanid`);

--
-- Indexes for table `assessmentplandistribution`
--
ALTER TABLE `assessmentplandistribution`
  ADD PRIMARY KEY (`plandistid`),
  ADD KEY `assessplanid` (`assessplanid`);

--
-- Indexes for table `assessmentquestions`
--
ALTER TABLE `assessmentquestions`
  ADD PRIMARY KEY (`questionid`),
  ADD KEY `assessmentsid` (`assessmentsid`);

--
-- Indexes for table `assessments`
--
ALTER TABLE `assessments`
  ADD PRIMARY KEY (`assessmentsid`);

--
-- Indexes for table `courseplan`
--
ALTER TABLE `courseplan`
  ADD PRIMARY KEY (`courseplanid`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assessmentparts`
--
ALTER TABLE `assessmentparts`
  MODIFY `partsid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `assessmentplan`
--
ALTER TABLE `assessmentplan`
  MODIFY `assessplanid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `assessmentplandistribution`
--
ALTER TABLE `assessmentplandistribution`
  MODIFY `plandistid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `assessmentquestions`
--
ALTER TABLE `assessmentquestions`
  MODIFY `questionid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `assessments`
--
ALTER TABLE `assessments`
  MODIFY `assessmentsid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `courseplan`
--
ALTER TABLE `courseplan`
  MODIFY `courseplanid` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assessmentparts`
--
ALTER TABLE `assessmentparts`
  ADD CONSTRAINT `questionid` FOREIGN KEY (`questionid`) REFERENCES `assessmentquestions` (`questionid`);

--
-- Constraints for table `assessmentplandistribution`
--
ALTER TABLE `assessmentplandistribution`
  ADD CONSTRAINT `assessplanid` FOREIGN KEY (`assessplanid`) REFERENCES `assessmentplan` (`assessplanid`);

--
-- Constraints for table `assessmentquestions`
--
ALTER TABLE `assessmentquestions`
  ADD CONSTRAINT `assessmentsid` FOREIGN KEY (`assessmentsid`) REFERENCES `assessments` (`assessmentsid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
