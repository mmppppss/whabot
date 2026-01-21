CREATE TABLE `clients` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(150) NOT NULL,
	`email` varchar(150) NOT NULL,
	`phone` varchar(30),
	`created_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `clients_id` PRIMARY KEY(`id`),
	CONSTRAINT `clients_email_unique` UNIQUE(`email`)
);
