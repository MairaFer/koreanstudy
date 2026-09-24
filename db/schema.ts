// Compound ownership key isolates every student's progress and vocabulary.
import {sqliteTable, text, integer, primaryKey} from 'drizzle-orm/sqlite-core';
export const studyItems = sqliteTable('study_items', {
  userId: text('user_id').notNull(),
  key: text('item_key').notNull(),
  value: text('value_json').notNull(),
  updatedAt: integer('updated_at').notNull(),
}, table => [primaryKey({columns: [table.userId, table.key]})]);
