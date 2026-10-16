CREATE TABLE IF NOT EXISTS study_items (user_id TEXT NOT NULL, item_key TEXT NOT NULL, value_json TEXT NOT NULL, updated_at INTEGER NOT NULL, PRIMARY KEY (user_id, item_key));
