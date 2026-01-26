CREATE TABLE `sessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`id_cliente` int,
	`created_at` datetime NOT NULL DEFAULT now(),
	CONSTRAINT `sessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_id_cliente_clients_id_fk` FOREIGN KEY (`id_cliente`) REFERENCES `clients`(`id`) ON DELETE no action ON UPDATE no action;