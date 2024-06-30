-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2024 a las 00:02:56
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `facebook`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `perfil` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `biografia` text DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `perfil`, `name`, `biografia`, `phone`, `email`, `password`, `fecha_creacion`) VALUES
(7, 'uploads\\1719691841162-359683194.png', 'Elias Alasia Moreno ', 'Hola soy nuevo', '3334445635', 'eliasalasia@gmail.com', '$2b$10$mkLV5ix/Ne0ziN/xYJwK..kVoUYxvbWwiHorXhvjm7u0NFUyaxE9e', '2024-06-29 18:05:45'),
(11, 'uploads\\1719782923817-479187009.png', 'Lionel Andres Messi', 'Campeon del Mundo', '123445667', 'lionelmessi@gmail.com', '$2b$10$F3IO.aS2f6WsAp8AN8DJWObG6LBooVXcSx3JIJ853SsKV5/zD09Lq', '2024-06-30 20:29:55'),
(12, 'uploads\\1719782996073-865067441.jpg', 'Angel Di Maria', 'Buscando club', '2347348597', 'Dimaria@gmail.com', '$2b$10$U4cO6uP9XDXaD4EOZlMjTu42grsMKrEllgYrFMvOiHQmIVFNc3N.a', '2024-06-30 20:30:26'),
(13, 'uploads\\1719783097192-139979662.jpeg', 'Emiliano Martinez', 'Mira te como', '2347141395', 'dibumartinez@gmail.com', '$2b$10$otMJWdTtUwseVIc1gBEmFeGKjTbv73LMupJosLqlgX11nu7JL5JVG', '2024-06-30 20:30:42'),
(14, 'uploads\\1719783218995-934255608.jpg', 'Cristiano Ronaldo', 'Siiiuuuuuu soy el bicho', '2307021915', 'cristiano@gmail.com', '$2b$10$97gIfrEaWbDhPpanPGm.IOgVz5tH22Mi910BpN.EDjj9NpR.IKCze', '2024-06-30 20:31:34'),
(17, 'uploads\\1719783310195-127437106.jpeg', 'Enzo Fernandez', 'Jugador del Chelsea', '0012638895', 'enzofernandez@gmail.com', '$2b$10$VyeDJgG3JpqFy5dxYgCirOe73ui5esAUU8MGL/SWeAFK965/WzZf.', '2024-06-30 20:37:37'),
(24, 'uploads\\1719783444064-339106393.jpg', 'Neymar Jr', 'Jugando en Arabia', '022263368', 'Neymar10@gmail.com', '$2b$10$oULfNJBcLVzksWKgVfoa0.Qjp4In8yGvjEgMAl3bLgVLRTNQzHd4y', '2024-06-30 21:35:55'),
(25, 'uploads\\1719783577298-415359033.jpg', 'Sergio Aguera', 'Jugador Retirado', '020364166', 'kunaguero@gmail.com', '$2b$10$6DRz3K1zb/Xj4kZ7reQoB.h3kYatyc.Vnf1QzJSHqAcfa.PrGUIXK', '2024-06-30 21:38:10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
