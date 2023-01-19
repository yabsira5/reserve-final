-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2023 at 07:59 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `BookingID` int(11) NOT NULL,
  `HotelCode` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `RoomNo` int(11) NOT NULL,
  `BookingDate` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `CheckIn` date NOT NULL,
  `CheckOut` date NOT NULL,
  `NumAdults` int(11) NOT NULL,
  `NumChildren` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`BookingID`, `HotelCode`, `UserID`, `RoomNo`, `BookingDate`, `CheckIn`, `CheckOut`, `NumAdults`, `NumChildren`) VALUES
(6, 1, 1, 1, '2023-01-15 23:07:03', '2023-01-14', '2023-01-16', 1, 1),
(7, 1, 1, 1, '2023-01-16 13:56:56', '2023-01-16', '2023-01-19', 3, 4),
(8, 1, 1, 1, '2023-01-16 15:01:14', '2023-01-15', '2023-01-17', 1, 1),
(9, 1, 1, 1, '2023-01-16 15:18:31', '2023-01-15', '2023-01-17', 1, 1),
(10, 1, 1, 1, '2023-01-17 15:24:47', '2023-01-16', '2023-01-30', 2, 2),
(11, 1, 1, 1, '2023-01-17 15:24:48', '2023-01-16', '2023-01-30', 2, 2),
(12, 1, 1, 2, '2023-01-19 15:49:00', '2023-01-18', '2023-01-24', 1, 0),
(13, 57, 1, 3, '2023-01-19 17:42:21', '2023-01-18', '2023-01-25', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmployeeID` int(11) NOT NULL,
  `HotelCode` int(11) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmployeeID`, `HotelCode`, `FirstName`, `LastName`, `Email`, `Password`) VALUES
(1, 1, 'zab', 'dereje', 'Zab@gmail.com', 'ABC'),
(2, 57, 'Yoni', 'Million', 'yoni@gmail.com', 'ABC');

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `HotelCode` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `distance` varchar(50) NOT NULL,
  `photo` varchar(900) NOT NULL,
  `title` varchar(50) NOT NULL,
  `disc` varchar(100) NOT NULL,
  `rating` int(11) NOT NULL,
  `rooms` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `cheapestPrice` int(11) NOT NULL,
  `featured` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`HotelCode`, `name`, `type`, `city`, `address`, `distance`, `photo`, `title`, `disc`, `rating`, `rooms`, `price`, `cheapestPrice`, `featured`) VALUES
(1, 'Addis', 'Hotels', 'Addis Ababa', 'aratkilo', '5KM', 'Fl5b-UtXgAMwMgd.jpeg,main_image_deep_field_smacs0723-5mb.jpg,main_image_star-forming_region_carina_nircam_final-5mb.jpg', 'addis', 'jdhfgsdhjvgdsvbdjhfghsdfgsdflsdgfsdlgdslcgdssgldsfgdslfgsflhjsdgfdslhfgsdljfgsdjfgsdjkfgdslfgdsfldsh', 7, 7, 200, 100, 'Free Parking'),
(2, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'Q 2 I 3.png,Q1 I 1.png,Q2 I 1.png,Q2 I 2.png', 'ttttttt', 'good', 7, 8, 0, 200, 'Free Parking'),
(6, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'Opera Snapshot_2023-01-15_191512_localhost.png', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(7, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'Opera Snapshot_2023-01-15_191512_localhost.png', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(8, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'Screenshot 2022-04-21 213526.png,Screenshot 2022-11-23 214106.png', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(9, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'F', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(10, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'F', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(12, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'Array Array Array ', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(13, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'Array Array Array ', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(14, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'A-high-level-network-structure-with-various-options-for-the-access-network-Also-shown.png,capsule_616x353.jpg,Fl5b-UtXgAMwMgd.jpeg ', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(15, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'A-high-level-network-structure-with-various-options-for-the-access-network-Also-shown.png capsule_616x353.jpg Fl5b-UtXgAMwMgd.jpeg', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(16, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'A-high-level-network-structure-with-various-options-for-the-access-network-Also-shown.png capsule_616x353.jpg Fl5b-UtXgAMwMgd.jpeg', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(17, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'A-high-level-network-structure-with-various-options-for-the-access-network-Also-shown.png,capsule_616x353.jpg,Fl5b-UtXgAMwMgd.jpeg', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(18, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'Fl5b-UtXgAMwMgd.jpeg', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(19, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', '  ', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(20, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'A-high-level-network-structure-with-various-options-for-the-access-network-Also-shown.png,capsule_616x353.jpg,Fl5b-UtXgAMwMgd.jpeg', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(40, 'guestline', 'resort', 'Addis Ababa', 'aratkilo', '7', 'Fl5b-UtXgAMwMgd.jpeg', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(41, 'Hilton', 'Hotel', 'Addis Ababa', 'aratkilo', '7', 'Screenshot 2022-11-23 213647.png', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(45, 'Hilton', 'Hotel', '', 'aratkilo', '7', '', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(55, 'The Finest ', 'Hotel', 'Addis Ababa', 'aratkilo', '7', 'Fl5b-UtXgAMwMgd.jpeg,main_image_deep_field_smacs0723-5mb.jpg,main_image_star-forming_region_carina_nircam_final-5mb.jpg', 'tttt', 'gooood', 7, 7, 0, 200, 'Free Parking'),
(56, 'noice', 'resort', 'Addis Ababa', 'aratkilo', '7', 'capsule_616x353.jpg,Manage Booking.jpg,Screenshot 2022-12-07 143526.png,trial.png,yheye5y65ti78_generated.jpg', 'GREAT', 'gooood', 5, 1, 0, 200, 'Free Parking'),
(57, 'THE GREATEST', 'Villa', 'Adama', 'Leman Street', '7 km', 'capsule_616x353.jpg,mining.png,Q 2 I 3.png,Q1 I 1.png,Q2 I 1.png,Q2 I 2.png,Screenshot 2022-03-08 114127.png,Screenshot 2022-04-21 055026.png,Screenshot 2022-04-21 213526.png,Screenshot 2022-11-23 213647.png,Screenshot 2022-11-23 214106.png,Screenshot 2022-12-07 143526.png,trial.png', 'GREAT', 'Great place to stay at', 3, 3, 0, 500, 'Free Parking');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `RoomNo` int(11) NOT NULL,
  `HotelCode` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `img` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `maxpeople` int(11) NOT NULL,
  `disc` varchar(50) NOT NULL,
  `roomNumbers` int(11) NOT NULL,
  `Booked_Status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`RoomNo`, `HotelCode`, `title`, `img`, `price`, `maxpeople`, `disc`, `roomNumbers`, `Booked_Status`) VALUES
(1, 1, 'Standard Room', 'Manage Booking.jpg', 200, 2, 'jdhgcsjhdvshjdvshjsdjhvsdjhcvsdjlhgcvbsdjlhcvsdjhv', 111, 0),
(2, 1, 'Luxury Room', 'main_image_star-forming_region_carina_nircam_final-5mb.jpg', 200, 2, 'good', 123, 0),
(3, 57, 'Luxury Room', 'Fl5b-UtXgAMwMgd.jpeg', 200, 2, 'HAVE A GREAT VIEW', 321, 1),
(6, 57, 'Standard Room', 'capsule_616x353.jpg', 200, 2, 'good', 369, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Country` varchar(50) NOT NULL,
  `City` varchar(50) NOT NULL,
  `Phone` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `Username`, `Email`, `Country`, `City`, `Phone`, `Password`) VALUES
(1, 'yab', 'yabsira@gmail.com', 'Ethiopia', 'Addis Ababa', ' +251943874973', 'ABC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`BookingID`),
  ADD KEY `fk_bh` (`HotelCode`),
  ADD KEY `fk_bu` (`UserID`),
  ADD KEY `fk_br` (`RoomNo`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmployeeID`),
  ADD KEY `fk_eh` (`HotelCode`);

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`HotelCode`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`RoomNo`),
  ADD KEY `fk_r` (`HotelCode`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `BookingID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EmployeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `HotelCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `RoomNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `fk_bh` FOREIGN KEY (`HotelCode`) REFERENCES `hotel` (`HotelCode`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_br` FOREIGN KEY (`RoomNo`) REFERENCES `room` (`RoomNo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_bu` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `fk_eh` FOREIGN KEY (`HotelCode`) REFERENCES `hotel` (`HotelCode`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `fk_r` FOREIGN KEY (`HotelCode`) REFERENCES `hotel` (`HotelCode`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
