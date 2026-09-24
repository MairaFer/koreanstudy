CREATE TABLE `study_items` (
	`user_id` text NOT NULL,
	`item_key` text NOT NULL,
	`value_json` text NOT NULL,
	`updated_at` integer NOT NULL,
	PRIMARY KEY(`user_id`, `item_key`)
);
