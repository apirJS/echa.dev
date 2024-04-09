import { sql } from 'drizzle-orm';
import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core';

const comments = sqliteTable('comments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull(),
  name: text('name').notNull(),
  imageUrl: text('imageUrl').notNull(),
  content: text('content').notNull(),
  createdAt: text("createdAt").default(sql`(datetime('now','localtime'))`)
});

export { comments };
