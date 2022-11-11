-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2022 at 07:40 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `time` longtext DEFAULT NULL,
  `date` longtext DEFAULT NULL,
  `room` longtext DEFAULT NULL,
  `id_std` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `created_at`, `updated_at`, `deleted_at`, `time`, `date`, `room`, `id_std`) VALUES
(6, '2022-11-09 23:45:19.256', '2022-11-09 23:45:19.256', '2022-11-10 00:06:38.725', '12:60 am', '9/11/2022', '225', '163404140050'),
(7, '2022-11-09 23:53:24.781', '2022-11-09 23:53:24.781', '2022-11-10 00:06:46.518', '14:00 am - 15:00 am', '12/11/2022', '101', '163404140050'),
(8, '2022-11-09 23:55:20.466', '2022-11-09 23:55:20.466', '2022-11-10 00:14:25.021', 'ss', 'sss', 'ss', 's'),
(9, '2022-11-10 00:06:55.910', '2022-11-10 00:06:55.910', '2022-11-10 00:14:27.728', '12:60 am', '9/11/2022', '225', '163404140050'),
(10, '2022-11-10 00:06:56.327', '2022-11-10 00:06:56.327', '2022-11-10 00:15:01.416', '12:60 am', '9/11/2022', '225', '163404140050'),
(11, '2022-11-10 00:14:47.873', '2022-11-10 00:14:47.873', '2022-11-10 00:15:42.859', 'az', 'a', 'z', 'a'),
(12, '2022-11-10 00:15:59.884', '2022-11-10 00:15:59.884', '2022-11-10 00:36:14.550', 'a', 'a', 'a', 'a'),
(13, '2022-11-10 00:16:06.799', '2022-11-10 00:16:06.799', '2022-11-10 00:16:45.772', 'a', 'a', 'a', 'a'),
(14, '2022-11-10 00:16:13.424', '2022-11-10 00:16:13.424', '2022-11-10 00:30:29.325', 'a', 'a', 'a', 'a'),
(15, '2022-11-10 00:35:21.538', '2022-11-10 00:35:21.538', '2022-11-10 00:38:19.583', 'a', 'a', 'a', 'aa'),
(16, '2022-11-10 00:35:29.967', '2022-11-10 00:35:29.967', '2022-11-10 00:36:18.860', 'a', 'a', 'a', 'a'),
(17, '2022-11-10 00:39:09.497', '2022-11-10 00:39:09.497', '2022-11-10 00:56:27.368', 'a', 'a', 'a', 'a'),
(18, '2022-11-10 00:39:15.768', '2022-11-10 00:39:15.768', '2022-11-10 00:39:18.705', 'a', 'a', 'a', 'a'),
(19, '2022-11-10 00:56:23.872', '2022-11-10 01:19:54.136', '2022-11-10 16:52:42.854', '12:60 am', '9/11/2022', '205', '163404140050'),
(20, '2022-11-10 01:07:25.513', '2022-11-10 15:17:29.471', '2022-11-10 17:01:50.697', '12:60 am', '9/11/2022', '230', '163404140050'),
(21, '2022-11-10 01:19:03.648', '2022-11-10 01:19:03.648', '2022-11-10 18:37:05.434', '14:00 am - 15:00 am', '12/11/2022', '115', '163404140050'),
(22, '2022-11-10 14:39:28.116', '2022-11-10 14:39:28.116', '2022-11-10 19:27:53.283', '12:50 am', '12/11/2022', '1010', '163404140050'),
(23, '2022-11-10 15:58:28.223', '2022-11-10 15:58:28.223', '2022-11-10 15:58:37.606', '15:20', '08/11/2022', '421', '163404140050'),
(24, '2022-11-10 16:32:03.467', '2022-11-10 16:32:03.467', '2022-11-10 19:28:07.167', '11:50 am', '09/11/2022', '115', '163404140050'),
(25, '2022-11-10 16:35:24.276', '2022-11-10 16:35:24.276', '2022-11-10 19:28:29.342', '08:00 am - 16:00 am', '13/07/2022', '301', '163404140050'),
(26, '2022-11-10 16:37:41.371', '2022-11-10 16:37:41.371', '2022-11-10 19:29:17.263', '13:30 น. - 18:00 น.', '16/11/2022', '203', '163404140050'),
(27, '2022-11-10 16:40:41.367', '2022-11-10 16:40:41.367', '2022-11-10 19:28:24.156', '13:30 น. - 18:00 น.', '16/11/2022', '203', '163404140050'),
(28, '2022-11-10 16:41:20.964', '2022-11-10 16:41:20.964', '2022-11-10 19:28:23.148', '13:30 น. - 18:00 น.', '16/11/2022', '203', '163404140050'),
(29, '2022-11-10 16:50:22.225', '2022-11-10 16:50:22.225', '2022-11-10 17:01:47.271', '17:00 น.', '11/11/2022', '303', '163404140050'),
(30, '2022-11-10 16:51:02.498', '2022-11-10 16:51:02.498', '2022-11-10 19:28:03.494', '12:50 am', '09/11/2022', '404', '163404140050'),
(31, '2022-11-10 16:56:54.556', '2022-11-10 16:56:54.556', '2022-11-10 17:04:15.547', '13:00 น.', '11/11/2022', '101', '163404140050'),
(32, '2022-11-10 19:29:04.455', '2022-11-10 19:29:04.455', '2022-11-10 20:17:18.613', '19:00 น. - 21:00 น.', '11/11/2022', '101', '163404140050'),
(33, '2022-11-10 19:29:43.854', '2022-11-10 19:29:43.854', '2022-11-10 22:53:13.297', '14:00 น. - 15:00 น.', '11/11/2022', '203', '163404140050'),
(34, '2022-11-10 19:30:21.822', '2022-11-10 19:30:21.822', '2022-11-10 22:53:58.842', '13:30 น. - 18:00 น.', '12/11/2022', '303', '163404140050'),
(35, '2022-11-10 20:17:05.582', '2022-11-11 00:54:35.804', NULL, '12:50 น. - 14:50 น.', '9/11/2022', '201', '163404140050'),
(36, '2022-11-10 22:53:29.107', '2022-11-10 22:53:29.107', NULL, '13:30 น. - 18:00 น.', '12/11/2022', '115', '163404140050'),
(37, '2022-11-10 22:53:56.409', '2022-11-10 22:53:56.409', NULL, '08:30 น. - 12:00 น.', '10/11/2022', '303', '163404140050'),
(38, '2022-11-11 00:53:20.329', '2022-11-11 00:53:20.329', NULL, '10:00 น. - 16:00 น.', '12/11/2022', '303', '163404140050');

-- --------------------------------------------------------

--
-- Table structure for table `userlgs`
--

CREATE TABLE `userlgs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `username` longtext DEFAULT NULL,
  `password` longtext DEFAULT NULL,
  `fullname` longtext DEFAULT NULL,
  `avatar` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userlgs`
--

INSERT INTO `userlgs` (`id`, `created_at`, `updated_at`, `deleted_at`, `username`, `password`, `fullname`, `avatar`) VALUES
(1, '2022-11-03 23:59:12.575', '2022-11-05 18:16:56.549', '2022-11-10 00:02:54.993', 'jirawas', '$2a$10$govaUpBBfXLmyoenOocqv.K6zkEFJ57N1dR6Ul7qfiZpO2eo9wce.', 'jirawas tull', 'https://www.melivecode.com/users/4.png'),
(4, '2022-11-04 00:11:41.485', '2022-11-04 00:11:41.485', NULL, 'tiger', '$2a$10$BPaaBoTNV17Yh52u9863S..JOy10atOmbsMwXA0F2/zrsb8xDtXCK', 'tiger ron', 'https://www.melivecode.com/users/2.png'),
(5, '2022-11-05 00:44:51.667', '2022-11-05 00:44:51.667', NULL, 'tuyts.bertrand@melivecode.com', '', '', 'https://www.melivecode.com/users/3.png'),
(6, '2022-11-05 18:16:34.163', '2022-11-05 18:16:34.163', NULL, 'jirawas', '$2a$10$llI6hBEzTCJP/DLT/EiM0.EVjl5YZnEK2i8r2D4e3Sz30M6t2e.Ce', 'jirawas tull', 'https://www.melivecode.com/users/2.png'),
(7, '2022-11-09 19:35:44.628', '2022-11-09 19:35:44.628', NULL, 'worawat@rmutsvmail.com', '$2a$10$8TKrQbLOdQ36WMU.eNdPzOFHVP08XKtdzPRwxHI/Nilxka9z9KGTS', 'worawat kum', 'https://www.melivecode.com/users/3.png'),
(8, '2022-11-09 19:45:01.497', '2022-11-09 19:45:01.497', NULL, 'aaa', '$2a$10$KfsEzKHQKnAGxU/f/Jpjd.NPoppvm1kQ73HTfsQm4C2YVfaswnMUq', 'aaa', 'aaa'),
(9, '2022-11-09 20:06:42.778', '2022-11-09 20:06:42.778', NULL, 'bbb', '$2a$10$d3gbtTcNgbvT00UiHx2AZ.9AWf5MMPGR92/Kg4jACBGNtWhYqhp8e', 'bbb', 'bbb'),
(12, '2022-11-10 16:30:57.164', '2022-11-10 16:30:57.164', NULL, 'jirawas.t@rmutsvmail.com', '$2a$10$cQAqHO4SpOSPw7R3mE4SHekekPskmH8NsJs7xAGAqU3qMqPLKlqta', 'Jirawas Tullayapongrak', 'https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/290965700_2459958390813104_7371417823486184920_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHFtkqWVp7xXfPcm0LcTNhbOMAuDPewV9U4wC4M97BX1aHm5SITFhN7H3vAm9PslQCFWT3oYq7BSoHZ7_DevwNE&_nc_ohc=UObVUemwqDoAX-zynh6&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfDDNv7MYY1F4wE9NNcWVRml4UZsVY17ALSCfsBcN10Xkg&oe=6372781E'),
(13, '2022-11-10 22:45:39.307', '2022-11-10 22:45:39.307', NULL, 'papsi@rmutsvmail.com', '$2a$10$pq2I6S4jKDBCQ1LZIQ7WE..ujV47wcsA9r87Koc61J1b7.F/Z1X56', 'papsi papna', 'https://scontent.fhdy1-1.fna.fbcdn.net/v/t39.30808-6/275512551_2606810256119822_5673138258625331590_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHhKwFMt2EndpyCt5TGY49r829SbhypTOzzb1JuHKlM7LaJz3YRqZjRteQvNjy-kkc0_0cCHFYh8TSGb74vqXkj&_nc_ohc=Z1Zw_WrwJCEAX8RygYu&tn=ky_xotT52KwUZhyo&_nc_ht=scontent.fhdy1-1.fna&oh=00_AfBD5QXxMLU_uMsrnRX6pXpCLStJNjbH5OKLkrsEV-AHuw&oe=6371BE9C');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_books_deleted_at` (`deleted_at`);

--
-- Indexes for table `userlgs`
--
ALTER TABLE `userlgs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_userlgs_deleted_at` (`deleted_at`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `userlgs`
--
ALTER TABLE `userlgs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
